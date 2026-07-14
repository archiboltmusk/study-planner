// Shared CoreBTR schedule data — imported by CoreBTRSchedule component and schedule.ts

export type EntryType = "grandtest" | "study" | "revision" | "megabtr" | "exam";
export type Phase = "milestone" | "phase1" | "phase2" | "phase3" | "phase4" | "revision2" | "revision3" | "countdown";

export interface ScheduleEntry {
  id: number;
  phase: Phase;
  phaseLabel: string;
  startDate: Date;
  endDate: Date;
  subjects: string;
  focus?: string;
  testDate?: Date;
  testLabel?: string;
  type: EntryType;
  gtNumber?: string;
}

function d(y: number, m: number, day: number) {
  return new Date(y, m - 1, day);
}

export const BTR_SCHEDULE: ScheduleEntry[] = [
  // ── MILESTONE ──────────────────────────────────────────────────────────────
  {
    id: 1, phase: "milestone", phaseLabel: "Milestone",
    startDate: d(2026, 5, 23), endDate: d(2026, 5, 26),
    subjects: "Baseline Grand Test (GT-4)", type: "grandtest", gtNumber: "GT-4",
    focus: "Diagnostic baseline — identify weak subjects before the plan begins",
  },

  // ── PHASE 1: May–Jun ───────────────────────────────────────────────────────
  {
    id: 2, phase: "phase1", phaseLabel: "Phase 1",
    startDate: d(2026, 5, 27), endDate: d(2026, 5, 30),
    subjects: "Surgery",
    focus: "GI surgery, hernias, trauma ABCs, surgical oncology, thyroid surgery",
    testDate: d(2026, 5, 30), type: "study",
  },
  {
    id: 3, phase: "phase1", phaseLabel: "Phase 1",
    startDate: d(2026, 5, 31), endDate: d(2026, 6, 1),
    subjects: "Orthopaedics",
    focus: "Fractures (Colles, NOF, Monteggia/Galeazzi), compartment syndrome, bone tumours",
    testDate: d(2026, 6, 4), type: "study",
  },
  {
    id: 4, phase: "phase1", phaseLabel: "Phase 1",
    startDate: d(2026, 6, 2), endDate: d(2026, 6, 3),
    subjects: "Radiology",
    focus: "X-ray signs, CT patterns, MRI basics, interventional radiology indications",
    testDate: d(2026, 6, 4), type: "study",
  },
  {
    id: 5, phase: "phase1", phaseLabel: "Phase 1",
    startDate: d(2026, 6, 5), endDate: d(2026, 6, 7),
    subjects: "Microbiology",
    focus: "Culture media, gram stains, virulence factors, resistance (ESKAPE), hepatitis serology",
    testDate: d(2026, 6, 7), type: "study",
  },
  {
    id: 6, phase: "phase1", phaseLabel: "Phase 1",
    startDate: d(2026, 6, 8), endDate: d(2026, 6, 10),
    subjects: "Anatomy",
    focus: "Clinical correlations: brachial plexus, facial nerve, inguinal canal, triangles of neck",
    testDate: d(2026, 6, 11), type: "study",
  },
  {
    id: 7, phase: "phase1", phaseLabel: "Phase 1",
    startDate: d(2026, 6, 9), endDate: d(2026, 6, 12),
    subjects: "Core BTR GT-5", type: "grandtest", gtNumber: "GT-5",
    focus: "Full syllabus — measure progress since GT-4 baseline",
  },

  // ── PHASE 2: Jun (Integrated Systems) ─────────────────────────────────────
  {
    id: 8, phase: "phase2", phaseLabel: "Phase 2",
    startDate: d(2026, 6, 13), endDate: d(2026, 6, 16),
    subjects: "CVS + Renal + Haematology + GI",
    focus: "ACS management, Killip class; CKD staging KDIGO; anaemia algorithms; IBD criteria",
    testDate: d(2026, 6, 16), testLabel: "Integrated Systems-1 Test", type: "study",
  },
  {
    id: 9, phase: "phase2", phaseLabel: "Phase 2",
    startDate: d(2026, 6, 17), endDate: d(2026, 6, 20),
    subjects: "Neuro + Endocrine + Rheumatology + Respiratory",
    focus: "Stroke syndromes, epilepsy drugs; thyroid storm, DM targets; RA vs SLE; COPD vs asthma",
    type: "study",
  },
  {
    id: 10, phase: "phase2", phaseLabel: "Phase 2",
    startDate: d(2026, 6, 21), endDate: d(2026, 6, 22),
    subjects: "General Pathology + Pharmacology + Physiology + Immunology",
    focus: "Inflammation mediators, neoplasia markers; drug MOA table; JGA, lung volumes; HLA associations",
    testDate: d(2026, 6, 23), testLabel: "Integrated Systems-2 Test", type: "study",
  },
  {
    id: 11, phase: "phase2", phaseLabel: "Phase 2",
    startDate: d(2026, 6, 21), endDate: d(2026, 6, 24),
    subjects: "Core BTR GT-6", type: "grandtest", gtNumber: "GT-6",
    focus: "Integrated systems — identify weakest integrated topics",
  },

  // ── PHASE 3: Jun–Jul ───────────────────────────────────────────────────────
  {
    id: 12, phase: "phase3", phaseLabel: "Phase 3",
    startDate: d(2026, 6, 25), endDate: d(2026, 6, 28),
    subjects: "OBG",
    focus: "PIH (MgSO₄ protocol), APH, LSCS indications; PCOS Rotterdam criteria, Ca cervix FIGO 2023",
    testDate: d(2026, 6, 28), type: "study",
  },
  {
    id: 13, phase: "phase3", phaseLabel: "Phase 3",
    startDate: d(2026, 6, 29), endDate: d(2026, 6, 30),
    subjects: "Paediatrics",
    focus: "Developmental milestones, NRP steps, UIP vaccine schedule 2026, neonatal jaundice",
    testDate: d(2026, 7, 1), type: "study",
  },
  {
    id: 14, phase: "phase3", phaseLabel: "Phase 3",
    startDate: d(2026, 7, 2), endDate: d(2026, 7, 5),
    subjects: "PSM / Community Medicine",
    focus: "Sensitivity/specificity calculation Qs, study designs, NTEP/NVBDCP updates, NHPs",
    testDate: d(2026, 7, 5), type: "study",
  },
  {
    id: 15, phase: "phase3", phaseLabel: "Phase 3",
    startDate: d(2026, 7, 6), endDate: d(2026, 7, 7),
    subjects: "Dermatology",
    focus: "Pemphigus vs bullous pemphigoid, psoriasis treatments, leprosy classification",
    testDate: d(2026, 7, 10), type: "study",
  },
  {
    id: 16, phase: "phase3", phaseLabel: "Phase 3",
    startDate: d(2026, 7, 8), endDate: d(2026, 7, 9),
    subjects: "Anaesthesia",
    focus: "MAC values, regional blocks, muscle relaxants, malignant hyperthermia protocol",
    testDate: d(2026, 7, 10), type: "study",
  },
  {
    id: 17, phase: "phase3", phaseLabel: "Phase 3",
    startDate: d(2026, 7, 8), endDate: d(2026, 7, 11),
    subjects: "Core BTR GT-7", type: "grandtest", gtNumber: "GT-7",
    focus: "Pre-final grand test — benchmark before last subject block",
  },

  // ── PHASE 4: Jul (Last Block) ──────────────────────────────────────────────
  {
    id: 18, phase: "phase4", phaseLabel: "Phase 4",
    startDate: d(2026, 7, 12), endDate: d(2026, 7, 14),
    subjects: "Biochemistry",
    focus: "Metabolic disorders, porphyrias, lysosomal storage diseases, vitamins, enzyme kinetics",
    testDate: d(2026, 7, 15), type: "study",
  },
  {
    id: 19, phase: "phase4", phaseLabel: "Phase 4",
    startDate: d(2026, 7, 16), endDate: d(2026, 7, 17),
    subjects: "Forensic Medicine & Toxicology",
    focus: "IPC/CrPC sections, wounds, organophosphate protocol, alcohol forensics, age estimation",
    testDate: d(2026, 7, 19), type: "study",
  },
  {
    id: 20, phase: "phase4", phaseLabel: "Phase 4",
    startDate: d(2026, 7, 18), endDate: d(2026, 7, 19),
    subjects: "Psychiatry",
    focus: "DSM-5-TR/ICD-11 criteria, antipsychotics NMS, ECT indications, substance use criteria",
    testDate: d(2026, 7, 19), type: "study",
  },
  {
    id: 21, phase: "phase4", phaseLabel: "Phase 4",
    startDate: d(2026, 7, 20), endDate: d(2026, 7, 21),
    subjects: "ENT",
    focus: "CSOM (safe vs unsafe), audiogram patterns, Caldwell-Luc, Ca larynx TNM staging",
    testDate: d(2026, 7, 25), type: "study",
  },
  {
    id: 22, phase: "phase4", phaseLabel: "Phase 4",
    startDate: d(2026, 7, 22), endDate: d(2026, 7, 24),
    subjects: "Ophthalmology",
    focus: "Glaucoma field defects, cataract surgeries, diabetic retinopathy grading, squint tests",
    testDate: d(2026, 7, 25), type: "study",
  },
  {
    id: 23, phase: "phase4", phaseLabel: "Phase 4",
    startDate: d(2026, 7, 23), endDate: d(2026, 7, 26),
    subjects: "Core BTR GT-8", type: "grandtest", gtNumber: "GT-8",
    focus: "Final grand test — complete syllabus before revision cycles begin",
  },

  // ── REVISION CYCLE #2: Jul 27–Aug 22 (weekly blocks) ──────────────────────
  {
    id: 24, phase: "revision2", phaseLabel: "Revision #2",
    startDate: d(2026, 7, 27), endDate: d(2026, 8, 2),
    subjects: "Week 1 — Clinical Kings",
    focus: "Medicine (CVS, Neuro, Renal, GI, Endo) + Surgery + Pharmacology (new drugs 2024-26)",
    testDate: d(2026, 8, 2), testLabel: "Mock Test #1 — 200 Qs (timed)", type: "revision",
  },
  {
    id: 25, phase: "revision2", phaseLabel: "Revision #2",
    startDate: d(2026, 8, 3), endDate: d(2026, 8, 9),
    subjects: "Week 2 — Para-Clinical Power",
    focus: "Pathology (haematology, oncology) + Microbiology (culture, resistance) + Biochemistry + FMT",
    testDate: d(2026, 8, 9), testLabel: "Mock Test #2 — 200 Qs (timed)", type: "revision",
  },
  {
    id: 26, phase: "revision2", phaseLabel: "Revision #2",
    startDate: d(2026, 8, 10), endDate: d(2026, 8, 16),
    subjects: "Week 3 — Specialties Sprint",
    focus: "OBG + Paediatrics + PSM + Psychiatry + ENT + Ophthalmology (image-based Qs focus)",
    testDate: d(2026, 8, 16), testLabel: "Mock Test #3 — 200 Qs (timed)", type: "revision",
  },
  {
    id: 27, phase: "revision2", phaseLabel: "Revision #2",
    startDate: d(2026, 8, 17), endDate: d(2026, 8, 22),
    subjects: "Week 4 — Peak Performance",
    focus: "Speed drills 150 Qs/day timed · Red Flag List clearance · 2026 updates · weak subject boost",
    testDate: d(2026, 8, 22), testLabel: "Mock Test #4 — Target >75%", type: "revision",
  },

  // ── REVISION CYCLE #3 + MEGA-NEET BTR: Aug 23–28 ─────────────────────────
  {
    id: 28, phase: "revision3", phaseLabel: "Mega-BTR",
    startDate: d(2026, 8, 23), endDate: d(2026, 8, 24),
    subjects: "Mega-NEET BTR — Paper A",
    focus: "Full 200Q timed paper → subject-wise error map → pharma + clinical revision",
    type: "megabtr",
  },
  {
    id: 29, phase: "revision3", phaseLabel: "Mega-BTR",
    startDate: d(2026, 8, 25), endDate: d(2026, 8, 26),
    subjects: "Mega-NEET BTR — Paper B",
    focus: "Full 200Q paper → cross-analysis vs Paper A → para-clinical error deep dive",
    type: "megabtr",
  },
  {
    id: 30, phase: "revision3", phaseLabel: "Mega-BTR",
    startDate: d(2026, 8, 27), endDate: d(2026, 8, 28),
    subjects: "Mega-NEET BTR — Paper C (Final)",
    focus: "Full 200Q paper → 3-paper accuracy heatmap → top 100 one-liners written by hand. Target: >80%",
    type: "megabtr",
  },

  // ── FINAL COUNTDOWN: Aug 29 ────────────────────────────────────────────────
  {
    id: 31, phase: "countdown", phaseLabel: "Countdown",
    startDate: d(2026, 8, 29), endDate: d(2026, 8, 29),
    subjects: "The Quiet Day",
    focus: "One-liners only (2h max) · No new topics · Pack bag, print hall ticket · Sleep 9 PM sharp",
    type: "revision",
  },

  // ── EXAM DAY: Aug 30 ───────────────────────────────────────────────────────
  {
    id: 32, phase: "countdown", phaseLabel: "Exam",
    startDate: d(2026, 8, 30), endDate: d(2026, 8, 30),
    subjects: "EXAM DAY — INICET / NEET PG 2026",
    focus: "Wake 5 AM · Light breakfast · Reach centre 1h early · Read one-liners · Satyamev Jayate",
    type: "exam",
  },
];

export function getCoreBTREntry(date: Date): ScheduleEntry | null {
  const t = date.getTime();
  return (
    BTR_SCHEDULE.find(e => t >= e.startDate.getTime() && t <= e.endDate.getTime()) ?? null
  );
}
