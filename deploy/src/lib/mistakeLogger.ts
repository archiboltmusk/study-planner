import { safeLoad, safeSave } from "@/lib/storage";
import { supabase } from "@/lib/supabase";

export interface AutoMistake {
  subject: string;
  question: string;
  correctAnswer: string;
  myAnswer: string;
  explanation: string;
}

export const MISTAKE_STORAGE_KEY = "neetpg_mistake_logbook";

export interface StoredEntry {
  id: string;
  date: string;
  subject: string;
  topic: string;
  question: string;
  correctAnswer: string;
  myAnswer: string;
  whyWrong: string;
  reviewed: boolean;
  source?: "auto" | "manual";
}

interface LoggerCtx {
  userId: string;
  isPremium: boolean;
}

let _ctx: LoggerCtx | null = null;

export function setMistakeLoggerCtx(ctx: LoggerCtx | null): void {
  _ctx = ctx;
}

export function autoLogMistakes(mistakes: AutoMistake[]): void {
  if (mistakes.length === 0) return;

  const now = new Date().toISOString();
  const newEntries: StoredEntry[] = mistakes.map((m, i) => ({
    id: "auto-" + Date.now() + "-" + i,
    date: now,
    subject: m.subject,
    topic: m.subject,
    question: m.question.slice(0, 220),
    correctAnswer: m.correctAnswer,
    myAnswer: m.myAnswer,
    whyWrong: m.explanation.slice(0, 320),
    reviewed: false,
    source: "auto" as const,
  }));

  // Always write to localStorage (serves as offline cache / free-tier store)
  const existing = safeLoad<StoredEntry[]>(MISTAKE_STORAGE_KEY, []);
  safeSave(MISTAKE_STORAGE_KEY, [...newEntries, ...existing]);
  window.dispatchEvent(new CustomEvent("mistakeLogUpdate"));

  // Premium: also persist to Supabase — realtime subscription in MistakeLogbook
  // will pick up the INSERT and update the UI instantly
  if (_ctx?.isPremium) {
    const rows = newEntries.map(e => ({
      id: e.id,
      user_id: _ctx!.userId,
      created_at: e.date,
      subject: e.subject,
      topic: e.topic,
      question: e.question,
      correct_answer: e.correctAnswer,
      my_answer: e.myAnswer,
      why_wrong: e.whyWrong,
      reviewed: false,
      source: "auto",
    }));
    supabase.from("mistake_logbook").insert(rows);
  }
}
