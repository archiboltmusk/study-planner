// Marrow NEET PG 2026 Study Schedule
// INI-CET May 2026: May 16 | NEET-PG 2026: Aug 30
//
// ── Why this isn't a full Marrow rewatch schedule ──────────────────────────────
// Core BTR (Zainab Vora's "BTR 2.0") is a condensed rapid-revision workbook —
// volatile facts, classifications, and Grand Tests. By design it's meant to be
// used ALONGSIDE a Qbank/video resource, not as a replacement for one — BTR's own
// materials say this explicitly, and it's the same conclusion the wider NEET-PG/
// INICET prep community lands on when comparing the two: BTR text covers "what
// to know" fully, but has almost no images, procedure footage, or mechanism
// animations. Marrow's actual edge over BTR's condensed notes is narrow and
// specific — spot-diagnosis image banks (Dermatology, Ophthalmology, Radiology,
// Pathology), procedure/OT videos (Surgery, OBG, Anaesthesia), and mechanism
// animations (Pharmacology MOA, Biochemistry pathways) that don't survive being
// compressed into one-liners. For fact/formula-dense subjects (PSM, Forensic,
// Psychiatry, Physiology) BTR's notes are already close to sufficient on their
// own, per community consensus and this app's own Zainab Vora tips.
//
// So instead of mirroring every BTR subject block hour-for-hour (which used to
// imply you must rewatch the *entire* Marrow course in parallel with BTR — a
// guaranteed source of burnout/FOMO), each day below lists only the specific,
// bounded Marrow supplement for that subject: what to watch, why BTR's notes
// don't cover it, and whether it's optional. Subjects marked `optional: true`
// are BTR-sufficient — skipping them is not falling behind.
export type MarrowPhase = 1 | 2 | 3 | 4 | 5;

export interface MarrowActivity {
  subject: string;          // display name
  hours: number;            // realistic supplement time, not a full-day mirror
  topics: string;           // exactly what to watch/review in Marrow
  note: string;             // why this needs Marrow — what BTR's notes don't cover
  optional?: boolean;       // true = BTR's notes are already sufficient here
  revision?: string;        // "R2" | "R3" | "R4"
  drillSubject?: string;    // maps to QUESTION_SUBJECTS
}

export interface MarrowDay {
  day: number;
  iso: string;              // "2026-05-23"
  label: string;            // "Sat, May 23"
  phase: MarrowPhase;
  isTest: boolean;
  testName?: string;
  isBuffer: boolean;
  isOpenRevision: boolean;  // Days 61-71, 74-99
  isExamDay: boolean;
  activities: MarrowActivity[];
}

const DRILL_SUBJECT_MAP: Record<string, string> = {
  "Anatomy":            "Anatomy",
  "Biochemistry":       "Biochemistry",
  "Physiology":         "Physiology",
  "Pharmacology":       "Pharmacology",
  "Microbiology":       "Microbiology",
  "Pathology":          "Pathology",
  "Community Medicine": "PSM/Community Medicine",
  "Forensic Medicine":  "Forensic Medicine",
  "Ophthalmology":      "ENT/Ophthalmology",
  "ENT":                "ENT/Ophthalmology",
  "Medicine":           "Medicine",
  "Surgery":            "Surgery",
  "Paediatrics":        "Paediatrics",
  "OBG":                "OBG",
  "Orthopaedics":       "Surgery",
  "Dermatology":        "Medicine",
  "Psychiatry":         "Medicine",
  "Radiology":          "Medicine",
  "Anaesthesia":        "Medicine",
};

// Curated Marrow supplement per subject — only the image/video/procedure content
// that BTR's condensed notes genuinely can't replace. `optional: true` subjects
// are fact/formula-heavy and already well covered by BTR alone.
interface SupplementPack {
  hours: number;
  topics: string;
  note: string;
  optional?: boolean;
}

