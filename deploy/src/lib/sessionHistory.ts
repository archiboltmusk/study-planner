import { safeLoad, safeSave } from "@/lib/storage";

export interface SessionEntry {
  date: string;
  durationMin: number;
  questionsAttempted: number;
  accuracy: number;       // 0–100
  subjectsCovered: string[];
  mode: "drill" | "rapid" | "adaptive" | "standard";
}

const KEY = "neetpg_session_history";
const MAX_ENTRIES = 60;

export function recordSession(entry: SessionEntry): void {
  const existing = safeLoad<SessionEntry[]>(KEY, []);
  safeSave(KEY, [entry, ...existing].slice(0, MAX_ENTRIES));
}

export function loadSessions(): SessionEntry[] {
  return safeLoad<SessionEntry[]>(KEY, []);
}
