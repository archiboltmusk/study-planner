/**
 * Daily INI-CET / NEET PG question generator.
 * Generates ~500 high-yield questions via Claude and upserts them into
 * the Supabase `pyq_questions` table.
 *
 * Env vars required:
 *   ANTHROPIC_API_KEY
 *   SUPABASE_URL
 *   SUPABASE_SERVICE_KEY  (service role, needed for inserts)
 */

import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";

// ─── Config ───────────────────────────────────────────────────────────────────

const BATCH_SIZE = 40; // questions per subject call

const SUBJECTS = [
  {
    name: "Medicine",
    topics: [
      "Cardiology (MI, HF, arrhythmias, valvular disease)",
      "Nephrology (AKI, CKD, glomerulonephritis, electrolytes)",
      "Neurology (stroke, epilepsy, dementia, movement disorders)",
      "Endocrinology (diabetes, thyroid, adrenal, pituitary)",
      "Gastroenterology (IBD, liver disease, GI bleeding, pancreatitis)",
      "Pulmonology (COPD, asthma, TB, ILD, PE)",
      "Rheumatology (SLE, RA, vasculitis, crystal arthropathies)",
    ],
  },
  {
    name: "Surgery",
    topics: [
      "General Surgery (hernias, appendicitis, bowel obstruction)",
      "Hepatobiliary (gallstones, cholecystitis, jaundice, liver tumors)",
      "Breast & Thyroid Surgery",
      "Orthopedics (fractures, dislocations, bone tumors, joint replacements)",
      "Urology (renal stones, BPH, carcinoma, urinary tract)",
      "Trauma & Emergency Surgery",
      "Vascular Surgery (aneurysm, peripheral vascular disease, DVT)",
    ],
  },
  {
    name: "Pathology",
    topics: [
      "General Pathology (inflammation, healing, cell injury, necrosis)",
      "Neoplasia (tumor markers, oncogenes, carcinogenesis)",
      "Hematology (anemias, leukemias, lymphomas, coagulation)",
      "Systemic Pathology — Cardiovascular & Respiratory",
      "Systemic Pathology — Renal, GI & Hepatic",
      "Immunopathology (hypersensitivity, autoimmune diseases)",
    ],
  },
  {
    name: "Pharmacology",
    topics: [
      "ANS pharmacology (adrenergics, cholinergics, blockers)",
      "CNS drugs (antiepileptics, antipsychotics, antidepressants, analgesics)",
      "Cardiovascular pharmacology (antihypertensives, antiarrhythmics, anticoagulants)",
      "Antibiotics & antimicrobials (mechanisms, resistance, spectrum)",
      "Endocrine pharmacology (antidiabetics, corticosteroids, thyroid drugs)",
      "Chemotherapy (cancer drugs, mechanisms, adverse effects)",
      "Pharmacokinetics & pharmacodynamics",
    ],
  },
  {
    name: "OBG",
    topics: [
      "Obstetrics (normal labor, complications, antepartum hemorrhage, preeclampsia)",
      "High-risk pregnancy (diabetes, hypertension, cardiac disease in pregnancy)",
      "Gynecology (PCOS, endometriosis, fibroids, ovarian tumors)",
      "Reproductive endocrinology & infertility",
      "Family planning & contraception",
      "Cervical & uterine carcinoma",
    ],
  },
  {
    name: "Paediatrics",
    topics: [
      "Neonatology (birth asphyxia, jaundice, respiratory distress, NEC)",
      "Growth & development milestones",
      "Nutrition & nutritional deficiencies in children",
      "Pediatric infectious diseases (viral exanthems, meningitis, dengue)",
      "National immunization schedule & vaccines",
      "Congenital heart diseases",
    ],
  },
  {
    name: "PSM/Community Medicine",
    topics: [
      "Epidemiology (study designs, bias, measures of disease frequency)",
      "Biostatistics (sensitivity, specificity, NNT, p-value, confidence intervals)",
      "National health programs (TB, leprosy, malaria, RNTCP, NVBDCP)",
      "Nutrition & food safety",
      "Environmental health & occupational diseases",
      "Screening tests & preventive medicine",
    ],
  },
  {
    name: "Microbiology",
    topics: [
      "Bacteriology (gram-positive, gram-negative, mycobacteria, spirochetes)",
      "Virology (HIV, hepatitis viruses, herpesviruses, respiratory viruses)",
      "Mycology (Candida, Aspergillus, Cryptococcus, dermatophytes)",
      "Parasitology (Plasmodium, Leishmania, helminthiasis, protozoa)",
      "Immunology (complement, immunoglobulins, cell-mediated immunity)",
      "Clinical microbiology & diagnostic methods",
    ],
  },
  {
    name: "Forensic Medicine",
    topics: [
      "Thanatology (signs of death, postmortem changes, time since death)",
      "Medico-legal aspects (consent, POCSO, MLC writing, dying declaration)",
      "Wounds (contusions, lacerations, incised, firearm wounds)",
      "Toxicology (common poisons: organophosphate, CO, opioids, arsenic)",
      "Sexual offences & examination",
      "Age estimation & identification",
    ],
  },
  {
    name: "Anatomy",
    topics: [
      "Gross Anatomy — Upper & Lower Limb (nerves, vessels, muscles)",
      "Gross Anatomy — Thorax, Abdomen & Pelvis",
      "Head & Neck Anatomy (cranial nerves, sinuses, triangles)",
      "Neuroanatomy (tracts, nuclei, cerebellum, basal ganglia)",
      "Embryology (developmental anomalies, pharyngeal arches)",
      "Histology (epithelium, connective tissue, organs)",
    ],
  },
  {
    name: "Physiology",
    topics: [
      "Cardiovascular physiology (cardiac cycle, ECG, pressure-volume loops)",
      "Renal physiology (GFR, tubular transport, concentration mechanism)",
      "Respiratory physiology (volumes, lung mechanics, gas exchange, control)",
      "Neurophysiology (action potential, synaptic transmission, reflexes)",
      "Endocrine physiology (feedback mechanisms, hormonal regulation)",
      "GIT physiology (secretions, motility, absorption)",
    ],
  },
  {
    name: "Biochemistry",
    topics: [
      "Carbohydrate metabolism (glycolysis, TCA, gluconeogenesis, glycogen)",
      "Lipid metabolism (fatty acid synthesis, beta-oxidation, cholesterol)",
      "Protein & amino acid metabolism (urea cycle, enzyme disorders)",
      "Vitamins & minerals (deficiency diseases, toxicity, mechanisms)",
      "Molecular biology (DNA replication, transcription, translation, PCR)",
      "Enzymes & metabolic regulation",
    ],
  },
  {
    name: "ENT/Ophthalmology",
    topics: [
      "Ear (otitis media, CSOM, cholesteatoma, otosclerosis, sensorineural HL)",
      "Nose & sinuses (rhinitis, sinusitis, epistaxis, nasal polyps, deviated septum)",
      "Throat & larynx (tonsillitis, laryngitis, vocal cord pathology, laryngeal Ca)",
      "Cornea & anterior segment (keratitis, glaucoma, cataract)",
      "Retina & posterior segment (CRVO, CRAO, diabetic retinopathy, RD)",
      "Squint, refractive errors & neuro-ophthalmology",
    ],
  },
];

