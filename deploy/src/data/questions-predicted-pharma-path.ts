import type { Question } from "./questions";
export const PREDICTED_PHARMA_PATH_QUESTIONS: Question[] = [
  // ─── PHARMACOLOGY (IDs 7401-7450) ────────────────────────────────────────
  {
    id: 7401,
    subject: "Pharmacology",
    stem: "Which of the following best describes the mechanism of action of GLP-1 receptor agonists such as semaglutide?",
    options: [
      "They stimulate insulin secretion independently of blood glucose concentration",
      "They act as incretin mimetics causing glucose-dependent insulin secretion, inhibit glucagon, slow gastric emptying, and reduce appetite",
      "They block the sodium-glucose cotransporter 2 in the proximal convoluted tubule",
      "They activate AMPK by inhibiting mitochondrial complex I"
    ],
    answer: 1,
    explanation: "GLP-1 receptor agonists mimic the incretin hormone GLP-1. They stimulate insulin secretion only when blood glucose is elevated (glucose-dependent), inhibit glucagon secretion, slow gastric emptying, and act centrally to reduce appetite — resulting in significant weight loss. Unlike sulfonylureas, they do not cause hypoglycaemia when glucose is normal."
  },
  {
    id: 7402,
    subject: "Pharmacology",
    stem: "The LEADER trial demonstrated cardiovascular outcome benefit for which GLP-1 receptor agonist?",
    options: [
      "Exenatide",
      "Liraglutide",
      "Dulaglutide",
      "Albiglutide"
    ],
    answer: 1,
    explanation: "The LEADER trial (Liraglutide Effect and Action in Diabetes: Evaluation of Cardiovascular Outcome Results) demonstrated that liraglutide significantly reduced major adverse cardiovascular events (MACE: CV death, non-fatal MI, non-fatal stroke) in high-risk T2DM patients. Dulaglutide was evaluated in REWIND; semaglutide in SUSTAIN-6."
  },
  {
    id: 7403,
    subject: "Pharmacology",
    stem: "Tirzepatide is unique among anti-diabetic agents because it is a:",
    options: [
      "Selective GLP-1 receptor agonist",
      "Dual GLP-1 and GIP receptor agonist",
      "Triple agonist at GLP-1, GIP, and glucagon receptors",
      "SGLT-2 inhibitor with additional GLP-1 activity"
    ],
    answer: 1,
    explanation: "Tirzepatide (Mounjaro) is a dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor agonist — a 'twincretin'. The SURMOUNT trials demonstrated superior weight loss compared to other GLP-1 RAs. Its dual mechanism synergistically improves glycaemic control and promotes greater weight reduction."
  },
  {
    id: 7404,
    subject: "Pharmacology",
    stem: "A patient on semaglutide develops persistent nausea and vomiting. Rare but serious adverse effects of GLP-1 receptor agonists that must be counselled include all of the following EXCEPT:",
    options: [
      "Acute pancreatitis",
      "Medullary thyroid carcinoma (contraindicated in those with personal/family history)",
      "C-cell hyperplasia in humans similar to that seen in rodents",
      "Injection site reactions"
    ],
    answer: 2,
    explanation: "C-cell hyperplasia and medullary thyroid carcinoma have been observed in rodent studies but have NOT been confirmed in humans. GLP-1 RAs are contraindicated in patients with personal or family history of medullary thyroid carcinoma or MEN-2 as a precautionary measure. Nausea/vomiting are common, pancreatitis is rare but serious."
  },
  {
    id: 7405,
    subject: "Pharmacology",
    stem: "SGLT-2 inhibitors block glucose reabsorption by acting on which transporter in which segment of the nephron?",
    options: [
      "SGLT-1 in the S3 segment of the proximal convoluted tubule",
      "SGLT-2 in the S1 segment of the proximal convoluted tubule",
      "GLUT-2 in the collecting duct",
      "SGLT-2 in the loop of Henle"
    ],
    answer: 1,
    explanation: "SGLT-2 (sodium-glucose cotransporter 2) is located in the S1 segment of the proximal convoluted tubule and is responsible for approximately 90% of filtered glucose reabsorption. SGLT-2 inhibitors block this transporter, leading to glucosuria (urinary glucose excretion), osmotic diuresis, and natriuresis. SGLT-1 in the S3 segment handles the remaining 10%."
  },
  {
    id: 7406,
    subject: "Pharmacology",
    stem: "The DAPA-HF trial demonstrated the benefit of dapagliflozin in:",
    options: [
      "Heart failure with preserved ejection fraction (HFpEF) only",
      "Heart failure with reduced ejection fraction (HFrEF), including patients without diabetes",
      "Coronary artery disease prevention in T2DM",
      "CKD progression reduction in non-diabetic patients"
    ],
    answer: 1,
    explanation: "The DAPA-HF trial showed dapagliflozin significantly reduced worsening heart failure events and CV death in patients with HFrEF (EF ≤40%), including those without T2DM — expanding its indication beyond glycaemic control. DAPA-CKD showed benefit in CKD. EMPEROR-Reduced and EMPEROR-Preserved showed empagliflozin benefit in HFrEF and HFpEF respectively."
  },
  {
    id: 7407,
    subject: "Pharmacology",
    stem: "A patient on canagliflozin for T2DM requires emergency abdominal surgery. Which potentially life-threatening complication of SGLT-2 inhibitors must be considered perioperatively?",
    options: [
      "Hyperglycaemic hyperosmolar state",
      "Euglycaemic diabetic ketoacidosis",
      "Lactic acidosis",
      "Addisonian crisis"
    ],
    answer: 1,
    explanation: "Euglycaemic DKA is a rare but serious adverse effect of SGLT-2 inhibitors. Blood glucose may be only mildly elevated or normal, making it easily missed. SGLT-2 inhibitors should be withheld ≥3 days before elective surgery (some guidelines say ≥4 days). Pathophysiology: reduced insulin levels + increased glucagon + increased ketogenesis. Check ketones even if glucose is near normal."
  },
  {
    id: 7408,
    subject: "Pharmacology",
    stem: "Which SGLT-2 inhibitor has been specifically associated with an increased risk of lower limb amputation, particularly of the toe?",
    options: [
      "Dapagliflozin",
      "Empagliflozin",
      "Canagliflozin",
      "Ertugliflozin"
    ],
    answer: 2,
    explanation: "The CANVAS trial with canagliflozin showed a significantly increased risk of lower limb amputation (particularly toes and metatarsals) — approximately 6.3 vs. 3.4 per 1000 patient-years compared to placebo. The mechanism is unclear but may relate to volume depletion and haemodynamic effects. This risk appears less prominent with dapagliflozin and empagliflozin based on current evidence."
  },
  {
    id: 7409,
    subject: "Pharmacology",
    stem: "Before initiating TNF-alpha inhibitor therapy (e.g., adalimumab) for rheumatoid arthritis, which screening tests are mandatory?",
    options: [
      "Chest X-ray and tuberculin skin test (TST) or IGRA for latent TB, and hepatitis B serology",
      "HIV serology and hepatitis C serology only",
      "Complete blood count and renal function only",
      "ANA and anti-dsDNA antibodies only"
    ],
    answer: 0,
    explanation: "Before starting any TNF-alpha inhibitor, mandatory screening includes: (1) Latent TB screening — TST or IGRA (QUANTIFERON-TB Gold) + CXR; treat latent TB before starting biologic. (2) Hepatitis B serology — TNF-alpha inhibitors can cause HBV reactivation. (3) Hepatitis C serology. (4) History of malignancy, demyelinating disease, heart failure. These are class-specific requirements for all anti-TNF biologics."
  },
  {
    id: 7410,
    subject: "Pharmacology",
    stem: "Tocilizumab gained prominence during the COVID-19 pandemic. Its primary mechanism of action is:",
    options: [
      "Inhibition of TNF-alpha",
      "Blockade of the IL-6 receptor (anti-IL-6R monoclonal antibody)",
      "Inhibition of JAK1/JAK2 kinases",
      "Anti-PD-1 immune checkpoint inhibition"
    ],
    answer: 1,
    explanation: "Tocilizumab is a recombinant humanised monoclonal antibody against the interleukin-6 receptor (IL-6R), blocking both soluble and membrane-bound IL-6R signalling. It was repurposed for COVID-19 cytokine storm syndrome with demonstrated mortality benefit in hospitalised patients requiring oxygen. In rheumatology it is used for RA, systemic JIA, giant cell arteritis, and CAR-T-related cytokine release syndrome."
  },
  {
    id: 7411,
    subject: "Pharmacology",
    stem: "Secukinumab, used in psoriasis, ankylosing spondylitis, and psoriatic arthritis, inhibits which cytokine?",
    options: [
      "IL-12 and IL-23",
      "IL-17A",
      "IL-6",
      "TNF-alpha"
    ],
    answer: 1,
    explanation: "Secukinumab (and ixekizumab) are anti-IL-17A monoclonal antibodies. IL-17A is a key pro-inflammatory cytokine in psoriasis and spondyloarthropathies. IL-17 inhibitors are highly effective in plaque psoriasis, PsA, and AS. Note: IL-17 inhibitors may worsen inflammatory bowel disease (IBD) and are relatively contraindicated in active IBD."
  },
  {
    id: 7412,
    subject: "Pharmacology",
    stem: "Ustekinumab is used in psoriasis and inflammatory bowel disease. Its mechanism of action is:",
    options: [
      "Inhibition of IL-17A",
      "Blockade of the p40 subunit shared by IL-12 and IL-23",
      "Inhibition of IL-6 receptor",
      "Anti-TNF-alpha activity"
    ],
    answer: 1,
    explanation: "Ustekinumab binds to the p40 protein subunit shared by IL-12 and IL-23, blocking both cytokines. IL-12 drives Th1 differentiation; IL-23 drives Th17 differentiation. It is approved for moderate-to-severe plaque psoriasis, PsA, Crohn's disease, and ulcerative colitis. Pure IL-23 inhibitors (guselkumab, risankizumab, tildrakizumab) target only the p19 subunit of IL-23."
  },
  {
    id: 7413,
    subject: "Pharmacology",
    stem: "Anti-PD-1 checkpoint inhibitors such as nivolumab and pembrolizumab act by:",
    options: [
      "Activating regulatory T cells to suppress anti-tumour immunity",
      "Blocking the PD-1 receptor on T cells, preventing tumour-mediated T-cell exhaustion and restoring anti-tumour immunity",
      "Directly inducing tumour cell apoptosis via caspase activation",
      "Inhibiting VEGF-mediated tumour angiogenesis"
    ],
    answer: 1,
    explanation: "PD-1 (programmed cell death protein 1) on T cells interacts with PD-L1/PD-L2 on tumour cells, leading to T-cell exhaustion/anergy — a mechanism tumours exploit for immune evasion. Anti-PD-1 antibodies (nivolumab, pembrolizumab) or anti-PD-L1 antibodies (atezolizumab, durvalumab, avelumab) block this interaction, restoring T-cell cytotoxic activity against tumour cells. Anti-CTLA-4 (ipilimumab) works at an earlier checkpoint in lymph nodes."
  },
  {
    id: 7414,
    subject: "Pharmacology",
    stem: "A patient on pembrolizumab for lung cancer develops acute diarrhoea with rectal bleeding, and liver function tests are markedly elevated. The most likely diagnosis and management is:",
    options: [
      "Viral gastroenteritis; supportive care",
      "Immune-related adverse events (irAEs) — immune-mediated colitis and hepatitis; stop pembrolizumab and start high-dose corticosteroids",
      "Drug-induced diarrhoea; switch to a different chemotherapy",
      "Clostridium difficile infection; start metronidazole"
    ],
    answer: 1,
    explanation: "Immune-related adverse events (irAEs) are a class effect of checkpoint inhibitors. Immune-mediated colitis presents as diarrhoea/rectal bleeding; immune-mediated hepatitis causes elevated transaminases. Management: grade-dependent — mild (G1) continue with monitoring; moderate-severe (G2-G4) withhold drug + high-dose corticosteroids (prednisolone 1-2 mg/kg). Refractory colitis: infliximab or vedolizumab. Endocrinopathies may be permanent."
  },
  {
    id: 7415,
    subject: "Pharmacology",
    stem: "Tumour types with microsatellite instability-high (MSI-H) or mismatch repair deficiency (dMMR) are MOST responsive to which class of immunotherapy?",
    options: [
      "Anti-VEGF therapy (bevacizumab)",
      "Anti-PD-1 therapy (pembrolizumab)",
      "Anti-HER2 therapy (trastuzumab)",
      "Anti-EGFR therapy (cetuximab)"
    ],
    answer: 1,
    explanation: "MSI-H/dMMR tumours have a high mutational burden, generating many neoantigens that are recognised by T cells, but these T cells are suppressed by the PD-1/PD-L1 axis. Pembrolizumab received tumour-agnostic (site-independent) FDA approval for MSI-H/dMMR solid tumours — the first such approval. KRAS mutation is a contraindication to anti-EGFR therapy in colorectal cancer, not to immunotherapy."
  },
  {
    id: 7416,
    subject: "Pharmacology",
    stem: "CAR-T cell therapy with tisagenlecleucel or axicabtagene ciloleucel targets which antigen for B-cell malignancies?",
    options: [
      "CD3",
      "CD19",
      "CD20",
      "CD34"
    ],
    answer: 1,
    explanation: "CAR-T (chimeric antigen receptor T) cells are engineered to express a receptor targeting CD19, which is expressed on B-cells and most B-cell lymphomas/ALL. Tisagenlecleucel (Kymriah) and axicabtagene ciloleucel (Yescarta) are anti-CD19 CAR-T therapies. Major complications include cytokine release syndrome (CRS) and immune effector cell-associated neurotoxicity syndrome (ICANS). CD20 is the target of rituximab."
  },
  {
    id: 7417,
    subject: "Pharmacology",
    stem: "Trastuzumab emtansine (T-DM1) and trastuzumab deruxtecan (T-DXd) are examples of:",
    options: [
      "Bispecific T-cell engagers (BiTEs)",
      "Antibody-drug conjugates (ADCs)",
      "CAR-T cell therapies",
      "PD-L1 inhibitors"
    ],
    answer: 1,
    explanation: "Antibody-drug conjugates (ADCs) link a monoclonal antibody to a cytotoxic payload via a chemical linker. T-DM1 links trastuzumab (anti-HER2) to emtansine (microtubule inhibitor). T-DXd links trastuzumab to deruxtecan (topoisomerase I inhibitor) and is highly effective in HER2-low breast cancer. The antibody delivers the toxin specifically to HER2-expressing tumour cells, reducing systemic toxicity."
  },
  {
    id: 7418,
    subject: "Pharmacology",
    stem: "The reversal agent for dabigatran (a direct thrombin inhibitor) is:",
    options: [
      "Andexanet alfa",
      "Protamine sulfate",
      "Idarucizumab",
      "Vitamin K"
    ],
    answer: 2,
    explanation: "Idarucizumab (Praxbind) is a humanised monoclonal antibody fragment that specifically and rapidly reverses dabigatran anticoagulation. Andexanet alfa (recombinant factor Xa decoy) reverses factor Xa inhibitors (rivaroxaban, apixaban, edoxaban). Protamine reverses heparin/LMWH (partially for LMWH). Vitamin K reverses warfarin."
  },
  {
    id: 7419,
    subject: "Pharmacology",
    stem: "Which factor Xa inhibitor is taken once daily, has predominantly renal elimination requiring dose adjustment in CKD, and can be reversed with andexanet alfa?",
    options: [
      "Apixaban (twice daily, hepatic)",
      "Rivaroxaban (once daily, mixed renal-hepatic)",
      "Edoxaban (once daily, 50% renal elimination)",
      "Betrixaban (once daily, minimal renal)"
    ],
    answer: 2,
    explanation: "Edoxaban is a once-daily oral factor Xa inhibitor with approximately 50% renal elimination; dose reduction is required in moderate CKD. Rivaroxaban is once daily (for most indications) with about 33% renal elimination. Apixaban is twice daily. All direct oral anticoagulants (DOACs) acting on factor Xa can be reversed by andexanet alfa. None require routine coagulation monitoring."
  },
  {
    id: 7420,
    subject: "Pharmacology",
    stem: "Ceftazidime-avibactam is specifically indicated for infections caused by which type of resistant organism?",
    options: [
      "MRSA — methicillin-resistant Staphylococcus aureus",
      "KPC-producing and OXA-48-producing carbapenem-resistant Enterobacteriaceae (CRE)",
      "VRE — vancomycin-resistant Enterococcus",
      "Candida species resistant to fluconazole"
    ],
    answer: 1,
    explanation: "Avibactam is a novel beta-lactamase inhibitor that inhibits KPC (Klebsiella pneumoniae carbapenemase) and OXA-48 type carbapenemases, as well as ESBL and AmpC enzymes, but does NOT inhibit metallo-beta-lactamases (MBLs/NDMs). Ceftazidime-avibactam is a key drug for CRE and MDR Pseudomonas infections. Cefiderocol (siderophore cephalosporin) is active against MBL-producing organisms."
  },
  {
    id: 7421,
    subject: "Pharmacology",
    stem: "Daptomycin is a cyclic lipopeptide antibiotic effective against MRSA and VRE. It CANNOT be used for which infection despite in vitro susceptibility?",
    options: [
      "MRSA bacteraemia",
      "MRSA pneumonia",
      "VRE urinary tract infection",
      "MRSA skin and soft tissue infection"
    ],
    answer: 1,
    explanation: "Daptomycin is inactivated by pulmonary surfactant, making it ineffective for pneumonia despite in vitro susceptibility. This is a classic pharmacology question point. Daptomycin works by inserting into and depolarising the bacterial cell membrane in a calcium-dependent manner. For MRSA pneumonia, vancomycin or linezolid are the drugs of choice. For MRSA bacteraemia, daptomycin is a first-line alternative to vancomycin."
  },
  {
    id: 7422,
    subject: "Pharmacology",
    stem: "Linezolid, an oxazolidinone antibiotic, exerts its bacteriostatic activity against MRSA and VRE by:",
    options: [
      "Inhibiting cell wall synthesis by binding to PBP2a",
      "Inhibiting protein synthesis by binding to the 50S ribosomal subunit and preventing formation of the 70S initiation complex (fMet-tRNA binding)",
      "Inhibiting DNA gyrase",
      "Disrupting the bacterial cell membrane via calcium-dependent mechanism"
    ],
    answer: 1,
    explanation: "Linezolid binds to the 23S rRNA of the 50S ribosomal subunit at a unique site, preventing assembly of the 70S initiation complex and blocking translation at the very first step (fMet-tRNA). Its unique mechanism means no cross-resistance with other ribosomal antibiotics. Key adverse effects: thrombocytopaenia (especially >2 weeks), serotonin syndrome (weak MAO inhibitor — avoid SSRIs, tyramine-rich foods), peripheral neuropathy, optic neuritis."
  },
  {
    id: 7423,
    subject: "Pharmacology",
    stem: "A patient on linezolid for VRE infection is prescribed sertraline for depression. The clinician should be concerned about:",
    options: [
      "Increased risk of nephrotoxicity",
      "Serotonin syndrome due to linezolid's MAO-inhibiting properties",
      "Reduced efficacy of linezolid due to CYP450 induction",
      "QT prolongation and torsades de pointes"
    ],
    answer: 1,
    explanation: "Linezolid is a weak, reversible, non-selective monoamine oxidase inhibitor (MAOI). Co-administration with SSRIs (sertraline, fluoxetine), SNRIs, or other serotonergic drugs risks serotonin syndrome — characterised by the triad of mental status changes (agitation, confusion), autonomic instability (hyperthermia, tachycardia, diaphoresis), and neuromuscular abnormalities (clonus, hyperreflexia, tremor). Management: cyproheptadine (5-HT2 antagonist), cyproheptadine or benzodiazepines."
  },
  {
    id: 7424,
    subject: "Pharmacology",
    stem: "Bevacizumab's mechanism of action and a unique adverse effect distinguishing it from conventional chemotherapy is:",
    options: [
      "Inhibits EGFR; causes acneiform rash",
      "Inhibits VEGF (vascular endothelial growth factor); causes GI perforation and wound healing impairment",
      "Inhibits HER2; causes reversible cardiomyopathy",
      "Inhibits CD20; causes hepatitis B reactivation"
    ],
    answer: 1,
    explanation: "Bevacizumab is an anti-VEGF monoclonal antibody that inhibits tumour angiogenesis. Unique adverse effects: GI perforation (1-3%), wound healing impairment (must hold 6 weeks before/4 weeks after major surgery), hypertension, proteinuria/nephrotic syndrome, thromboembolism, haemorrhage, and reversible posterior leukoencephalopathy syndrome (RPLS). Used in colorectal, cervical, ovarian, and lung cancers."
  },
  {
    id: 7425,
    subject: "Pharmacology",
    stem: "Trastuzumab (Herceptin) causes cardiotoxicity that differs from anthracycline cardiotoxicity in that it is:",
    options: [
      "Cumulative dose-dependent and causes irreversible cardiomyopathy",
      "Not dose-dependent, reversible upon drug discontinuation, and detected by serial echocardiography",
      "Predominantly arrhythmogenic causing ventricular fibrillation",
      "Dose-dependent but prevented by dexrazoxane"
    ],
    answer: 1,
    explanation: "Trastuzumab cardiotoxicity (type II cardiotoxicity) is: (1) not cumulative dose-dependent, (2) usually reversible upon drug discontinuation, (3) detected by serial echocardiography monitoring (every 3 months). In contrast, anthracycline cardiotoxicity (type I) is cumulative dose-dependent, irreversible, and prevented/reduced by dexrazoxane. Trastuzumab inhibits HER2 (ErbB2) on cardiomyocytes, impairing their stress response."
  },
  {
    id: 7426,
    subject: "Pharmacology",
    stem: "Cetuximab (anti-EGFR) used in colorectal cancer should NOT be given to patients with KRAS mutations because:",
    options: [
      "KRAS mutation causes cetuximab degradation in the liver",
      "KRAS mutation constitutively activates downstream signalling regardless of EGFR blockade, rendering anti-EGFR therapy ineffective",
      "KRAS mutation increases the risk of severe cetuximab hypersensitivity reactions",
      "KRAS mutation upregulates PD-L1, making immunotherapy more appropriate"
    ],
    answer: 1,
    explanation: "EGFR signals through RAS-RAF-MEK-ERK pathway. KRAS (rat sarcoma viral oncogene) mutations (most commonly G12D, G12V) constitutively activate RAS independently of EGFR, so blocking EGFR upstream is ineffective. Testing for RAS mutations (KRAS and NRAS exons 2, 3, 4) is mandatory before prescribing cetuximab or panitumumab in colorectal cancer. Only RAS wild-type patients benefit. An acneiform rash with cetuximab is a biomarker of response."
  },
  {
    id: 7427,
    subject: "Pharmacology",
    stem: "Rituximab is contraindicated or requires cautious use in patients who are:",
    options: [
      "HLA-B*5701 positive",
      "Hepatitis B surface antigen (HBsAg) positive or anti-HBc positive without prophylaxis",
      "G6PD deficient",
      "TPMT enzyme deficient"
    ],
    answer: 1,
    explanation: "Rituximab (anti-CD20) can cause hepatitis B reactivation, sometimes with fulminant hepatic failure and death. All patients must be screened for HBsAg and anti-HBc before treatment. HBsAg-positive patients require antiviral prophylaxis (entecavir preferred) before and during rituximab. Anti-HBc positive/HBsAg-negative patients are also at risk and should be monitored or given prophylaxis. HLA-B*5701 screening is for abacavir hypersensitivity."
  },
  {
    id: 7428,
    subject: "Pharmacology",
    stem: "Denosumab (anti-RANKL antibody) used for osteoporosis and bone metastases is most specifically associated with which adverse effect not seen with bisphosphonates?",
    options: [
      "Oesophageal irritation and stricture",
      "Rebound increase in fracture risk and rapid bone loss upon discontinuation",
      "Hypercalcaemia",
      "Avascular necrosis of the femoral head"
    ],
    answer: 1,
    explanation: "A critical difference from bisphosphonates: upon stopping denosumab, there is a marked rebound increase in bone turnover, leading to rapid bone loss and multiple vertebral fractures — sometimes called the 'rebound phenomenon'. Patients must be transitioned to a bisphosphonate before stopping denosumab. Both denosumab and bisphosphonates share risks of osteonecrosis of the jaw and atypical femoral fractures. Denosumab can cause hypocalcaemia (not hypercalcaemia)."
  },
  {
    id: 7429,
    subject: "Pharmacology",
    stem: "Rifampicin significantly reduces the anticoagulant effect of warfarin. The mechanism is:",
    options: [
      "Rifampicin displaces warfarin from plasma protein binding sites",
      "Rifampicin induces CYP2C9 and CYP3A4 enzymes, increasing warfarin metabolism and reducing its plasma concentration",
      "Rifampicin inhibits vitamin K epoxide reductase more potently than warfarin",
      "Rifampicin chelates warfarin in the gut, reducing its absorption"
    ],
    answer: 1,
    explanation: "Rifampicin is a potent inducer of CYP450 enzymes (CYP1A2, CYP2C9, CYP2C19, CYP3A4) and P-glycoprotein. It dramatically increases the metabolism of warfarin (mainly a CYP2C9 substrate), reducing its plasma levels and anticoagulant effect — requiring 2-5x higher warfarin doses. Other inducers: carbamazepine, phenytoin, phenobarbitone, St John's Wort. Inhibitors that increase warfarin effect: fluconazole, amiodarone, metronidazole, ciprofloxacin, erythromycin."
  },
  {
    id: 7430,
    subject: "Pharmacology",
    stem: "A patient taking phenelzine (MAOI) for depression is given tramadol for pain. Hours later they develop agitation, fever of 40°C, sweating, muscle rigidity and clonus. The most appropriate treatment is:",
    options: [
      "Dantrolene sodium",
      "Cyproheptadine (serotonin antagonist) and supportive care",
      "Bromocriptine",
      "Physostigmine"
    ],
    answer: 1,
    explanation: "This is serotonin syndrome — a drug interaction between MAOIs and serotonergic drugs (tramadol has serotonin-releasing properties). Classic triad: altered mental status + autonomic instability + neuromuscular abnormalities (clonus is pathognomonic). Treatment: (1) Discontinue causative drugs, (2) Cyproheptadine (5-HT2A antagonist) — 12 mg loading then 2 mg every 2 hours, (3) Benzodiazepines for agitation/rigidity, (4) Supportive care. Note: dantrolene is for malignant hyperthermia; bromocriptine for neuroleptic malignant syndrome."
  },
  {
    id: 7431,
    subject: "Pharmacology",
    stem: "Which combination of drugs is most likely to cause a clinically significant prolongation of the QT interval, increasing the risk of torsades de pointes?",
    options: [
      "Metformin + aspirin",
      "Haloperidol + clarithromycin",
      "Lisinopril + atorvastatin",
      "Omeprazole + amoxicillin"
    ],
    answer: 1,
    explanation: "QT-prolonging drugs include: antipsychotics (haloperidol, quetiapine, chlorpromazine), macrolides (erythromycin, clarithromycin), fluoroquinolones (ciprofloxacin, levofloxacin), azole antifungals, antihistamines (terfenadine, astemizole — withdrawn), methadone, amiodarone, sotalol, and ondansetron. Combining two QT-prolonging drugs is particularly dangerous. Risk factors: hypokalaemia, hypomagnesaemia, bradycardia, female sex, congenital long QT syndrome."
  },
  {
    id: 7432,
    subject: "Pharmacology",
    stem: "Abacavir hypersensitivity reaction in HIV treatment is associated with which HLA allele, and screening for it is mandatory before prescribing?",
    options: [
      "HLA-B*1502 (associated with carbamazepine-SJS in Asians)",
      "HLA-B*5701",
      "HLA-A*3101",
      "HLA-DR4"
    ],
    answer: 1,
    explanation: "HLA-B*5701 is strongly associated with abacavir hypersensitivity syndrome (AHS) — a potentially life-threatening multi-system reaction occurring within 6 weeks of starting abacavir. Symptoms: fever, rash, GI symptoms, respiratory symptoms. Rechallenge can be fatal. HLA-B*5701 screening is mandatory before prescribing abacavir; abacavir is contraindicated in HLA-B*5701-positive patients. HLA-B*1502 predicts carbamazepine/phenytoin Stevens-Johnson syndrome in Asian patients."
  },
  {
    id: 7433,
    subject: "Pharmacology",
    stem: "The current first-line antiretroviral regimen recommended for most HIV-positive adults (as per WHO/NACO guidelines) consists of:",
    options: [
      "Zidovudine + lamivudine + nevirapine",
      "Tenofovir + emtricitabine (or lamivudine) + dolutegravir",
      "Efavirenz + lamivudine + abacavir",
      "Lopinavir/ritonavir + zidovudine + lamivudine"
    ],
    answer: 1,
    explanation: "Current WHO-recommended first-line ART: TDF (tenofovir disoproxil fumarate) + 3TC/FTC + DTG (dolutegravir). Dolutegravir (INSTI) replaced efavirenz as the preferred third agent due to: higher barrier to resistance, fewer neuropsychiatric side effects, better tolerability, once-daily dosing. Dolutegravir is teratogenic risk in early pregnancy (neural tube defects) though this risk is now considered low; use with folic acid supplementation. TAF (tenofovir alafenamide) can replace TDF with less renal/bone toxicity."
  },
  {
    id: 7434,
    subject: "Pharmacology",
    stem: "Efavirenz, an NNRTI used in HIV treatment, is best known for which class of side effects that often lead to non-adherence?",
    options: [
      "Haematological toxicity (anaemia, neutropaenia)",
      "Neuropsychiatric effects (vivid dreams, nightmares, dizziness, depression, rarely psychosis)",
      "Severe hepatotoxicity and Stevens-Johnson syndrome (more common than nevirapine)",
      "Peripheral neuropathy and pancreatitis"
    ],
    answer: 1,
    explanation: "Efavirenz causes CNS/neuropsychiatric side effects in up to 50% of patients: dizziness, somnolence, insomnia, vivid dreams/nightmares, depression, rarely psychosis or suicidal ideation. Usually improves after 2-4 weeks; advise taking at bedtime. Contraindicated in first trimester of pregnancy (teratogenic in primates). Nevirapine (not efavirenz) causes more hepatotoxicity and SJS. Peripheral neuropathy is more associated with older NRTIs (stavudine, didanosine)."
  },
  {
    id: 7435,
    subject: "Pharmacology",
    stem: "Direct-acting antivirals (DAAs) for hepatitis C — specifically sofosbuvir + velpatasvir — work by targeting:",
    options: [
      "HCV NS3/4A protease and NS5A protein only",
      "HCV NS5B polymerase (sofosbuvir — nucleotide analogue) and NS5A (velpatasvir — replication complex inhibitor), active against all genotypes",
      "HCV RNA helicase and NS4B membrane protein",
      "HCV entry via CD81 receptor blockade"
    ],
    answer: 1,
    explanation: "Sofosbuvir is a nucleotide analogue inhibitor of HCV NS5B RNA-dependent RNA polymerase — the 'chain terminator'. Velpatasvir inhibits NS5A protein essential for viral replication and assembly. Sofosbuvir + velpatasvir (Epclusa) is a pangenotypic regimen effective against all 6 HCV genotypes, taken once daily for 12 weeks, with sustained virological response (SVR = cure) >95%. Other regimens: sofosbuvir + ledipasvir (Harvoni) for GT1."
  },
  {
    id: 7436,
    subject: "Pharmacology",
    stem: "Nirmatrelvir-ritonavir (Paxlovid) for COVID-19 acts by:",
    options: [
      "Inhibiting RNA-dependent RNA polymerase (RdRp) of SARS-CoV-2",
      "Inhibiting SARS-CoV-2 main protease (3CL protease / Mpro), with ritonavir as a pharmacokinetic booster",
      "Blocking ACE2 receptor binding of the spike protein",
      "Inhibiting viral nucleocapsid assembly"
    ],
    answer: 1,
    explanation: "Nirmatrelvir inhibits the SARS-CoV-2 3CL protease (main protease/Mpro), which is essential for cleaving viral polyproteins into functional proteins — blocking viral replication. Ritonavir inhibits CYP3A4, boosting nirmatrelvir plasma levels (pharmacokinetic enhancement). Indicated for high-risk adults within 5 days of symptom onset. Major concern: significant drug interactions via ritonavir (strong CYP3A4 inhibitor). Remdesivir inhibits RdRp."
  },
  {
    id: 7437,
    subject: "Pharmacology",
    stem: "Dexamethasone was shown to reduce mortality in COVID-19 in the RECOVERY trial. It should be given to:",
    options: [
      "All COVID-19 patients regardless of disease severity",
      "Only patients requiring supplemental oxygen or mechanical ventilation",
      "Only patients on mechanical ventilation",
      "Only non-hospitalised patients with mild disease to prevent progression"
    ],
    answer: 1,
    explanation: "The RECOVERY trial showed dexamethasone 6 mg daily for 10 days reduced 28-day mortality in COVID-19 patients requiring respiratory support (oxygen or ventilation): 29% reduction in ventilated patients, 23% in oxygen-requiring patients. Importantly, in patients NOT requiring oxygen, dexamethasone showed NO benefit and a trend toward harm. Therefore, it should only be given to patients requiring supplemental oxygen or ventilatory support."
  },
  {
    id: 7438,
    subject: "Pharmacology",
    stem: "Which statement about zero-order pharmacokinetics is CORRECT?",
    options: [
      "The rate of elimination is proportional to the drug concentration",
      "A constant amount of drug is eliminated per unit time regardless of concentration; the elimination process is saturated",
      "The half-life is constant and independent of dose",
      "It applies to most drugs at therapeutic concentrations"
    ],
    answer: 1,
    explanation: "Zero-order kinetics: a fixed amount (not fraction) of drug is eliminated per unit time — the elimination system is saturated. This leads to non-linear (disproportionate) pharmacokinetics. Examples: ethanol (alcohol dehydrogenase saturated), phenytoin at high doses, aspirin at high doses. As dose increases, plasma levels rise disproportionately, making toxicity more likely. In contrast, first-order kinetics (most drugs) eliminate a constant fraction per unit time with constant half-life."
  },
  {
    id: 7439,
    subject: "Pharmacology",
    stem: "Therapeutic drug monitoring (TDM) is MOST important for which of the following drugs due to its narrow therapeutic index?",
    options: [
      "Amoxicillin",
      "Vancomycin",
      "Azithromycin",
      "Metronidazole"
    ],
    answer: 1,
    explanation: "Drugs requiring TDM due to narrow therapeutic index include: vancomycin (trough 10-20 mg/L; AUC-guided dosing now preferred), aminoglycosides (gentamicin — peak 5-10 mg/L, trough <2 mg/L), digoxin (0.5-2 ng/mL), lithium (0.6-1.2 mmol/L), phenytoin (10-20 mg/L), carbamazepine (4-12 mg/L), valproate (50-100 mg/L), cyclosporin, tacrolimus. Amoxicillin, azithromycin, and metronidazole have wide therapeutic indices and do not require routine monitoring."
  },
  {
    id: 7440,
    subject: "Pharmacology",
    stem: "Belimumab (anti-BLyS/BAFF antibody) is approved for the treatment of:",
    options: [
      "Rheumatoid arthritis refractory to methotrexate",
      "Systemic lupus erythematosus (SLE) with active disease despite standard therapy",
      "Ankylosing spondylitis unresponsive to NSAIDs",
      "Systemic sclerosis with interstitial lung disease"
    ],
    answer: 1,
    explanation: "Belimumab is an anti-BLyS (B-lymphocyte stimulator, also called BAFF) monoclonal antibody. BLyS is a cytokine essential for B-cell survival and differentiation, and is overexpressed in SLE. Belimumab was the first new drug approved for SLE in 50 years. It is indicated for active, autoantibody-positive SLE with inadequate response to standard therapy. Also approved for lupus nephritis. It is NOT effective in severe active CNS lupus or severe lupus nephritis alone."
  },
  {
    id: 7441,
    subject: "Pharmacology",
    stem: "The SOUL trial for semaglutide demonstrated cardiovascular and renal benefits in patients with:",
    options: [
      "Heart failure with reduced ejection fraction (HFrEF) without diabetes",
      "T2DM and chronic kidney disease (CKD) or established cardiovascular disease",
      "Obesity without diabetes or cardiovascular disease",
      "Non-alcoholic fatty liver disease (NAFLD) with T2DM"
    ],
    answer: 1,
    explanation: "The SOUL trial evaluated once-weekly oral semaglutide in patients with T2DM and CKD and/or established cardiovascular disease, demonstrating significant reductions in MACE (major adverse cardiovascular events) and kidney outcomes. The STEP trials demonstrated semaglutide's weight-loss benefit in obesity (without requiring T2DM). SUSTAIN-6 showed CV risk reduction in T2DM. This makes semaglutide versatile across multiple cardiometabolic indications."
  },
  {
    id: 7442,
    subject: "Pharmacology",
    stem: "Cefiderocol is described as a 'siderophore cephalosporin.' Its unique mechanism for entering resistant gram-negative bacteria is:",
    options: [
      "It binds to PBP3 with higher affinity than other cephalosporins",
      "It mimics bacterial iron-chelating siderophores and exploits the bacteria's iron uptake transport system to enter the periplasm",
      "It is actively transported into bacteria via porin OmpF",
      "It binds to lipid A of the outer membrane, disrupting permeability"
    ],
    answer: 1,
    explanation: "Cefiderocol chelates iron like a siderophore and hijacks the bacteria's own iron-uptake transport systems (TonB-dependent transporters) to actively transport itself into the periplasm — bypassing the outer membrane resistance mechanisms (porin loss, efflux pumps) that confer resistance to other cephalosporins. This allows activity against virtually all gram-negative bacteria including MBL-producing pan-resistant organisms (NDM, VIM, IMP). It is active where ceftazidime-avibactam fails."
  },
  {
    id: 7443,
    subject: "Pharmacology",
    stem: "Ceftolozane-tazobactam is specifically indicated for infections due to which resistant pathogen where it has particular advantage?",
    options: [
      "MRSA bacteraemia",
      "MDR Pseudomonas aeruginosa",
      "KPC-producing Klebsiella pneumoniae",
      "ESBL-producing E. coli urinary tract infection"
    ],
    answer: 1,
    explanation: "Ceftolozane-tazobactam is specifically active against MDR Pseudomonas aeruginosa, including many strains resistant to carbapenems, piperacillin-tazobactam, and cefepime. Ceftolozane is a novel cephalosporin with high intrinsic activity against Pseudomonas (binds PBP1b, PBP1c, PBP3); tazobactam inhibits ESBLs and AmpC. However, it does NOT cover KPC-producing organisms — ceftazidime-avibactam or meropenem-vaborbactam are needed for those."
  },
  {
    id: 7444,
    subject: "Pharmacology",
    stem: "Which statement correctly describes the mechanism of anticoagulation with apixaban and its key clinical advantage over warfarin?",
    options: [
      "Apixaban inhibits thrombin (factor IIa) directly; advantage is predictable kinetics without monitoring",
      "Apixaban directly and reversibly inhibits factor Xa; advantage is predictable pharmacokinetics, no routine INR monitoring, fewer drug and food interactions, and similar or less bleeding risk compared to warfarin",
      "Apixaban inhibits factor IXa; advantage is once-daily dosing",
      "Apixaban inhibits vitamin K epoxide reductase; advantage is rapid onset"
    ],
    answer: 1,
    explanation: "Apixaban directly and reversibly inhibits free and clot-bound factor Xa. Clinical advantages over warfarin: (1) No routine coagulation monitoring, (2) Predictable pharmacokinetics with fixed dosing, (3) Fewer drug interactions (no food interactions with vitamin K), (4) Rapid onset (within 1-3 hours), (5) In the ARISTOTLE trial, apixaban showed less major bleeding (especially less intracranial haemorrhage) compared to warfarin in AF. Reversal: andexanet alfa."
  },
  {
    id: 7445,
    subject: "Pharmacology",
    stem: "A patient taking warfarin for AF is prescribed fluconazole for a vaginal candida infection. The expected pharmacokinetic interaction is:",
    options: [
      "Fluconazole induces CYP2C9, reducing warfarin levels and decreasing INR",
      "Fluconazole inhibits CYP2C9 (the main enzyme metabolising warfarin's S-enantiomer), increasing warfarin levels and causing dangerous elevation of INR",
      "Fluconazole displaces warfarin from albumin binding, reducing its efficacy",
      "Fluconazole increases vitamin K absorption, counteracting warfarin"
    ],
    answer: 1,
    explanation: "Fluconazole is a potent inhibitor of CYP2C9 (and CYP3A4). Warfarin's pharmacologically more potent S-enantiomer is primarily metabolised by CYP2C9. Fluconazole significantly increases S-warfarin plasma levels, causing marked elevation of the INR and increased bleeding risk. INR should be closely monitored whenever azole antifungals are co-prescribed with warfarin. Even topical vaginal azoles can occasionally have systemic effects."
  },
  {
    id: 7446,
    subject: "Pharmacology",
    stem: "The REWIND trial demonstrated cardiovascular outcome benefit (reduction in MACE) for which GLP-1 receptor agonist?",
    options: [
      "Exenatide once weekly",
      "Dulaglutide",
      "Albiglutide",
      "Lixisenatide"
    ],
    answer: 1,
    explanation: "The REWIND trial (Researching Cardiovascular Events With a Weekly Incretin in Diabetes) demonstrated that dulaglutide significantly reduced MACE in patients with T2DM with or without prior CVD — one of few GLP-1 RA trials including patients with CV risk factors alone (without established CVD). Liraglutide: LEADER trial; Semaglutide: SUSTAIN-6 and SOUL; Albiglutide: HARMONY OUTCOMES. EXCEL (exenatide once weekly) showed non-inferiority."
  },
  {
    id: 7447,
    subject: "Pharmacology",
    stem: "Emicizumab, used in haemophilia A prophylaxis, works by a mechanism different from factor VIII replacement. It acts as a:",
    options: [
      "Factor VIII concentrate that bypasses inhibitors",
      "Bispecific antibody that bridges factor IXa and factor X, mimicking the cofactor function of factor VIII",
      "Anti-inhibitor antibody that neutralises factor VIII inhibitors",
      "Recombinant von Willebrand factor that stabilises endogenous factor VIII"
    ],
    answer: 1,
    explanation: "Emicizumab (Hemlibra) is a bispecific monoclonal antibody that simultaneously binds to activated factor IXa and factor X, bringing them into proximity and mimicking the cofactor activity of factor VIIIa — restoring the tenase complex function. It is given subcutaneously weekly/biweekly/monthly, and is effective even in patients with factor VIII inhibitors. It does not measure on standard APTT-based factor VIII assays."
  },
  {
    id: 7448,
    subject: "Pharmacology",
    stem: "DDAVP (desmopressin) is used as treatment for mild haemophilia A and von Willebrand disease type 1 because it:",
    options: [
      "Directly provides exogenous factor VIII and vWF",
      "Stimulates release of endogenous factor VIII and vWF from endothelial Weibel-Palade bodies",
      "Inhibits fibrinolysis by blocking plasminogen activation",
      "Enhances platelet aggregation via TXA2 upregulation"
    ],
    answer: 1,
    explanation: "Desmopressin (DDAVP) is a synthetic vasopressin analogue that stimulates V2 receptors on endothelial cells, triggering release of pre-formed factor VIII and vWF stored in Weibel-Palade bodies. This can transiently raise factor VIII and vWF levels 3-5x above baseline. It is effective for mild haemophilia A (factor VIII >5%) and VWD type 1, but NOT for VWD type 2B (can cause thrombocytopaenia) or type 3 (no stored vWF). Tachyphylaxis develops after repeated doses."
  },
  {
    id: 7449,
    subject: "Pharmacology",
    stem: "Molnupiravir, used for mild-to-moderate COVID-19, exerts its antiviral effect by:",
    options: [
      "Inhibiting the SARS-CoV-2 main protease",
      "Incorporating into viral RNA as a mutagenic nucleoside analogue, causing lethal mutagenesis of the viral genome",
      "Blocking ACE2-spike protein interaction",
      "Inhibiting viral membrane fusion via the S2 subunit"
    ],
    answer: 1,
    explanation: "Molnupiravir (Lagevrio) is a prodrug of the nucleoside analogue EIDD-1931 (beta-D-N4-hydroxycytidine). It is incorporated into viral RNA by the RNA-dependent RNA polymerase (RdRp) and causes widespread mutations in the viral genome — a mechanism called 'lethal mutagenesis' or 'error catastrophe.' Theoretical concern about mutagenicity in host cells; not recommended in pregnancy. Less effective than nirmatrelvir-ritonavir in clinical trials."
  },
  {
    id: 7450,
    subject: "Pharmacology",
    stem: "Which statement about the EMPA-REG OUTCOME trial with empagliflozin is most accurate?",
    options: [
      "It showed empagliflozin reduced MACE primarily through glycaemic control benefits",
      "It demonstrated a significant reduction in CV death and hospitalisation for heart failure in T2DM patients with established CVD, with benefits appearing rapidly — too quickly to be explained by glycaemic effects alone",
      "It showed empagliflozin is effective in T2DM patients without established CVD",
      "It demonstrated empagliflozin's benefit is limited to patients with CKD"
    ],
    answer: 1,
    explanation: "The EMPA-REG OUTCOME trial showed empagliflozin significantly reduced CV death by 38% and hospitalisation for heart failure by 35% in T2DM patients with established CVD. Crucially, the survival benefits appeared within weeks of starting treatment — far too rapidly to result from glycaemic improvements alone. This suggested haemodynamic mechanisms (osmotic diuresis, natriuresis, reduced preload/afterload) and direct cardiac/renal tubuloglomerular feedback effects. This trial transformed SGLT-2 inhibitors from glucose-lowering drugs to cardiorenal protective agents."
  },

  // ─── PATHOLOGY (IDs 7451-7470) ───────────────────────────────────────────
  {
    id: 7451,
    subject: "Pathology",
    stem: "On immunohistochemistry, a poorly differentiated tumour stains positive for cytokeratin AE1/AE3 and negative for vimentin, S100, and CD45. This pattern is most consistent with:",
    options: [
      "Malignant melanoma",
      "Undifferentiated carcinoma (epithelial origin)",
      "Lymphoma",
      "Malignant peripheral nerve sheath tumour"
    ],
    answer: 1,
    explanation: "Cytokeratins (AE1/AE3 pan-cytokeratin) are markers of epithelial differentiation — positive in carcinomas. Vimentin marks mesenchymal tumours. S100 marks neural crest-derived tumours (melanoma, nerve sheath). CD45 (LCA = leukocyte common antigen) marks lymphomas. A CK+/vimentin-/S100-/CD45- pattern confirms epithelial (carcinoma) origin. CK7/CK20 combination further narrows primary site: CK7+/CK20- = lung/breast/ovary; CK7-/CK20+ = colorectal; CK7+/CK20+ = urothelial/pancreatic."
  },
  {
    id: 7452,
    subject: "Pathology",
    stem: "Merkel cell carcinoma of the skin shows a characteristic immunohistochemical staining pattern of:",
    options: [
      "CK7+, CK20-, S100+",
      "CK20+ (paranuclear dot-like pattern), synaptophysin+, chromogranin+, CK7-",
      "Vimentin+, CD34+, CK20-",
      "S100+, HMB-45+, CK20-"
    ],
    answer: 1,
    explanation: "Merkel cell carcinoma (primary cutaneous neuroendocrine carcinoma) has a characteristic IHC: CK20+ in a paranuclear dot-like pattern (pathognomonic), neuroendocrine markers (synaptophysin, chromogranin, NSE), CD56+. CK7 is typically negative (distinguishes from metastatic small cell lung carcinoma which is CK7+/CK20-/TTF-1+). Associated with Merkel cell polyomavirus (MCPyV) in ~80% of cases. Anti-PD-1 immunotherapy (pembrolizumab, avelumab) is effective."
  },
  {
    id: 7453,
    subject: "Pathology",
    stem: "CD117 (c-KIT) immunoreactivity is characteristically seen in:",
    options: [
      "Adenocarcinoma of the colon",
      "Gastrointestinal stromal tumour (GIST) and mast cell tumours",
      "Squamous cell carcinoma of the oesophagus",
      "Follicular lymphoma"
    ],
    answer: 1,
    explanation: "CD117 (c-KIT, a tyrosine kinase receptor) is the defining marker of GIST (gastrointestinal stromal tumours), which arise from interstitial cells of Cajal. Most GISTs have activating KIT mutations; imatinib (a KIT inhibitor) is the treatment. DOG1 (Discovered On GIST-1) is also a sensitive marker. CD117 is also positive in mast cells (systemic mastocytosis), melanoma (rarely), and seminoma. Importantly, CD34 is positive in ~70% of GISTs alongside CD117."
  },
  {
    id: 7454,
    subject: "Pathology",
    stem: "PSA (prostate-specific antigen) as a tumour marker is most accurately described as:",
    options: [
      "Specific for prostate cancer — elevated PSA always means cancer",
      "Organ-specific (produced by prostate epithelium) but not cancer-specific — also elevated in benign prostatic hyperplasia, prostatitis, and after instrumentation",
      "A prognostic marker only, not used for screening",
      "Elevated specifically in small cell carcinoma of the prostate"
    ],
    answer: 1,
    explanation: "PSA (prostate-specific antigen, also called kallikrein-3) is produced by prostate epithelial cells regardless of malignancy. It is organ-specific but NOT cancer-specific. Elevated PSA can result from: prostate cancer, benign prostatic hyperplasia (BPH), prostatitis, digital rectal examination, cystoscopy, or catheterisation. Free PSA ratio: lower free PSA/total PSA ratio suggests malignancy. PSA density and PSA velocity improve specificity. Not used as a universal screening tool due to false-positive rates."
  },
  {
    id: 7455,
    subject: "Pathology",
    stem: "BRAF V600E mutation is found in which of the following tumour types, making it targetable with vemurafenib?",
    options: [
      "KRAS-mutant colorectal cancer",
      "Melanoma (approx. 50%), papillary thyroid carcinoma, and hairy cell leukaemia",
      "HER2-amplified breast cancer",
      "ALK-rearranged NSCLC"
    ],
    answer: 1,
    explanation: "BRAF V600E (valine to glutamate substitution at codon 600) constitutively activates BRAF kinase in the MAPK pathway. It occurs in: melanoma (~50%), papillary thyroid carcinoma (~45%), colorectal cancer (~10% but associated with poor prognosis), hairy cell leukaemia (nearly 100%), and low-grade glioma. Targeted therapy: vemurafenib or dabrafenib (BRAF inhibitors), often combined with MEK inhibitors (trametinib, cobimetinib) to prevent resistance. In BRAF-mutant colorectal cancer, anti-EGFR therapy without a BRAF inhibitor is generally ineffective."
  },
  {
    id: 7456,
    subject: "Pathology",
    stem: "EML4-ALK rearrangement in NSCLC is most commonly detected by which diagnostic method, and which drug is used as first-line targeted therapy?",
    options: [
      "FISH (fluorescence in situ hybridisation) or IHC; gefitinib",
      "FISH, IHC (D5F3 antibody), or NGS; alectinib (preferred over crizotinib)",
      "PCR for point mutations; osimertinib",
      "IHC for PD-L1; pembrolizumab"
    ],
    answer: 1,
    explanation: "ALK rearrangements (most commonly EML4-ALK fusion) occur in ~3-5% of NSCLC, typically in younger patients, never-smokers, and adenocarcinoma histology. Detection: ALK IHC (D5F3 clone), FISH, or NGS. Targeted therapy has evolved: crizotinib (1st gen ALK-TKI) → superseded by alectinib (2nd gen) as first-line due to better CNS penetration and improved PFS. Lorlatinib (3rd gen) for resistant disease. EGFR mutation is detected by PCR/NGS; osimertinib is 3rd-gen EGFR-TKI."
  },
  {
    id: 7457,
    subject: "Pathology",
    stem: "In Lynch syndrome (hereditary non-polyposis colorectal cancer), which mismatch repair genes are most commonly mutated?",
    options: [
      "APC and KRAS",
      "MLH1 and MSH2 (together accounting for ~80-90% of Lynch syndrome cases)",
      "BRCA1 and BRCA2",
      "TP53 and SMAD4"
    ],
    answer: 1,
    explanation: "Lynch syndrome is caused by germline mutations in mismatch repair (MMR) genes: MLH1, MSH2, MSH6, PMS2. MLH1 (~40%) and MSH2 (~40%) together account for ~80% of cases. MMR deficiency leads to microsatellite instability (MSI-H). Lynch syndrome increases risk of colorectal, endometrial, ovarian, gastric, urinary tract, and brain cancers. Tumours show MSI-H on PCR and loss of MMR protein expression on IHC. These tumours respond well to anti-PD-1 immunotherapy."
  },
  {
    id: 7458,
    subject: "Pathology",
    stem: "Von Willebrand disease type 1 is characterised by all of the following EXCEPT:",
    options: [
      "Autosomal dominant inheritance",
      "Quantitative deficiency of von Willebrand factor",
      "Prolonged ristocetin cofactor assay (reduced vWF activity)",
      "Markedly prolonged PT (prothrombin time) as the primary coagulation abnormality"
    ],
    answer: 3,
    explanation: "Von Willebrand disease type 1 (most common form, 75% of VWD): (1) Autosomal dominant, (2) Quantitative reduction in structurally normal vWF, (3) Prolonged bleeding time, (4) Prolonged APTT (because vWF carries/stabilises factor VIII — low vWF leads to low factor VIII), (5) Low vWF antigen, (6) Low ristocetin cofactor activity, (7) Normal PT (extrinsic pathway not affected). Prothrombin time (PT) is normal in VWD. Treatment: DDAVP (type 1) or vWF concentrate."
  },
  {
    id: 7459,
    subject: "Pathology",
    stem: "Disseminated intravascular coagulation (DIC) is characterised by which combination of laboratory findings?",
    options: [
      "Elevated PT, elevated APTT, elevated fibrinogen, thrombocytopaenia, positive D-dimer",
      "Prolonged PT, prolonged APTT, LOW fibrinogen (consumed), thrombocytopaenia, elevated D-dimer and FDP, schistocytes on blood film",
      "Normal PT, normal APTT, elevated fibrinogen, normal platelet count",
      "Isolated thrombocytopaenia with normal PT, APTT, and fibrinogen"
    ],
    answer: 1,
    explanation: "DIC is a syndrome of simultaneous widespread microvascular thrombosis and haemorrhage due to consumption of clotting factors, fibrinogen, and platelets. Labs: prolonged PT (extrinsic pathway factors consumed), prolonged APTT (intrinsic pathway), LOW fibrinogen (consumed/degraded — key diagnostic criterion), thrombocytopaenia, markedly elevated D-dimer and fibrin degradation products (FDP), and microangiopathic haemolytic anaemia (schistocytes on blood film). Common triggers: sepsis, obstetric emergencies (abruption, AFE, HELLP), massive trauma, malignancy."
  },
  {
    id: 7460,
    subject: "Pathology",
    stem: "EGFR mutation in NSCLC — which specific mutations are most sensitising to first- and second-generation EGFR-TKIs (gefitinib, erlotinib), and what mutation confers resistance?",
    options: [
      "Exon 18 insertion sensitises; exon 19 deletion confers resistance",
      "Exon 19 deletion and exon 21 L858R substitution sensitise; T790M mutation in exon 20 confers acquired resistance (treated by osimertinib)",
      "Exon 20 insertion sensitises to afatinib; L858R confers resistance",
      "G719X mutation is the most common sensitising mutation; C797S causes primary resistance"
    ],
    answer: 1,
    explanation: "Classical sensitising EGFR mutations: exon 19 deletions (~45%) and exon 21 L858R substitution (~40%) — together ~85% of all EGFR mutations. These patients respond well to erlotinib/gefitinib/afatinib (1st/2nd gen) or osimertinib (3rd gen, preferred first-line). Acquired resistance: T790M 'gatekeeper' mutation in exon 20 (~50% of resistant cases) — osimertinib (a 3rd-gen EGFR-TKI) overcomes T790M resistance. Exon 20 insertions are generally NOT sensitising to standard EGFR-TKIs; amivantamab targets these."
  },
  {
    id: 7461,
    subject: "Pathology",
    stem: "Which immunohistochemical marker is most useful in distinguishing malignant mesothelioma from pulmonary adenocarcinoma?",
    options: [
      "CK7 (positive in both) and CK20 (negative in both)",
      "Calretinin and WT1 (positive in mesothelioma); TTF-1 and Napsin-A (positive in adenocarcinoma; negative in mesothelioma)",
      "S100 and CD45 (positive in mesothelioma)",
      "CEA and CD117 (positive in mesothelioma)"
    ],
    answer: 1,
    explanation: "Distinguishing mesothelioma from adenocarcinoma is a classic pathology IHC question. Mesothelioma markers (positive): calretinin (most sensitive/specific), WT1, D2-40 (podoplanin), CK5/6, mesothelin. Adenocarcinoma markers (positive, negative in mesothelioma): TTF-1 (thyroid transcription factor-1), Napsin-A, CEA, MOC31, BG8. At least 2 positive mesothelial markers + 2 negative adenocarcinoma markers are required for diagnosis. Asbestos exposure is the main aetiological factor for mesothelioma."
  },
  {
    id: 7462,
    subject: "Pathology",
    stem: "Alpha-fetoprotein (AFP) is a tumour marker elevated in which conditions?",
    options: [
      "Prostate cancer and bladder cancer",
      "Hepatocellular carcinoma and non-seminomatous germ cell tumours (teratoma, yolk sac tumour, embryonal carcinoma); also elevated in pregnancy and benign hepatic conditions",
      "Medullary thyroid carcinoma and carcinoid tumours",
      "Colorectal cancer and gastric cancer"
    ],
    answer: 1,
    explanation: "AFP is elevated in: (1) Hepatocellular carcinoma (HCC) — AFP >400 ng/mL is diagnostic in cirrhosis; (2) Non-seminomatous GCT — yolk sac tumour produces most AFP, also embryonal carcinoma; pure seminoma does NOT produce AFP; (3) Pregnancy (produced by fetal liver/yolk sac — elevated in neural tube defects); (4) Benign liver disease (hepatitis, cirrhosis — mild elevation). hCG is elevated in seminoma, choriocarcinoma, hydatidiform mole. Calcitonin is the marker for medullary thyroid carcinoma."
  },
  {
    id: 7463,
    subject: "Pathology",
    stem: "In the context of haemophilia A, haemarthrosis (bleeding into joints) predominantly affects which joints, and the long-term complication is:",
    options: [
      "Hip and shoulder joints predominantly; avascular necrosis",
      "Knees, elbows, and ankles (weight-bearing and frequently stressed joints); chronic haemophilic arthropathy with joint destruction",
      "Small joints of the hands and feet; rheumatoid-like arthritis",
      "Sacroiliac joints; ankylosing spondylitis"
    ],
    answer: 1,
    explanation: "Haemophilia A (factor VIII deficiency, X-linked recessive) classically causes haemarthrosis in large joints: knee (most common), elbow, ankle, hip, and shoulder. Repeated bleeding leads to synovial hypertrophy and haemophilic arthropathy — progressive joint destruction with haemosiderin deposition, synovitis, cartilage loss, and subchondral bone damage. This results in chronic pain, deformity, and disability. Target joint prophylaxis with regular factor VIII or emicizumab prevents joint damage."
  },
  {
    id: 7464,
    subject: "Pathology",
    stem: "The pathological hallmark distinguishing type I (classic) DIC from thrombotic microangiopathy (TMA) such as TTP is:",
    options: [
      "Both have identical coagulation profiles; TTP can only be distinguished clinically",
      "In TTP, PT/APTT and fibrinogen are typically NORMAL despite thrombocytopaenia and MAHA; DIC shows prolonged PT/APTT and low fibrinogen",
      "TTP is characterised by elevated fibrinogen and positive direct Coombs test",
      "DIC shows normal D-dimer whereas TTP shows markedly elevated D-dimer"
    ],
    answer: 1,
    explanation: "This is a classic distinguishing question. TTP (thrombotic thrombocytopaenic purpura): ADAMTS13 deficiency → ultra-large vWF multimers → platelet microthrombi. Lab: thrombocytopaenia + MAHA (schistocytes) + normal/near-normal PT, APTT, and fibrinogen (clotting factors not significantly consumed). DIC: consumption coagulopathy → low fibrinogen, prolonged PT/APTT, elevated D-dimer/FDP, thrombocytopaenia, schistocytes. This difference in coagulation tests is crucial for distinguishing TTP from DIC."
  },
  {
    id: 7465,
    subject: "Pathology",
    stem: "PD-L1 expression ≥50% on tumour cells (TPS ≥50%) by IHC is required to use pembrolizumab as first-line monotherapy (without chemotherapy) in which cancer?",
    options: [
      "Colorectal cancer with KRAS wild-type",
      "Non-small cell lung cancer (NSCLC) without EGFR/ALK driver mutations",
      "HER2-positive breast cancer",
      "BRAF-mutant melanoma"
    ],
    answer: 1,
    explanation: "Pembrolizumab received FDA approval as first-line monotherapy for advanced NSCLC with PD-L1 TPS ≥50%, in the absence of EGFR mutations or ALK rearrangements (patients with these drivers should receive targeted therapy first). The KEYNOTE-024 trial established this. For PD-L1 1-49%, pembrolizumab + chemotherapy is used. In melanoma, pembrolizumab is used regardless of PD-L1 status. Patients with actionable driver mutations (EGFR, ALK) are treated with TKIs first."
  },
  {
    id: 7466,
    subject: "Pathology",
    stem: "Calcitonin is a specific tumour marker for which thyroid malignancy, and which genetic mutation is associated with the hereditary form?",
    options: [
      "Papillary thyroid carcinoma; BRAF V600E mutation",
      "Medullary thyroid carcinoma (MTC); RET proto-oncogene mutation (associated with MEN2A and MEN2B)",
      "Follicular thyroid carcinoma; RAS mutation",
      "Anaplastic thyroid carcinoma; TP53 mutation"
    ],
    answer: 1,
    explanation: "Medullary thyroid carcinoma arises from parafollicular C-cells that produce calcitonin. Calcitonin is a sensitive and specific serum marker for MTC. CEA is also elevated. Hereditary MTC (~25% of cases) is caused by germline RET proto-oncogene mutations: MEN2A (MTC + phaeochromocytoma + parathyroid hyperplasia — RET codon 634), MEN2B (MTC + phaeochromocytoma + mucosal neuromas + Marfanoid habitus — RET codon 918). All MTC patients should undergo RET mutation testing. GLP-1 RAs are contraindicated in patients with MTC/MEN2 history."
  },
  {
    id: 7467,
    subject: "Pathology",
    stem: "The Gleason grading system for prostate cancer and the ISUP grade group system have the following relationship:",
    options: [
      "Gleason score 6 = ISUP Grade Group 2; considered clinically significant",
      "Gleason score 6 (pattern 3+3) = ISUP Grade Group 1; clinically significant but still often managed with active surveillance",
      "Gleason score 7 (3+4) = ISUP Grade Group 3; high risk",
      "Gleason score 9 = ISUP Grade Group 4"
    ],
    answer: 1,
    explanation: "Gleason to ISUP Grade Group: GS 6 (3+3) = GG1; GS 7 (3+4) = GG2; GS 7 (4+3) = GG3; GS 8 (4+4 or 3+5 or 5+3) = GG4; GS 9-10 = GG5. GS6/GG1 is the lowest risk and many patients qualify for active surveillance. GG2 (3+4) is favourable intermediate risk — often eligible for active surveillance in select cases. GG3-5 are higher risk requiring treatment. The minimum reportable Gleason score is now 6 (not 2-4) because patterns 1 and 2 are no longer assigned in needle biopsies."
  },
  {
    id: 7468,
    subject: "Pathology",
    stem: "Thyroglobulin as a tumour marker is most useful for:",
    options: [
      "Diagnosis of thyroid cancer before thyroidectomy",
      "Post-thyroidectomy monitoring for recurrence of differentiated thyroid cancer (papillary and follicular), where any detectable thyroglobulin after total thyroidectomy and radioiodine ablation suggests residual/recurrent disease",
      "Distinguishing papillary from follicular thyroid carcinoma",
      "Screening for medullary thyroid carcinoma in MEN2 families"
    ],
    answer: 1,
    explanation: "Thyroglobulin (Tg) is produced by follicular thyroid cells (normal and malignant). After total thyroidectomy and radioiodine ablation for differentiated thyroid carcinoma, thyroglobulin should be undetectable. Any rise in Tg suggests residual disease or recurrence. Anti-Tg antibodies interfere with the assay (falsely low Tg). Tg is NOT useful for initial diagnosis (normal thyroid also produces Tg). Calcitonin is the marker for medullary thyroid carcinoma. RET mutation testing — not Tg — screens MEN2 families."
  },
  {
    id: 7469,
    subject: "Pathology",
    stem: "A 35-year-old woman with SLE and recurrent miscarriages tests positive for anticardiolipin antibodies and lupus anticoagulant on two occasions 12 weeks apart. She likely has antiphospholipid syndrome (APS). The paradox of 'lupus anticoagulant' is:",
    options: [
      "It prolongs APTT in vitro, paradoxically INHIBITING coagulation in vivo",
      "It prolongs APTT in vitro but PROMOTES thrombosis in vivo by interfering with phospholipid-dependent anticoagulant mechanisms",
      "It specifically blocks factor VIII, causing a true bleeding diathesis",
      "It shortens the APTT by activating the intrinsic pathway"
    ],
    answer: 1,
    explanation: "Lupus anticoagulant (LA) is an antiphospholipid antibody that, paradoxically: (1) PROLONGS APTT in vitro — the antibody competes with clotting factors for phospholipid binding sites on the reaction surface of APTT test, (2) but PROMOTES thrombosis in vivo — by blocking phospholipid-dependent anticoagulant mechanisms (protein C, protein S, annexin V), activating endothelium, and promoting platelet aggregation. This is the classic paradox. APS: thrombosis (arterial + venous) + pregnancy morbidity + persistent antiphospholipid antibodies. Treatment: anticoagulation (warfarin long-term)."
  },
  {
    id: 7470,
    subject: "Pathology",
    stem: "HER2 (human epidermal growth factor receptor 2) amplification/overexpression in breast cancer is assessed by:",
    options: [
      "PCR for HER2 point mutations",
      "IHC (scored 0, 1+, 2+, 3+) as the initial test; equivocal IHC 2+ cases confirmed by FISH/ISH for gene amplification",
      "Serum HER2 ECD (extracellular domain) levels by ELISA",
      "ER/PR receptor status by IHC"
    ],
    answer: 1,
    explanation: "HER2 testing algorithm in breast cancer: (1) IHC first — scored 0 (negative), 1+ (negative/low), 2+ (equivocal), 3+ (positive/amplified). (2) IHC 2+ cases: reflex FISH (fluorescence in situ hybridisation) or ISH to confirm gene amplification. HER2 3+ by IHC or FISH-amplified = HER2-positive, eligible for trastuzumab-based therapy. HER2-low (IHC 1+ or IHC 2+/FISH-negative) is now a distinct category eligible for trastuzumab deruxtecan (T-DXd). HER2 is amplified in ~15-20% of breast cancers and ~20% of gastric cancers."
  },

  // ─── MICROBIOLOGY (IDs 7471-7480) ────────────────────────────────────────
  {
    id: 7471,
    subject: "Microbiology",
    stem: "Mpox (Monkeypox) can be distinguished from smallpox by which clinical feature?",
    options: [
      "Rash begins on the trunk and spreads centrifugally",
      "Lymphadenopathy is a prominent feature of Mpox but is characteristically ABSENT in smallpox",
      "Mpox lesions are at different stages simultaneously (like chickenpox), whereas smallpox lesions are synchronous",
      "Mpox primarily causes mucosal lesions without skin involvement"
    ],
    answer: 1,
    explanation: "Key differentiating feature: Mpox causes prominent lymphadenopathy (especially submandibular, cervical, axillary, inguinal) — this is ABSENT in smallpox. Both have synchronous lesions (all lesions at the same stage — unlike varicella which is asynchronous). Mpox rash: centrifugal distribution (face → palms/soles → trunk), progresses macule → papule → vesicle → pustule → umbilicated scab. The 2022 global outbreak (Clade IIb) featured predominantly genital/perianal lesions and oral lesions, transmitted via close sexual contact."
  },
  {
    id: 7472,
    subject: "Microbiology",
    stem: "Tecovirimat (TPOXX) is the antiviral drug used for severe mpox. Its mechanism of action is:",
    options: [
      "It inhibits the mpox virus DNA polymerase",
      "It inhibits the VP37 protein essential for wrapping of intracellular mature virions, preventing formation and release of extracellular enveloped virus (EEV)",
      "It blocks viral entry into host cells via ACE2-like receptor",
      "It inhibits viral thymidine kinase, similar to acyclovir's mechanism"
    ],
    answer: 1,
    explanation: "Tecovirimat (ST-246/TPOXX) inhibits VP37, an orthopoxvirus protein required for envelopment of intracellular virions to form extracellular enveloped virus (EEV) — the form of virus responsible for systemic spread and cell-to-cell transmission. By blocking EEV formation, it prevents virus dissemination. It is active against all orthopoxviruses including mpox, smallpox, and vaccinia. The JYNNEOS vaccine (modified vaccinia Ankara) is attenuated and non-replicating, approved for mpox/smallpox prevention."
  },
  {
    id: 7473,
    subject: "Microbiology",
    stem: "MRSA resistance to beta-lactam antibiotics is mediated by:",
    options: [
      "Production of extended-spectrum beta-lactamase (ESBL) that hydrolyses penicillins",
      "The mecA gene encoding PBP2a (penicillin-binding protein 2a), which has low affinity for all beta-lactams including carbapenems",
      "Efflux pumps that actively export beta-lactam antibiotics",
      "Altered porins that prevent beta-lactam entry into the cell"
    ],
    answer: 1,
    explanation: "MRSA resistance: the mecA gene (on the mobile genetic element SCCmec) encodes PBP2a (also called PBP2'), an alternative penicillin-binding protein with markedly reduced affinity for virtually all beta-lactams (penicillins, cephalosporins, carbapenems, monobactams). Normal PBPs are the targets for beta-lactams — PBP2a allows cell wall synthesis to continue in the presence of beta-lactams. MRSA is detected by cefoxitin disc diffusion or PCR for mecA. Treatment: vancomycin, linezolid, daptomycin, ceftaroline (5th-gen cephalosporin active against MRSA via PBP2a binding)."
  },
  {
    id: 7474,
    subject: "Microbiology",
    stem: "Vancomycin-resistant Enterococcus (VRE) acquires resistance through which mechanism?",
    options: [
      "Production of beta-lactamase enzyme",
      "vanA or vanB gene clusters encoding enzymes that replace the terminal D-Ala-D-Ala in peptidoglycan precursors with D-Ala-D-Lac (vanA/vanB) or D-Ala-D-Ser (vanC), reducing vancomycin binding affinity",
      "Efflux pump overexpression reducing intracellular vancomycin concentration",
      "Altered cell membrane composition preventing vancomycin penetration"
    ],
    answer: 1,
    explanation: "Vancomycin binds to the D-Ala-D-Ala terminal of peptidoglycan precursors, blocking cell wall synthesis. VRE resistance: vanA/vanB gene clusters encode enzymes (VanH, VanA/VanB, VanX) that synthesise alternative peptidoglycan precursors ending in D-Ala-D-Lac (for vanA and vanB) — reducing vancomycin binding affinity >1000-fold. VanA confers high-level resistance to both vancomycin and teicoplanin; VanB confers variable resistance to vancomycin but usually susceptible to teicoplanin. Treatment: linezolid or daptomycin."
  },
  {
    id: 7475,
    subject: "Microbiology",
    stem: "SARS-CoV-2 is a betacoronavirus that enters human cells by binding its spike protein to which receptor?",
    options: [
      "CD4 receptor on T lymphocytes",
      "ACE2 (angiotensin-converting enzyme 2), facilitated by TMPRSS2 serine protease priming of the spike protein",
      "DPP4 (CD26) receptor on airway epithelial cells",
      "Sialic acid residues on upper respiratory epithelium"
    ],
    answer: 1,
    explanation: "SARS-CoV-2 spike protein's receptor-binding domain (RBD) binds ACE2, which is expressed on: type II alveolar pneumocytes (explaining lung tropism), vascular endothelium, gut epithelium, nasal epithelium, and kidney proximal tubule. TMPRSS2 (transmembrane serine protease 2) on host cells primes/cleaves the spike protein, facilitating membrane fusion and viral entry. Furin cleavage site in the S1/S2 junction enhances SARS-CoV-2 pathogenicity compared to SARS-CoV-1. DPP4 is the receptor for MERS-CoV; sialic acid for influenza."
  },
  {
    id: 7476,
    subject: "Microbiology",
    stem: "The Omicron variant of SARS-CoV-2 (BA.1 and descendants) differs from earlier variants in which clinically important property?",
    options: [
      "Higher mortality and more severe pneumonia than Delta variant",
      "Greater immune evasion (evades vaccine-induced and infection-induced neutralising antibodies) but generally causes less severe disease with less lower respiratory tract involvement",
      "Higher rate of replication in the lower respiratory tract causing more severe pneumonia",
      "Complete resistance to all antiviral drugs including nirmatrelvir"
    ],
    answer: 1,
    explanation: "Omicron (BA.1 first identified Nov 2021, South Africa) has >30 mutations in the spike protein, leading to significant immune evasion — reduced neutralisation by antibodies from vaccination or prior infection. Despite high transmissibility, clinical disease was generally less severe than Delta, with more upper respiratory tract tropism (less lower RT/pneumonia), possibly due to reduced fusogenicity. Omicron remains sensitive to nirmatrelvir-ritonavir and most antivirals. Most monoclonal antibodies (bamlanivimab, casirivimab-imdevimab) lost activity against Omicron."
  },
  {
    id: 7477,
    subject: "Microbiology",
    stem: "Long COVID is defined as symptoms persisting beyond how long after initial SARS-CoV-2 infection, and which symptom cluster is most characteristic?",
    options: [
      "Beyond 2 weeks; primarily gastrointestinal symptoms",
      "Beyond 4 weeks (WHO definition: ongoing symptoms beyond 4 weeks, or new symptoms beginning after 12 weeks); characterised by fatigue, post-exertional malaise, cognitive dysfunction (brain fog), dyspnoea, and autonomic dysfunction (POTS)",
      "Beyond 72 hours; primarily respiratory symptoms in previously ventilated patients",
      "Beyond 6 months; exclusively affecting patients who were hospitalised"
    ],
    answer: 1,
    explanation: "WHO defines Long COVID/Post-COVID condition as: symptoms that occur following probable/confirmed SARS-CoV-2 infection, persist ≥2 months, and cannot be explained by an alternative diagnosis (usually starting within 3 months of acute COVID). Common symptoms: fatigue (most common), post-exertional malaise (PEM), cognitive impairment (brain fog), dyspnoea, palpitations, autonomic dysfunction (POTS — postural orthostatic tachycardia syndrome), depression/anxiety, myalgia, and sleep disturbance. Occurs even after mild/asymptomatic COVID; not limited to hospitalised patients."
  },
  {
    id: 7478,
    subject: "Microbiology",
    stem: "Ceftazidime-avibactam is NOT effective against which type of carbapenem-resistant organism, necessitating use of cefiderocol instead?",
    options: [
      "KPC (Klebsiella pneumoniae carbapenemase)-producing Enterobacteriaceae",
      "MBL (metallo-beta-lactamase)-producing organisms such as NDM (New Delhi metallo-beta-lactamase)-producing bacteria",
      "OXA-48-producing Klebsiella pneumoniae",
      "ESBL-producing E. coli"
    ],
    answer: 1,
    explanation: "Avibactam is a diazabicyclooctane (DBO) beta-lactamase inhibitor that inhibits: Ambler class A (KPC, ESBL), class C (AmpC), and class D (OXA-48) beta-lactamases. Critically, avibactam does NOT inhibit Ambler class B metallo-beta-lactamases (MBLs: NDM, VIM, IMP) which use zinc ions for catalysis. Therefore, ceftazidime-avibactam fails against NDM-producing organisms. Cefiderocol (siderophore cephalosporin) and aztreonam + avibactam combinations are used for MBL-producers. Aztreonam is not hydrolysed by MBLs."
  },
  {
    id: 7479,
    subject: "Microbiology",
    stem: "The JYNNEOS vaccine for mpox prevention differs from the older smallpox vaccine (ACAM2000) in that it is:",
    options: [
      "A live attenuated replication-competent vaccinia virus, administered by scarification",
      "A live attenuated, replication-incompetent modified vaccinia Ankara (MVA) virus, administered subcutaneously or intradermally, safe for immunocompromised individuals",
      "An inactivated whole-virus vaccine administered intramuscularly",
      "A mRNA vaccine encoding the mpox L1 surface protein"
    ],
    answer: 1,
    explanation: "JYNNEOS (also called Imvamune/Imvanex) is a live attenuated, replication-deficient Modified Vaccinia Ankara (MVA) strain. Because it cannot replicate in human cells, it is safe for immunocompromised individuals (HIV-positive, etc.) — unlike ACAM2000 which is a live replication-competent vaccine and contraindicated in immunocompromised patients (risk of progressive vaccinia). JYNNEOS is given as 2 doses subcutaneously (or intradermally using dose-sparing fractionated approach during 2022 outbreak) 4 weeks apart. It also protects against smallpox."
  },
  {
    id: 7480,
    subject: "Microbiology",
    stem: "MIS-C (Multisystem Inflammatory Syndrome in Children) following COVID-19 is best described as:",
    options: [
      "An acute severe COVID-19 pneumonia in children under 12 years of age",
      "A post-infectious hyperinflammatory syndrome occurring 2-6 weeks after SARS-CoV-2 infection in children, characterised by fever, multiorgan dysfunction (cardiac, gastrointestinal, haematological), elevated inflammatory markers, and shares features with Kawasaki disease",
      "A chronic lung fibrosis syndrome in children recovering from COVID-19",
      "An acute allergic hypersensitivity reaction to mRNA COVID-19 vaccines in children"
    ],
    answer: 1,
    explanation: "MIS-C (Multisystem Inflammatory Syndrome in Children) is a rare but serious post-COVID-19 complication: (1) Occurs 2-6 weeks after SARS-CoV-2 infection (often in children who had mild/asymptomatic COVID), (2) Characterised by fever + evidence of multisystem involvement (cardiac — coronary artery aneurysms, myocarditis; GI — abdominal pain, diarrhoea; mucocutaneous — rash, conjunctival injection similar to Kawasaki disease), (3) Elevated inflammatory markers (CRP, ferritin, IL-6, D-dimer), (4) Positive SARS-CoV-2 serology. Treatment: IVIG + aspirin ± corticosteroids. Adults can develop MIS-A (adult equivalent)."
  }
];