const SUPPLEMENT_PACKS: Record<string, SupplementPack> = {
  "Surgery": {
    hours: 2,
    topics: "OT technique videos (hernia repair, stoma types, thyroidectomy steps) + surgical instrument photo bank",
    note: "BTR's Surgery notes are indications/classifications as text only. Marrow is the only source with OT footage and instrument photos — the two things that trip people up in image-based Surgery questions.",
  },
  "Orthopaedics": {
    hours: 1.5,
    topics: "Annotated fracture X-ray bank (Colles, Monteggia/Galeazzi, NOF, growth plate) + splinting/traction demo videos",
    note: "BTR lists fracture facts as text — you still need to have seen the X-ray pattern enough times on Marrow to recognise it cold under exam pressure.",
  },
  "Radiology": {
    hours: 2,
    topics: "Full plain-film + CT/MRI image-bank pass for today's system (CXR signs, abdomen CT patterns, contrast basics)",
    note: "Radiology questions are image recognition, not fact recall. BTR's one-liners (\"Rigler sign = pneumoperitoneum\") only work once Marrow's image bank has trained your eye to spot it.",
  },
  "Microbiology": {
    hours: 1,
    topics: "Culture media colony/colour photo bank + Gram stain and parasite life-cycle animation videos",
    note: "BTR covers virulence factors and resistance patterns well as text. The actual stain/colony images and life-cycle diagrams are Marrow-only.",
  },
  "Anatomy": {
    hours: 1,
    topics: "Cross-sectional and radiological anatomy images (nerve/vessel relations) for today's region",
    note: "BTR's clinical correlations read well as text, but cross-sectional/radiological anatomy still needs Marrow's labelled images to actually stick.",
  },
  "Medicine": {
    hours: 2,
    topics: "ECG strip bank + CXR pattern bank + relevant procedure videos (central line, ABG interpretation) for today's system",
    note: "BTR's Medicine notes are fact-dense and genuinely good — but ECG/CXR pattern recognition and bedside procedure steps are only trained by watching Marrow.",
  },
  "OBG": {
    hours: 1.5,
    topics: "Partograph-reading practice + forceps/vacuum/LSCS procedure videos + USG image bank (dating, anomaly scan)",
    note: "BTR nails PPH/PIH protocols as text. Partograph reading and USG image interpretation are visual skills that need Marrow's walkthroughs.",
  },
  "Paediatrics": {
    hours: 1,
    topics: "Growth-chart plotting practice + NRP algorithm video + vaccine administration demo",
    note: "BTR's vaccine schedule and milestone tables are already complete — this block is only for the growth-chart and NRP-video skills that don't come across in text.",
  },
  "Community Medicine": {
    hours: 0.5,
    optional: true,
    topics: "Only if a specific biostatistics formula or study-design concept isn't clicking after BTR + Reflex",
    note: "PSM is formula/fact-based — BTR's notes plus practice problems are usually enough on their own. Skipping Marrow here is not falling behind.",
  },
  "Dermatology": {
    hours: 1.5,
    topics: "Clinical photo spot-diagnosis bank (psoriasis, pemphigus vs bullous pemphigoid, leprosy lesions)",
    note: "NEET PG Dermatology is almost entirely photo-based spot diagnosis — this is one of the two subjects (with Ophthalmology) where the Marrow block is not optional.",
  },
  "Anaesthesia": {
    hours: 1,
    topics: "Airway equipment photo bank + regional block technique videos",
    note: "BTR's MAC values and drug facts are solid; equipment recognition and block technique are visual skills only Marrow actually trains.",
  },
  "Biochemistry": {
    hours: 1,
    topics: "Metabolic pathway animation videos for today's disorder group — only the pathways you can't redraw from memory",
    note: "If you can already redraw the pathway from BTR's notes, skip this block. It's only for pathways that don't stick from text alone.",
  },
  "Forensic Medicine": {
    hours: 0.5,
    optional: true,
    topics: "Only for wound-pattern or injury photos you consistently get wrong in Reflex",
    note: "Forensic is section numbers and classification-heavy — BTR's notes cover this fully. Marrow only adds value for wound/injury photo recognition.",
  },
  "Psychiatry": {
    hours: 0.5,
    optional: true,
    topics: "Only if a specific DSM-5-TR criterion set isn't sticking after BTR's tables",
    note: "Psychiatry is criteria-based and BTR's tables are enough for most students. Skip this block with no guilt unless one criterion keeps tripping you up.",
  },
  "ENT": {
    hours: 1,
    topics: "Otoscopy/endoscopy image bank + audiogram pattern-reading practice",
    note: "BTR's CSOM and staging facts are solid; audiogram reading and otoscopic image ID are the two skills that actually need Marrow's practice sets.",
  },
  "Ophthalmology": {
    hours: 1.5,
    topics: "Fundus photo + slit-lamp image bank (diabetic retinopathy grading, glaucoma field defects, cataract types)",
    note: "Like Dermatology, Ophthalmology in NEET PG is largely image-based spot diagnosis — this is a required block, not optional.",
  },
  "Pathology": {
    hours: 1.5,
    topics: "Gross and histopathology image bank for today's system (tumour morphology, staining patterns)",
    note: "BTR's marker tables (PSA, AFP, CA-125) are complete as text; gross/micro image recognition is Marrow-only territory.",
  },
  "Pharmacology": {
    hours: 1,
    topics: "Mechanism-of-action animation videos for today's drug class — only the ones that don't make sense from BTR's table",
    note: "BTR's drug-of-choice tables are enough for recall. MOA animations only help if the mechanism itself isn't clicking yet.",
  },
  "Physiology": {
    hours: 0.5,
    optional: true,
    topics: "Only for mechanisms (e.g. JGA, cardiac cycle) that don't make sense from BTR's diagrams",
    note: "BTR is already diagram-heavy for Physiology. Marrow adds value only if a specific mechanism needs a slower video explanation.",
  },
};