// ─── Anthropic & Supabase clients ────────────────────────────────────────────

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// ─── Generation ──────────────────────────────────────────────────────────────

function buildPrompt(subject) {
  const topicList = subject.topics.map((t, i) => `  ${i + 1}. ${t}`).join("\n");
  return `You are a senior medical educator preparing a rank-1 NEET PG / INI-CET question bank. Generate exactly ${BATCH_SIZE} high-quality MCQs for: **${subject.name}**

Cover these topics proportionally:
${topicList}

Rules for every question:
• Strictly follows NEET PG / INI-CET / AIIMS PG exam pattern (2019-2024)
• One clear correct answer; three plausible distractors
• Explanation: 3-5 sentences — state the correct answer rationale AND why each distractor is wrong
• Mnemonic: include a concise, memorable mnemonic where one exists (null if none)
• Key concept: one sentence capturing the testable core principle
• Difficulty: "easy" = pure recall, "medium" = application, "hard" = complex multi-step reasoning
• exam_hint: approximate source like "INI-CET Nov 2023" or "AIIMS May 2022" (make plausible, not fabricated)

Return ONLY a valid JSON array. No markdown fences, no extra commentary:
[
  {
    "topic": "string",
    "question": "string",
    "options": ["string","string","string","string"],
    "correct_answer": 0,
    "explanation": "string",
    "mnemonic": "string or null",
    "key_concept": "string",
    "difficulty": "easy|medium|hard",
    "exam_hint": "string"
  }
]`;
}

async function generateForSubject(subject) {
  const msg = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 8192,
    messages: [{ role: "user", content: buildPrompt(subject) }],
  });

  const raw = msg.content[0]?.type === "text" ? msg.content[0].text : "";

  // Extract first JSON array from response (handles any stray preamble)
  const match = raw.match(/\[[\s\S]*\]/);
  if (!match) throw new Error("No JSON array in response");

  const rows = JSON.parse(match[0]);
  const today = new Date().toISOString().slice(0, 10);

  return rows
    .filter(
      (q) =>
        typeof q.question === "string" &&
        Array.isArray(q.options) &&
        q.options.length === 4 &&
        typeof q.correct_answer === "number"
    )
    .map((q) => ({
      subject: subject.name,
      topic: q.topic || subject.name,
      question: q.question,
      options: q.options,
      correct_answer: Math.min(3, Math.max(0, Math.round(q.correct_answer))),
      explanation: q.explanation || "",
      mnemonic: q.mnemonic || null,
      key_concept: q.key_concept || null,
      difficulty: ["easy", "medium", "hard"].includes(q.difficulty)
        ? q.difficulty
        : "medium",
      exam_hint: q.exam_hint || null,
      batch_date: today,
    }));
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const batchDate = new Date().toISOString().slice(0, 10);
  console.log(`\n🚀 INI-CET Daily Question Generator — batch ${batchDate}\n`);

  let totalInserted = 0;
  let totalFailed = 0;

  for (const subject of SUBJECTS) {
    process.stdout.write(`  Generating ${BATCH_SIZE} Qs for ${subject.name} ... `);
    try {
      const rows = await generateForSubject(subject);
      const { error } = await supabase.from("pyq_questions").insert(rows);
      if (error) {
        console.log(`❌ DB error: ${error.message}`);
        totalFailed += BATCH_SIZE;
      } else {
        console.log(`✅ ${rows.length} inserted`);
        totalInserted += rows.length;
      }
    } catch (err) {
      console.log(`❌ ${err.message}`);
      totalFailed += BATCH_SIZE;
    }
    // Respect rate limits
    await new Promise((r) => setTimeout(r, 1500));
  }

  console.log(`\n📊 Done — inserted: ${totalInserted}  failed: ${totalFailed}\n`);

  if (totalInserted < 100) {
    console.error("Less than 100 questions inserted — treating as failure.");
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
