// Shared CoreBTR schedule data — imported by CoreBTRSchedule component and schedule.ts

export type EntryType = "grandtest" | "study" | "revision";
export type Phase = "milestone" | "phase1" | "phase2" | "phase3" | "phase4" | "final";

export interface ScheduleEntry {
  id: number;
  phase: Phase;
  phaseLabel: string;
  startDate: Date;
  endDate: Date;
  subjects: string;
  testDate?: Date;
  testLabel?: string;
  type: EntryType;
  gtNumber?: string;
}

function d(y: number, m: number, day: number) {
  return new Date(y, m - 1, day);
}

export const BTR_SCHEDULE: ScheduleEntry[] = [
  // MILESTONE
  {
    id: 1, phase: "milestone", phaseLabel: "Milestone",
    startDate: d(2026, 5, 23), endDate: d(2026, 5, 26),
    subjects: "Baseline Grand Test", type: "grandtest", gtNumber: "GT-4",
  },
  // PHASE 1
  {
    id: 2, phase: "phase1", phaseLabel: "Phase 1",
    startDate: d(2026, 5, 27), endDate: d(2026, 5, 30),
    subjects: "Surgery", testDate: d(2026, 5, 30), type: "study",
  },
  {
    id: 3, phase: "phase1", phaseLabel: "Phase 1",
    startDate: d(2026, 5, 31), endDate: d(2026, 6, 1),
    subjects: "Orthopaedics", testDate: d(2026, 6, 4), type: "study",
  },
  {
    id: 4, phase: "phase1", phaseLabel: "Phase 1",
    startDate: d(2026, 6, 2), endDate: d(2026, 6, 3),
    subjects: "Radiology", testDate: d(2026, 6, 4), type: "study",
  },
  {
    id: 5, phase: "phase1", phaseLabel: "Phase 1",
    startDate: d(2026, 6, 5), endDate: d(2026, 6, 7),
    subjects: "Microbiology", testDate: d(2026, 6, 7), type: "study",
  },
  {
    id: 6, phase: "phase1", phaseLabel: "Phase 1",
    startDate: d(2026, 6, 8), endDate: d(2026, 6, 10),
    subjects: "Anatomy", testDate: d(2026, 6, 11), type: "study",
  },
  {
    id: 7, phase: "phase1", phaseLabel: "Phase 1",
    startDate: d(2026, 6, 9), endDate: d(2026, 6, 12),
    subjects: "Core BTR GT-5", type: "grandtest", gtNumber: "GT-5",
  },
  // PHASE 2
  {
    id: 8, phase: "phase2", phaseLabel: "Phase 2",
    startDate: d(2026, 6, 13), endDate: d(2026, 6, 16),
    subjects: "CVS + Renal + Haematology + GI",
    testDate: d(2026, 6, 16), testLabel: "Integrated Systems-1 Test", type: "study",
  },
  {
    id: 9, phase: "phase2", phaseLabel: "Phase 2",
    startDate: d(2026, 6, 17), endDate: d(2026, 6, 20),
    subjects: "Neuro + Endocrine + Rheumatology + Respiratory", type: "study",
  },
  {
    id: 10, phase: "phase2", phaseLabel: "Phase 2",
    startDate: d(2026, 6, 21), endDate: d(2026, 6, 22),
    subjects: "General Pathology + Pharmacology + Physiology + Immunology",
    testDate: d(2026, 6, 23), testLabel: "Integrated Systems-2 Test", type: "study",
  },
  {
    id: 11, phase: "phase2", phaseLabel: "Phase 2",
    startDate: d(2026, 6, 21), endDate: d(2026, 6, 24),
    subjects: "Core BTR GT-6", type: "grandtest", gtNumber: "GT-6",
  },
  // PHASE 3
  {
    id: 12, phase: "phase3", phaseLabel: "Phase 3",
    startDate: d(2026, 6, 25), endDate: d(2026, 6, 28),
    subjects: "OBG", testDate: d(2026, 6, 28), type: "study",
  },
  {
    id: 13, phase: "phase3", phaseLabel: "Phase 3",
    startDate: d(2026, 6, 29), endDate: d(2026, 6, 30),
    subjects: "Paediatrics", testDate: d(2026, 7, 1), type: "study",
  },
  {
    id: 14, phase: "phase3", phaseLabel: "Phase 3",
    startDate: d(2026, 7, 2), endDate: d(2026, 7, 5),
    subjects: "PSM / Community Medicine", testDate: d(2026, 7, 5), type: "study",
  },
  {
    id: 15, phase: "phase3", phaseLabel: "Phase 3",
    startDate: d(2026, 7, 6), endDate: d(2026, 7, 7),
    subjects: "Dermatology", testDate: d(2026, 7, 10), type: "study",
  },
  {
    id: 16, phase: "phase3", phaseLabel: "Phase 3",
    startDate: d(2026, 7, 8), endDate: d(2026, 7, 9),
    subjects: "Anaesthesia", testDate: d(2026, 7, 10), type: "study",
  },
  {
    id: 17, phase: "phase3", phaseLabel: "Phase 3",
    startDate: d(2026, 7, 8), endDate: d(2026, 7, 11),
    subjects: "Core BTR GT-7", type: "grandtest", gtNumber: "GT-7",
  },
  // PHASE 4
  {
    id: 18, phase: "phase4", phaseLabel: "Phase 4",
    startDate: d(2026, 7, 12), endDate: d(2026, 7, 14),
    subjects: "Biochemistry", testDate: d(2026, 7, 15), type: "study",
  },
  {
    id: 19, phase: "phase4", phaseLabel: "Phase 4",
    startDate: d(2026, 7, 16), endDate: d(2026, 7, 17),
    subjects: "Forensic Medicine & Toxicology", testDate: d(2026, 7, 19), type: "study",
  },
  {
    id: 20, phase: "phase4", phaseLabel: "Phase 4",
    startDate: d(2026, 7, 18), endDate: d(2026, 7, 19),
    subjects: "Psychiatry", testDate: d(2026, 7, 19), type: "study",
  },
  {
    id: 21, phase: "phase4", phaseLabel: "Phase 4",
    startDate: d(2026, 7, 20), endDate: d(2026, 7, 21),
    subjects: "ENT", testDate: d(2026, 7, 25), type: "study",
  },
  {
    id: 22, phase: "phase4", phaseLabel: "Phase 4",
    startDate: d(2026, 7, 22), endDate: d(2026, 7, 24),
    subjects: "Ophthalmology", testDate: d(2026, 7, 25), type: "study",
  },
  {
    id: 23, phase: "phase4", phaseLabel: "Phase 4",
    startDate: d(2026, 7, 23), endDate: d(2026, 7, 26),
    subjects: "Core BTR GT-8", type: "grandtest", gtNumber: "GT-8",
  },
  // FINAL
  {
    id: 24, phase: "final", phaseLabel: "Final",
    startDate: d(2026, 7, 27), endDate: d(2026, 8, 22),
    subjects: "Revision Cycle #2", type: "revision",
  },
  {
    id: 25, phase: "final", phaseLabel: "Final",
    startDate: d(2026, 8, 23), endDate: d(2026, 8, 30),
    subjects: "Revision Cycle #3 — Mega-NEET BTR", type: "revision",
  },
];

export function getCoreBTREntry(date: Date): ScheduleEntry | null {
  const t = date.getTime();
  return (
    BTR_SCHEDULE.find(e => t >= e.startDate.getTime() && t <= e.endDate.getTime()) ?? null
  );
}
