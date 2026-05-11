/**
 * Storage keys — single source of truth.
 * All localStorage and Supabase column names derive from this enum.
 */
export const enum StorageKey {
  CompletedDays = "inicet_completed_days",
  Notes         = "inicet_notes",
  McqScores     = "inicet_mcq_scores",
  Flagged       = "inicet_flagged",
  SrCards       = "inicet_sr_cards",
  Streak        = "inicet_streak",
  ExamDate      = "inicet_exam_date",
  PomodoroSessions = "inicet_pomodoro_sessions",
  ChatHistory   = "inicet_chat_history",
  AiKey         = "inicet_ai_key",
}

// ─── LocalStorage helpers ────────────────────────────────────────────────────

export function safeLoad<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function safeSave(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Quota exceeded or storage blocked — notify if possible
    console.warn(`[storage] Failed to save "${key}" — storage may be full or blocked.`);
  }
}

export function safeRemove(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
}