// Exposed so the UI can show the same topics/note/optional info for
// user-customised days (built via the schedule editor) as for the default plan.
export function getSupplementInfo(subject: string): { topics: string; note: string; optional?: boolean } {
  const pack = SUPPLEMENT_PACKS[subject];
  if (!pack) {
    return {
      topics: "General Marrow review of weak areas only",
      note: "Use only for concepts flagged weak in Reflex/mistake logbook — BTR's notes cover the rest.",
    };
  }
  return { topics: pack.topics, note: pack.note, optional: pack.optional };
}

function act(subject: string, _btrEquivalentHours: number, revision?: string): MarrowActivity {
  const pack = SUPPLEMENT_PACKS[subject];
  const drillSubject = DRILL_SUBJECT_MAP[subject];
  if (!pack) {
    return {
      subject, hours: 1, revision, drillSubject,
      topics: "General Marrow review of weak areas only",
      note: "Use only for concepts flagged weak in Reflex/mistake logbook — BTR's notes cover the rest.",
    };
  }
  if (revision) {
    return {
      subject, revision, drillSubject,
      hours: pack.optional ? 0.25 : 0.5,
      topics: `Quick re-scan — flagged/weak items only, from: ${pack.topics}`,
      note: `${pack.note} (Spot-check only during revision passes — not a full rewatch.)`,
      optional: pack.optional,
    };
  }
  return {
    subject, drillSubject,
    hours: pack.hours,
    topics: pack.topics,
    note: pack.note,
    optional: pack.optional,
  };
}

// ── Alignment note ────────────────────────────────────────────────────────────
// Aligned with Core BTR schedule subject order:
// Phase 1: Surgery → Orthopaedics → Radiology → Microbiology → Anatomy → GT-5
// Phase 2: CVS+Renal+Haem+GI → Neuro+Endo+Rheum+Respi → Path+Pharm+Physio+Immuno → GT-6
// Phase 3: OBG → Paediatrics → PSM → Dermatology → Anaesthesia → GT-7
// Phase 4: Biochemistry → FMT → Psychiatry → ENT → Ophthalmology → GT-8
// Final:   Revision Cycle #2 → Revision Cycle #3 (Mega-NEET BTR)

