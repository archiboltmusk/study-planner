import { BTR_SCHEDULE, getCoreBTREntry } from "@/data/btr-schedule";

export interface DayEntry {
  day: number;
  phase: 'blitz' | 'revision' | 'mock';
  subject: string;
  color: string;
  focus: string;
  marrow: string;
  topics: string[];
  mcq: string;
  india: string;
  images: string;
}

export const EXAM_DATE = new Date("2026-08-30T09:00:00");

// Phases aligned with Core BTR Schedule
export const PHASES = [
  { id: "blitz",    label: "Phase 1 — First Pass (May 23–Jun 14)",       days: [1, 23],  color: "#ff4d4d" },
  { id: "revision", label: "Phase 2 — Integration Revision (Jun 15–25)", days: [24, 34], color: "#8338ec" },
  { id: "mock",     label: "Phase 3+ — R3/R4/Final (Jun 26–Aug 30)",     days: [35, 100], color: "#00e5cc" },
] as const;

export const SUBJECTS = [
  "All","Medicine","Surgery","Orthopaedics","Radiology","Microbiology","Anatomy",
  "ENT/Ophthalmology","Pathology","Pharmacology","OBG","Paediatrics",
  "PSM","Biochemistry","Forensic","Physiology","Revision","Grand Test",
];

export const DAILY_BLOCKS = [
  { time: "5:30 AM",         label: "Wake up + water + stretch" },
  { time: "6:00–8:00 AM",    label: "Deep Study Block 1 — Core BTR (1 subject, handwritten notes on iPad)" },
  { time: "8:00–8:30 AM",    label: "Breakfast (no YouTube)" },
  { time: "8:30–11:30 AM",   label: "Deep Study Block 2 — Marrow QBank (80–100 Qs, read every explanation)" },
  { time: "11:30 AM",        label: "Break + walk" },
  { time: "12:00–1:30 PM",   label: "Reflex PYQs (same topic as morning)" },
  { time: "1:30–2:30 PM",    label: "Lunch + 20 min power nap" },
  { time: "2:30–3:30 PM",    label: "Marrow supplement (see today's Marrow tab — 30–90 min, images/videos only; BTR already covers the rest)" },
  { time: "3:30–4:30 PM",    label: "Extra Reflex/BTR practice on today's subject" },
  { time: "4:30–5:00 PM",    label: "Exercise / Gym / Walk (close Apple Watch rings)" },
  { time: "5:00–7:00 PM",    label: "Rapid Revision — BTR notes + error notebook + flashcards" },
  { time: "7:00–8:00 PM",    label: "Dinner" },
  { time: "8:00–9:30 PM",    label: "Mixed MCQs — 50 Qs, random subjects" },
  { time: "9:30–9:45 PM",    label: "Review mistakes (no new study)" },
  { time: "9:45–10:15 PM",   label: "Update error notebook (Apple Notes)" },
  { time: "10:15 PM",        label: "Sleep" },
];

const PHASE_MAP: Record<string, 'blitz' | 'revision' | 'mock'> = {
  milestone: 'blitz', phase1: 'blitz', phase2: 'revision',
  phase3: 'revision', phase4: 'mock', final: 'mock',
};

const COLOR_MAP: Record<string, string> = {
  milestone: '#3b82f6', phase1: '#f97316', phase2: '#8b5cf6',
  phase3: '#10b981', phase4: '#0ea5e9', final: '#22c55e',
};

// Auto-generated from BTR_SCHEDULE — one DayEntry per calendar day May 23–Aug 30 (100 days)
export const SCHEDULE: DayEntry[] = Array.from({ length: 100 }, (_, i) => {
  const date = new Date(2026, 4, 23 + i); // May 23 = month index 4
  const entry = getCoreBTREntry(date);
  const subj = entry?.subjects ?? "Open Revision";
  const phase = entry ? PHASE_MAP[entry.phase] : 'mock';
  return {
    day: i + 1,
    phase,
    subject: subj,
    color: entry ? COLOR_MAP[entry.phase] : '#ffaa00',
    focus: entry ? `${entry.phaseLabel} — ${subj}` : subj,
    marrow: subj,
    topics: [
      `${subj} — high-yield one-liners, clinical pearls, and key definitions`,
      `${subj} — MCQ-pattern revision: past exam recalls and high-frequency topics`,
      `${subj} — applied clinical scenarios and case-based integration`,
      `${subj} — India-specific data, national guidelines, and programme targets`,
    ],
    mcq: `Reflex: ${subj} — 40 Qs (timed, strict exam mode)`,
    india: `India-specific one-liners + national programme data + statistics for ${subj}`,
    images: `Image bank: ${subj} — clinical images, radiographs, histology, and diagrams`,
  };
});
