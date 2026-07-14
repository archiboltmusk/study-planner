import { Trophy, Flame, Sun, Moon, Target } from "lucide-react";
import { StudyReminderBanner, StudyReminderBell } from "@/components/StudyReminder";
import { CountdownTimer } from "@/components/CountdownTimer";
import { HeaderAuth } from "@/components/HeaderAuth";
import { SyncStatus } from "@/components/SyncStatus";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface AppHeaderProps {
  totalXP: number;
  streak: { count: number; longest: number };
  timeLeft: TimeLeft;
  isLightMode: boolean;
  onToggleTheme: () => void;
  studiedToday: boolean;
  onGoToRewards: () => void;
  examDateLabel: string;
  isPostExam: boolean;
}

export function AppHeader({
  totalXP, streak, timeLeft, isLightMode, onToggleTheme,
  studiedToday, onGoToRewards, examDateLabel, isPostExam,
}: AppHeaderProps) {
  return (
    <header
      className="sticky top-0 z-10"
      style={{
        background: 'rgba(10,14,20,0.96)',
        borderBottom: '1px solid rgba(232,169,61,0.20)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <StudyReminderBanner studiedToday={studiedToday} />

      {/* ── Row 1: Brand + action icons ────────────────────────────── */}
      <div className="px-3 sm:px-6 pt-2.5 pb-1 flex items-center justify-between gap-2">

        {/* Brand */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className="p-1.5 shrink-0"
            style={{ background: 'rgba(196,40,71,0.18)', borderRadius: '2px', border: '1px solid rgba(196,40,71,0.35)' }}
            aria-hidden="true"
          >
            <Target className="w-4 h-4" style={{ color: 'var(--crimson)' }} />
          </div>
          <div className="min-w-0">
            <h1
              className="text-sm sm:text-base font-semibold leading-none whitespace-nowrap"
              style={{ fontFamily: 'var(--app-font-display)', color: 'var(--paper)', letterSpacing: '-0.01em' }}
            >
              NEET PG War Plan
            </h1>
            <p className="text-[9px] sm:text-[10px] font-mono truncate mt-0.5" style={{ color: 'rgba(242,237,227,0.40)', letterSpacing: '0.08em' }}>
              {examDateLabel} // {isPostExam ? "POST-EXAM" : "CMD CENTER"}
            </p>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={onToggleTheme}
            className="p-1.5 transition-colors"
            style={{ color: 'rgba(242,237,227,0.40)' }}
            aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--paper)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(242,237,227,0.40)'; }}
          >
            {isLightMode
              ? <Moon className="w-3.5 h-3.5" aria-hidden="true" />
              : <Sun  className="w-3.5 h-3.5" aria-hidden="true" />}
          </button>

          <StudyReminderBell studiedToday={studiedToday} />
          <HeaderAuth />
        </div>
      </div>

      {/* ── Row 2: Countdown + XP + Streak ─────────────────────────── */}
      <div className="px-3 sm:px-6 pb-2.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 min-w-0">
          <CountdownTimer timeLeft={timeLeft} compact />
          <SyncStatus />
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onGoToRewards}
            className="flex items-center gap-1 px-2 py-0.5 transition-all font-mono text-[10px] sm:text-xs font-bold"
            title="View Rewards"
            style={{
              background: 'rgba(232,169,61,0.10)',
              border: '1px solid rgba(232,169,61,0.30)',
              color: 'var(--gold)',
              borderRadius: '2px',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(232,169,61,0.20)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(232,169,61,0.10)'; }}
          >
            <Trophy className="w-3 h-3" aria-hidden="true" />
            {totalXP.toLocaleString()} XP
          </button>

          {streak.count > 0 && (
            <div
              className="flex items-center gap-1 px-2 py-0.5 font-mono text-[10px] sm:text-xs font-bold"
              title={`${streak.count}-day streak (best: ${streak.longest})`}
              style={{
                background: 'rgba(196,40,71,0.10)',
                border: '1px solid rgba(196,40,71,0.30)',
                color: 'var(--crimson)',
                borderRadius: '2px',
              }}
            >
              <Flame className="w-3 h-3 flame" aria-hidden="true" />
              {streak.count}
              <span className="hidden sm:inline" style={{ color: 'rgba(196,40,71,0.55)' }}>
                /{streak.longest}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
