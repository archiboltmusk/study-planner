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
  { time: "6:00–9:00 AM",   label: "New topic study (Marrow)" },
  { time: "9:00–10:00 AM",  label: "MCQs on yesterday's topic" },
  { time: "10:00 AM–1:00 PM", label: "New topic continues" },
  { time: "1:00–2:00 PM",   label: "Break + light review" },
  { time: "2:00–5:00 PM",   label: "New topic study" },
  { time: "5:00–6:00 PM",   label: "MCQs on today's topics" },
  { time: "6:00–8:00 PM",   label: "'World of' revision notes" },
  { time: "8:00–9:00 PM",   label: "India-specific one-liners" },
  { time: "9:00–10:00 PM",  label: "Image review (15–20 images)" },
  { time: "10:00–11:00 PM", label: "Write 5 key high-yield points" },
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