export const MARROW_SCHEDULE: MarrowDay[] = [
  // ── PHASE 1: Baseline + First Pass (Days 1–23) ────────────────────────────
  {
    day: 1, iso: "2026-05-23", label: "Sat, May 23", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Medicine", 12)],
  },
  // Baseline Grand Test 4 — LOCKED
  {
    day: 2, iso: "2026-05-24", label: "Sun, May 24", phase: 1,
    isTest: true, testName: "Baseline Grand Test 4", isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [],
  },
  // Buffer after GT4
  {
    day: 3, iso: "2026-05-25", label: "Mon, May 25", phase: 1,
    isTest: false, isBuffer: true, isOpenRevision: false, isExamDay: false,
    activities: [],
  },
  {
    day: 4, iso: "2026-05-26", label: "Tue, May 26", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Medicine", 12)],
  },
  // Surgery — May 27–30 (4 days)
  {
    day: 5, iso: "2026-05-27", label: "Wed, May 27", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Surgery", 12)],
  },
  {
    day: 6, iso: "2026-05-28", label: "Thu, May 28", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Surgery", 12)],
  },
  {
    day: 7, iso: "2026-05-29", label: "Fri, May 29", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Surgery", 12)],
  },
  {
    day: 8, iso: "2026-05-30", label: "Sat, May 30", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Surgery", 12)],
  },
  // Orthopaedics — May 31–Jun 1 (2 days)
  {
    day: 9, iso: "2026-05-31", label: "Sun, May 31", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Orthopaedics", 12)],
  },
  {
    day: 10, iso: "2026-06-01", label: "Mon, Jun 1", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Orthopaedics", 12)],
  },
  // Radiology — Jun 2–3 (2 days)
  {
    day: 11, iso: "2026-06-02", label: "Tue, Jun 2", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Radiology", 12)],
  },
  {
    day: 12, iso: "2026-06-03", label: "Wed, Jun 3", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Radiology", 12)],
  },
  // Buffer / review day Jun 4
  {
    day: 13, iso: "2026-06-04", label: "Thu, Jun 4", phase: 1,
    isTest: false, isBuffer: true, isOpenRevision: false, isExamDay: false,
    activities: [],
  },
  // Microbiology — Jun 5–7 (3 days)
  {
    day: 14, iso: "2026-06-05", label: "Fri, Jun 5", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Microbiology", 12)],
  },
  {
    day: 15, iso: "2026-06-06", label: "Sat, Jun 6", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Microbiology", 12)],
  },
  {
    day: 16, iso: "2026-06-07", label: "Sun, Jun 7", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Microbiology", 12)],
  },
  // Anatomy — Jun 8–10 (3 days)
  {
    day: 17, iso: "2026-06-08", label: "Mon, Jun 8", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Anatomy", 12)],
  },
  {
    day: 18, iso: "2026-06-09", label: "Tue, Jun 9", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Anatomy", 12)],
  },
  {
    day: 19, iso: "2026-06-10", label: "Wed, Jun 10", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Anatomy", 12)],
  },
  // Grand Test 5 — LOCKED (Jun 11, Sun → moved to nearest Sunday)
  {
    day: 20, iso: "2026-06-11", label: "Thu, Jun 11", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Anatomy", 6), act("ENT", 3), act("Ophthalmology", 3)],
  },
  // Grand Test 5 — LOCKED
  {
    day: 21, iso: "2026-06-12", label: "Fri, Jun 12", phase: 1,
    isTest: true, testName: "Core BTR GT-5", isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [],
  },
  // Buffer after GT5
  {
    day: 22, iso: "2026-06-13", label: "Sat, Jun 13", phase: 1,
    isTest: false, isBuffer: true, isOpenRevision: false, isExamDay: false,
    activities: [],
  },
  // Cross-revision wrap-up
  {
    day: 23, iso: "2026-06-14", label: "Sun, Jun 14", phase: 1,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Surgery", 4, "R2"), act("Orthopaedics", 4, "R2"), act("Microbiology", 4, "R2")],
  },

  // ── PHASE 2: Systems Integration (Days 24–34) ────────────────────────────
  // CVS + Renal + Haematology + GI — Jun 13–16
  {
    day: 24, iso: "2026-06-15", label: "Mon, Jun 15", phase: 2,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Medicine", 12, "R2")],
  },
  {
    day: 25, iso: "2026-06-16", label: "Tue, Jun 16", phase: 2,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Medicine", 12, "R2")],
  },
  // Neuro + Endo + Rheumatology + Respiratory — Jun 17–20
  {
    day: 26, iso: "2026-06-17", label: "Wed, Jun 17", phase: 2,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Medicine", 12, "R2")],
  },
  {
    day: 27, iso: "2026-06-18", label: "Thu, Jun 18", phase: 2,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Medicine", 12, "R2")],
  },
  {
    day: 28, iso: "2026-06-19", label: "Fri, Jun 19", phase: 2,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Medicine", 8, "R2"), act("Physiology", 4, "R2")],
  },
  {
    day: 29, iso: "2026-06-20", label: "Sat, Jun 20", phase: 2,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Medicine", 6, "R2"), act("Physiology", 6, "R2")],
  },
  // Gen Path + Pharm + Physio + Immunology — Jun 21–22
  {
    day: 30, iso: "2026-06-21", label: "Sun, Jun 21", phase: 2,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Pathology", 6, "R2"), act("Pharmacology", 6, "R2")],
  },
  {
    day: 31, iso: "2026-06-22", label: "Mon, Jun 22", phase: 2,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Pharmacology", 5, "R2"), act("Physiology", 4, "R2"), act("Biochemistry", 3, "R2")],
  },
  // Grand Test 6 — LOCKED
  {
    day: 32, iso: "2026-06-23", label: "Tue, Jun 23", phase: 2,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Biochemistry", 4, "R2"), act("Physiology", 4, "R2"), act("Anatomy", 4, "R2")],
  },
  {
    day: 33, iso: "2026-06-24", label: "Wed, Jun 24", phase: 2,
    isTest: true, testName: "Core BTR GT-6", isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [],
  },
  // Buffer after GT6
  {
    day: 34, iso: "2026-06-25", label: "Thu, Jun 25", phase: 2,
    isTest: false, isBuffer: true, isOpenRevision: false, isExamDay: false,
    activities: [],
  },

  // ── PHASE 3: Clinical Subjects (Days 35–48) ───────────────────────────────
  // OBG — Jun 25–28
  {
    day: 35, iso: "2026-06-26", label: "Fri, Jun 26", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("OBG", 12, "R2")],
  },
  {
    day: 36, iso: "2026-06-27", label: "Sat, Jun 27", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("OBG", 12, "R2")],
  },
  {
    day: 37, iso: "2026-06-28", label: "Sun, Jun 28", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("OBG", 12, "R2")],
  },
  // Paediatrics — Jun 29–30
  {
    day: 38, iso: "2026-06-29", label: "Mon, Jun 29", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Paediatrics", 12, "R2")],
  },
  {
    day: 39, iso: "2026-06-30", label: "Tue, Jun 30", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Paediatrics", 12, "R2")],
  },
  // Buffer Jul 1
  {
    day: 40, iso: "2026-07-01", label: "Wed, Jul 1", phase: 3,
    isTest: false, isBuffer: true, isOpenRevision: false, isExamDay: false,
    activities: [],
  },
  // PSM / Community Medicine — Jul 2–5
  {
    day: 41, iso: "2026-07-02", label: "Thu, Jul 2", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Community Medicine", 12, "R2")],
  },
  {
    day: 42, iso: "2026-07-03", label: "Fri, Jul 3", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Community Medicine", 12, "R2")],
  },
  {
    day: 43, iso: "2026-07-04", label: "Sat, Jul 4", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Community Medicine", 12, "R2")],
  },
  // Dermatology — Jul 6–7
  {
    day: 44, iso: "2026-07-05", label: "Sun, Jul 5", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Community Medicine", 6, "R2"), act("Dermatology", 6, "R2")],
  },
  {
    day: 45, iso: "2026-07-06", label: "Mon, Jul 6", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Dermatology", 12, "R2")],
  },
  // Anaesthesia — Jul 8–9
  {
    day: 46, iso: "2026-07-07", label: "Tue, Jul 7", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Dermatology", 6, "R2"), act("Anaesthesia", 6, "R2")],
  },
  {
    day: 47, iso: "2026-07-08", label: "Wed, Jul 8", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Anaesthesia", 12, "R2")],
  },
  // Grand Test 7 — LOCKED
  {
    day: 48, iso: "2026-07-09", label: "Thu, Jul 9", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Anaesthesia", 6, "R2"), act("OBG", 3, "R3"), act("Paediatrics", 3, "R3")],
  },
  {
    day: 49, iso: "2026-07-10", label: "Fri, Jul 10", phase: 3,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("OBG", 6, "R3"), act("Paediatrics", 6, "R3")],
  },
  {
    day: 50, iso: "2026-07-11", label: "Sat, Jul 11", phase: 3,
    isTest: true, testName: "Core BTR GT-7", isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [],
  },
  // Buffer after GT7
  {
    day: 51, iso: "2026-07-12", label: "Sun, Jul 12", phase: 3,
    isTest: false, isBuffer: true, isOpenRevision: false, isExamDay: false,
    activities: [],
  },

  // ── PHASE 4: Specialist Subjects + Final GTs (Days 52–73) ────────────────
  // Biochemistry — Jul 12–14
  {
    day: 52, iso: "2026-07-13", label: "Mon, Jul 13", phase: 4,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Biochemistry", 12, "R3")],
  },
  {
    day: 53, iso: "2026-07-14", label: "Tue, Jul 14", phase: 4,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Biochemistry", 12, "R3")],
  },
  // Buffer Jul 15
  {
    day: 54, iso: "2026-07-15", label: "Wed, Jul 15", phase: 4,
    isTest: false, isBuffer: true, isOpenRevision: false, isExamDay: false,
    activities: [],
  },
  // Forensic Medicine & Toxicology — Jul 16–17
  {
    day: 55, iso: "2026-07-16", label: "Thu, Jul 16", phase: 4,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Forensic Medicine", 12, "R3")],
  },
  {
    day: 56, iso: "2026-07-17", label: "Fri, Jul 17", phase: 4,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Forensic Medicine", 12, "R3")],
  },
  // Psychiatry — Jul 18–19
  {
    day: 57, iso: "2026-07-18", label: "Sat, Jul 18", phase: 4,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Psychiatry", 12, "R3")],
  },
  {
    day: 58, iso: "2026-07-19", label: "Sun, Jul 19", phase: 4,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Psychiatry", 12, "R3")],
  },
  // ENT — Jul 20–21
  {
    day: 59, iso: "2026-07-20", label: "Mon, Jul 20", phase: 4,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("ENT", 12, "R3")],
  },
  {
    day: 60, iso: "2026-07-21", label: "Tue, Jul 21", phase: 4,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("ENT", 12, "R3")],
  },
  // Ophthalmology — Jul 22–24
  {
    day: 61, iso: "2026-07-22", label: "Wed, Jul 22", phase: 4,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Ophthalmology", 12, "R3")],
  },
  {
    day: 62, iso: "2026-07-23", label: "Thu, Jul 23", phase: 4,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Ophthalmology", 12, "R3")],
  },
  {
    day: 63, iso: "2026-07-24", label: "Fri, Jul 24", phase: 4,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("Ophthalmology", 6, "R3"), act("Biochemistry", 3, "R4"), act("Forensic Medicine", 3, "R4")],
  },
  // Grand Test 8 — LOCKED
  {
    day: 64, iso: "2026-07-25", label: "Sat, Jul 25", phase: 4,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [act("ENT", 4, "R4"), act("Ophthalmology", 4, "R4"), act("Psychiatry", 4, "R4")],
  },
  {
    day: 65, iso: "2026-07-26", label: "Sun, Jul 26", phase: 4,
    isTest: true, testName: "Core BTR GT-8", isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [],
  },
  // Buffer after GT8
  {
    day: 66, iso: "2026-07-27", label: "Mon, Jul 27", phase: 4,
    isTest: false, isBuffer: true, isOpenRevision: false, isExamDay: false,
    activities: [],
  },

  // Days 67–71: Open revision — Revision Cycle #2
  ...(Array.from({ length: 5 }, (_, i) => {
    const labels = ["Tue, Jul 28","Wed, Jul 29","Thu, Jul 30","Fri, Jul 31","Sat, Aug 1"];
    const isos   = ["2026-07-28","2026-07-29","2026-07-30","2026-07-31","2026-08-01"];
    return {
      day: 67 + i, iso: isos[i], label: labels[i], phase: 4 as MarrowPhase,
      isTest: false, isBuffer: false, isOpenRevision: true, isExamDay: false,
      activities: [],
    };
  })),

  // National NEET-PG Mock — LOCKED
  {
    day: 72, iso: "2026-08-02", label: "Sun, Aug 2", phase: 4,
    isTest: true, testName: "National NEET-PG Mock 2026", isBuffer: false, isOpenRevision: false, isExamDay: false,
    activities: [],
  },
  // Buffer after National Mock
  {
    day: 73, iso: "2026-08-03", label: "Mon, Aug 3", phase: 4,
    isTest: false, isBuffer: true, isOpenRevision: false, isExamDay: false,
    activities: [],
  },

  // ── PHASE 5: Final Runway + Exam Day (Days 74–100) ────────────────────────
  ...(Array.from({ length: 26 }, (_, i) => {
    const dayNum = 74 + i;
    const dayLabels = [
      "Tue, Aug 4","Wed, Aug 5","Thu, Aug 6","Fri, Aug 7","Sat, Aug 8","Sun, Aug 9",
      "Mon, Aug 10","Tue, Aug 11","Wed, Aug 12","Thu, Aug 13","Fri, Aug 14","Sat, Aug 15",
      "Sun, Aug 16","Mon, Aug 17","Tue, Aug 18","Wed, Aug 19","Thu, Aug 20","Fri, Aug 21",
      "Sat, Aug 22","Sun, Aug 23","Mon, Aug 24","Tue, Aug 25","Wed, Aug 26","Thu, Aug 27",
      "Fri, Aug 28","Sat, Aug 29",
    ];
    const isos = [
      "2026-08-04","2026-08-05","2026-08-06","2026-08-07","2026-08-08","2026-08-09",
      "2026-08-10","2026-08-11","2026-08-12","2026-08-13","2026-08-14","2026-08-15",
      "2026-08-16","2026-08-17","2026-08-18","2026-08-19","2026-08-20","2026-08-21",
      "2026-08-22","2026-08-23","2026-08-24","2026-08-25","2026-08-26","2026-08-27",
      "2026-08-28","2026-08-29",
    ];
    return {
      day: dayNum, iso: isos[i], label: dayLabels[i], phase: 5 as MarrowPhase,
      isTest: false, isBuffer: false, isOpenRevision: true, isExamDay: false,
      activities: [],
    };
  })),

  {
    day: 100, iso: "2026-08-30", label: "Sun, Aug 30", phase: 5,
    isTest: false, isBuffer: false, isOpenRevision: false, isExamDay: true,
    activities: [],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getTodayMarrowDay(): MarrowDay | null {
  const today = new Date();
  const iso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  return MARROW_SCHEDULE.find(d => d.iso === iso) ?? null;
}

export const MARROW_PHASE_LABELS: Record<MarrowPhase, string> = {
  1: "Phase 1 · Surgery → Ortho → Radiology → Micro → Anatomy",
  2: "Phase 2 · CVS / Neuro / Path / Pharm / Physio",
  3: "Phase 3 · OBG → Paeds → PSM → Derm → Anaesthesia",
  4: "Phase 4 · Biochem → FMT → Psych → ENT → Ophth",
  5: "Phase 5 · Final Runway",
};

export const NEXT_TESTS = [
  { name: "Baseline Grand Test 4",    iso: "2026-05-24" },
  { name: "Core BTR GT-5",            iso: "2026-06-12" },
  { name: "Core BTR GT-6",            iso: "2026-06-24" },
  { name: "Core BTR GT-7",            iso: "2026-07-11" },
  { name: "Core BTR GT-8",            iso: "2026-07-26" },
  { name: "National NEET-PG Mock",    iso: "2026-08-02" },
  { name: "NEET-PG 2026",             iso: "2026-08-30" },
];
