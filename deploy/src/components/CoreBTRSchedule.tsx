import { useState, useMemo } from "react";
import { CalendarDays, Clock, Trophy, ChevronDown, ChevronUp, CheckCircle2, Circle, Zap, BookOpen, RotateCcw, Star, Target } from "lucide-react";
import { BTR_SCHEDULE, type ScheduleEntry, type EntryType, type Phase } from "@/data/btr-schedule";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(d: Date) {
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

function formatDateFull(d: Date) {
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function daysBetween(a: Date, b: Date) {
  return Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

function isInRange(date: Date, start: Date, end: Date) {
  return date >= start && date <= end;
}

function countdownLabel(target: Date, today: Date): string {
  const diff = daysBetween(today, target);
  if (diff < 0) return "Past";
  if (diff === 0) return "Today!";
  if (diff === 1) return "Tomorrow";
  return `${diff}d away`;
}

// ─── Styling Config ───────────────────────────────────────────────────────────

const PHASE_BORDER: Record<Phase, string> = {
  milestone: "border-blue-500",
  phase1:    "border-amber-500",
  phase2:    "border-violet-500",
  phase3:    "border-emerald-500",
  phase4:    "border-sky-500",
  revision2: "border-teal-500",
  revision3: "border-orange-500",
  countdown: "border-rose-500",
};

const PHASE_LABEL_COLOR: Record<Phase, string> = {
  milestone: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  phase1:    "bg-amber-500/20 text-amber-400 border-amber-500/30",
  phase2:    "bg-violet-500/20 text-violet-400 border-violet-500/30",
  phase3:    "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  phase4:    "bg-sky-500/20 text-sky-400 border-sky-500/30",
  revision2: "bg-teal-500/20 text-teal-400 border-teal-500/30",
  revision3: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  countdown: "bg-rose-500/20 text-rose-400 border-rose-500/30",
};

const PHASE_FILTER_OPTIONS: { value: Phase | "all" | "upcoming"; label: string }[] = [
  { value: "upcoming",  label: "Upcoming Only" },
  { value: "all",       label: "All Phases" },
  { value: "phase4",    label: "Current Block" },
  { value: "revision2", label: "Revision #2" },
  { value: "revision3", label: "Mega-BTR" },
  { value: "countdown", label: "Exam Day" },
];

// ─── Progress ─────────────────────────────────────────────────────────────────

function getStatus(entry: ScheduleEntry, today: Date): "done" | "active" | "upcoming" {
  if (today > entry.endDate) return "done";
  if (isInRange(today, entry.startDate, entry.endDate)) return "active";
  return "upcoming";
}

// ─── Next Upcoming Test ───────────────────────────────────────────────────────

function getNextTest(today: Date): { label: string; date: Date; countdown: string } | null {
  const upcoming = BTR_SCHEDULE
    .filter(e => e.testDate && e.testDate >= today)
    .sort((a, b) => a.testDate!.getTime() - b.testDate!.getTime());
  if (!upcoming.length) return null;
  const next = upcoming[0];
  return {
    label:     next.testLabel ?? `${next.subjects} Test`,
    date:      next.testDate!,
    countdown: countdownLabel(next.testDate!, today),
  };
}

function getDaysToExam(today: Date): number {
  const exam = new Date(2026, 7, 30); // Aug 30
  return daysBetween(today, exam);
}

// ─── Type Icon ────────────────────────────────────────────────────────────────

function TypeIcon({ type }: { type: EntryType }) {
  if (type === "grandtest") return <Trophy className="w-4 h-4 shrink-0" />;
  if (type === "revision")  return <RotateCcw className="w-4 h-4 shrink-0" />;
  if (type === "megabtr")   return <Star className="w-4 h-4 shrink-0" />;
  if (type === "exam")      return <Target className="w-4 h-4 shrink-0" />;
  return <BookOpen className="w-4 h-4 shrink-0" />;
}

// ─── Grand Test Row ───────────────────────────────────────────────────────────

function GrandTestRow({ entry, today }: { entry: ScheduleEntry; today: Date }) {
  const status = getStatus(entry, today);
  const isActive = status === "active";
  const isDone   = status === "done";

  return (
    <div className={`
      rounded-xl px-4 py-3 flex flex-col gap-2
      ${isDone ? "bg-blue-900/30 border border-blue-700/40" : "bg-blue-600 border border-blue-500"}
      ${isActive ? "ring-2 ring-yellow-400 ring-offset-1 ring-offset-background" : ""}
      relative overflow-hidden
    `}>
      {isDone && (
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent,transparent_6px,rgba(255,255,255,0.03)_6px,rgba(255,255,255,0.03)_12px)]" />
      )}
      <div className="flex items-center gap-3">
        <div className={`flex items-center gap-2 ${isDone ? "text-blue-400" : "text-white"}`}>
          <Trophy className="w-5 h-5 shrink-0" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider">{entry.gtNumber}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className={`font-semibold text-sm ${isDone ? "text-blue-300" : "text-white"}`}>
            {entry.subjects}
          </div>
          <div className={`text-xs font-mono mt-0.5 ${isDone ? "text-blue-400/70" : "text-blue-100"}`}>
            {formatDate(entry.startDate)} – {formatDate(entry.endDate)}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {isActive && (
            <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 text-[10px] font-mono font-bold rounded-full animate-pulse">
              ACTIVE NOW
            </span>
          )}
          {isDone && (
            <span className="flex items-center gap-1 px-2 py-0.5 bg-blue-800/60 text-blue-300 text-[10px] font-mono rounded-full">
              <CheckCircle2 className="w-3 h-3" /> Done
            </span>
          )}
        </div>
      </div>
      {entry.focus && (
        <div className={`text-[11px] font-mono leading-relaxed pl-7 ${isDone ? "text-blue-400/60" : "text-blue-100/80"}`}>
          {entry.focus}
        </div>
      )}
    </div>
  );
}

// ─── Exam Day Row ─────────────────────────────────────────────────────────────

function ExamDayRow({ entry, today }: { entry: ScheduleEntry; today: Date }) {
  const status = getStatus(entry, today);
  const isActive = status === "active";
  const daysLeft = daysBetween(today, entry.startDate);

  return (
    <div className={`
      rounded-xl border-2 border-rose-500 px-4 py-4
      ${isActive ? "bg-rose-900/40" : "bg-rose-900/20"}
      ${isActive ? "ring-2 ring-yellow-400 ring-offset-1 ring-offset-background" : ""}
    `}>
      <div className="flex items-center gap-3 mb-2">
        <Target className="w-5 h-5 text-rose-400 shrink-0" />
        <div className="flex-1">
          <div className="font-bold text-sm text-rose-200">{entry.subjects}</div>
          <div className="text-xs font-mono text-rose-400/70">{formatDate(entry.startDate)}</div>
        </div>
        {daysLeft > 0 && (
          <span className="px-3 py-1 bg-rose-500 text-white text-xs font-mono font-bold rounded-full">
            {daysLeft}d to go
          </span>
        )}
        {daysLeft <= 0 && (
          <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-mono font-bold rounded-full animate-pulse">
            TODAY!
          </span>
        )}
      </div>
      {entry.focus && (
        <div className="text-[11px] font-mono text-rose-300/80 leading-relaxed pl-8">
          {entry.focus}
        </div>
      )}
    </div>
  );
}

// ─── Study/Revision/Mega-BTR Row ──────────────────────────────────────────────

function StudyRow({ entry, today }: { entry: ScheduleEntry; today: Date }) {
  const status = getStatus(entry, today);
  const isActive = status === "active";
  const isDone   = status === "done";
  const isToday  = isInRange(today, entry.startDate, entry.endDate);

  let borderClass = PHASE_BORDER[entry.phase];
  let bgClass     = "bg-card";
  if (entry.type === "revision") { borderClass = "border-teal-500/50"; bgClass = "bg-teal-900/10"; }
  if (entry.type === "megabtr")  { borderClass = "border-orange-500/50"; bgClass = "bg-orange-900/10"; }
  const opacityClass = isDone ? "opacity-50" : "";

  return (
    <div className={`
      rounded-xl border-l-4 ${borderClass} ${bgClass} ${opacityClass}
      border border-border px-4 py-3 flex flex-col gap-2
      ${isActive ? "ring-2 ring-yellow-400 ring-offset-1 ring-offset-background" : ""}
      transition-all
    `}>
      <div className="flex items-start gap-3">
        {/* Status indicator */}
        <div className="shrink-0 mt-0.5">
          {isDone   ? <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                    : isActive
                    ? <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                    : <Circle className="w-4 h-4 text-muted-foreground/40" />}
        </div>

        {/* Date range */}
        <div className="shrink-0 w-28 text-xs font-mono text-muted-foreground pt-0.5">
          {formatDate(entry.startDate)} – {formatDate(entry.endDate)}
        </div>

        {/* Subject + icon */}
        <div className="flex-1 min-w-0 flex items-start gap-2">
          <TypeIcon type={entry.type} />
          <div className="min-w-0">
            <div className="font-medium text-sm text-foreground leading-tight">{entry.subjects}</div>
            {isToday && (
              <div className="text-[10px] font-mono text-yellow-400 mt-0.5 flex items-center gap-1">
                <Zap className="w-2.5 h-2.5" /> Active now
              </div>
            )}
          </div>
        </div>

        {/* Test date badge */}
        {entry.testDate && (
          <div className="shrink-0 flex flex-col items-end gap-1">
            <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-mono rounded-full whitespace-nowrap">
              {entry.testLabel ? entry.testLabel : `Test: ${formatDate(entry.testDate)}`}
            </span>
            {!isDone && (
              <span className="text-[10px] font-mono text-muted-foreground/60">
                {countdownLabel(entry.testDate, today)}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Focus line */}
      {entry.focus && !isDone && (
        <div className="text-[11px] font-mono text-muted-foreground/70 leading-relaxed pl-[4.5rem] pr-2">
          {entry.focus}
        </div>
      )}
    </div>
  );
}

// ─── Phase Header ─────────────────────────────────────────────────────────────

function PhaseHeader({
  phase,
  label,
  count,
  doneCount,
  collapsed,
  onToggle,
}: {
  phase: Phase;
  label: string;
  count: number;
  doneCount: number;
  collapsed: boolean;
  onToggle: () => void;
}) {
  const pct = count > 0 ? Math.round((doneCount / count) * 100) : 0;
  const colorClass = PHASE_LABEL_COLOR[phase];

  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center gap-3 py-2 px-1 group"
    >
      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${colorClass}`}>
        {label}
      </span>
      <div className="flex-1 h-px bg-border group-hover:bg-border/60 transition-colors" />
      <span className="text-[10px] font-mono text-muted-foreground shrink-0">
        {doneCount}/{count} done · {pct}%
      </span>
      {collapsed
        ? <ChevronDown className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
        : <ChevronUp   className="w-3.5 h-3.5 text-muted-foreground shrink-0" />}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function CoreBTRSchedule() {
  const today = new Date();

  // Compute which phases are fully done, collapse them by default
  const phaseOrder: Phase[] = ["milestone", "phase1", "phase2", "phase3", "phase4", "revision2", "revision3", "countdown"];

  const initialCollapsed = useMemo(() => {
    const map: Record<string, boolean> = {};
    for (const phase of phaseOrder) {
      const entries = BTR_SCHEDULE.filter(e => e.phase === phase);
      if (entries.length > 0 && entries.every(e => getStatus(e, today) === "done")) {
        map[phase] = true; // auto-collapse completed phases
      }
    }
    return map;
  }, []);

  const [phaseFilter, setPhaseFilter] = useState<Phase | "all" | "upcoming">("upcoming");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>(initialCollapsed);

  const filteredEntries = useMemo(() => {
    if (phaseFilter === "upcoming") {
      return BTR_SCHEDULE.filter(e => getStatus(e, today) !== "done");
    }
    if (phaseFilter === "all") return BTR_SCHEDULE;
    return BTR_SCHEDULE.filter(e => e.phase === phaseFilter);
  }, [phaseFilter]);

  const phases = useMemo(() => {
    const map: Record<string, ScheduleEntry[]> = {};
    for (const e of filteredEntries) {
      if (!map[e.phase]) map[e.phase] = [];
      map[e.phase].push(e);
    }
    return map;
  }, [filteredEntries]);

  const phaseLabels: Record<Phase, string> = {
    milestone: "Milestone — Baseline GT",
    phase1:    "Phase 1 — May / June",
    phase2:    "Phase 2 — Integrated Systems",
    phase3:    "Phase 3 — June / July",
    phase4:    "Phase 4 — Current Block",
    revision2: "Revision Cycle #2 — 4 Weeks",
    revision3: "Mega-NEET BTR",
    countdown: "Final Countdown → Exam",
  };

  const totalEntries = BTR_SCHEDULE.length;
  const doneEntries  = BTR_SCHEDULE.filter(e => getStatus(e, today) === "done").length;
  const activeEntry  = BTR_SCHEDULE.find(e => getStatus(e, today) === "active");
  const nextTest     = getNextTest(today);
  const daysToExam   = getDaysToExam(today);
  const overallPct   = totalEntries > 0 ? Math.round((doneEntries / totalEntries) * 100) : 0;

  const toggleCollapse = (phase: string) =>
    setCollapsed(c => ({ ...c, [phase]: !c[phase] }));

  return (
    <div className="flex flex-col gap-5">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-primary" />
            Core BTR Schedule
          </h2>
          <p className="text-sm text-muted-foreground font-mono mt-0.5">
            NEET PG 2026 · Exam: 30 Aug 2026
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {/* Exam countdown */}
          <div className={`flex items-center gap-2 px-3 py-1.5 border rounded-lg ${
            daysToExam <= 7
              ? "bg-rose-500/10 border-rose-500/30"
              : "bg-card border-border"
          }`}>
            <Target className={`w-3.5 h-3.5 ${daysToExam <= 7 ? "text-rose-400" : "text-muted-foreground"}`} />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-muted-foreground">Exam</span>
              <span className={`text-xs font-mono font-semibold ${daysToExam <= 7 ? "text-rose-400" : "text-foreground"}`}>
                {daysToExam > 0 ? `${daysToExam}d left` : daysToExam === 0 ? "TODAY!" : "Done"}
              </span>
            </div>
          </div>
          {nextTest && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-muted-foreground">Next Test</span>
                <span className="text-xs font-mono text-amber-400 font-semibold">
                  {formatDate(nextTest.date)} · {nextTest.countdown}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Overall Progress ────────────────────────────────────────────────── */}
      <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Overall Progress</span>
          <span className="text-xs font-mono text-muted-foreground">{doneEntries} / {totalEntries} blocks done</span>
        </div>
        <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${overallPct}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span>{overallPct}% complete</span>
          {activeEntry && (
            <span className="flex items-center gap-1 text-yellow-400">
              <Zap className="w-3 h-3" />
              Active: {activeEntry.subjects}
            </span>
          )}
        </div>
      </div>

      {/* ── Phase Filter ────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-1.5">
        {PHASE_FILTER_OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => setPhaseFilter(opt.value as Phase | "all" | "upcoming")}
            className={`
              px-3 py-1 rounded-full text-xs font-mono border transition-colors
              ${phaseFilter === opt.value
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-border text-muted-foreground hover:text-foreground"}
            `}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* ── Today Banner ────────────────────────────────────────────────────── */}
      {(() => {
        const todayEntry = BTR_SCHEDULE.find(e => isInRange(today, e.startDate, e.endDate));
        if (!todayEntry) return null;
        return (
          <div className="flex items-center gap-3 px-4 py-2.5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <Zap className="w-4 h-4 text-yellow-400 shrink-0 animate-pulse" />
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[10px] font-mono text-yellow-400/70 uppercase tracking-wider">Currently Active</span>
              <span className="text-sm font-semibold text-yellow-300 truncate">{todayEntry.subjects}</span>
              {todayEntry.focus && (
                <span className="text-[11px] font-mono text-yellow-300/60 leading-relaxed mt-0.5 line-clamp-2">
                  {todayEntry.focus}
                </span>
              )}
            </div>
            <span className="ml-auto text-xs font-mono text-muted-foreground shrink-0">{formatDateFull(today)}</span>
          </div>
        );
      })()}

      {/* ── Schedule Entries ────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-4">
        {phaseOrder.map(phase => {
          const entries = phases[phase];
          if (!entries || entries.length === 0) return null;

          const phaseDone = entries.filter(e => getStatus(e, today) === "done").length;
          const isCollapsed = collapsed[phase] ?? false;

          return (
            <div key={phase} className="flex flex-col gap-2">
              <PhaseHeader
                phase={phase}
                label={phaseLabels[phase]}
                count={entries.length}
                doneCount={phaseDone}
                collapsed={isCollapsed}
                onToggle={() => toggleCollapse(phase)}
              />
              {!isCollapsed && (
                <div className="flex flex-col gap-2 pl-1">
                  {entries.map(entry =>
                    entry.type === "grandtest" ? (
                      <GrandTestRow key={entry.id} entry={entry} today={today} />
                    ) : entry.type === "exam" ? (
                      <ExamDayRow key={entry.id} entry={entry} today={today} />
                    ) : (
                      <StudyRow key={entry.id} entry={entry} today={today} />
                    )
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Legend ──────────────────────────────────────────────────────────── */}
      <div className="border border-border rounded-xl p-3 bg-card">
        <p className="text-[10px] font-mono text-muted-foreground mb-2 uppercase tracking-wider">Legend</p>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: <Trophy className="w-3.5 h-3.5 text-blue-400" />,        label: "Grand Test" },
            { icon: <BookOpen className="w-3.5 h-3.5 text-foreground" />,     label: "Study Block" },
            { icon: <RotateCcw className="w-3.5 h-3.5 text-teal-400" />,      label: "Revision" },
            { icon: <Star className="w-3.5 h-3.5 text-orange-400" />,         label: "Mega-BTR" },
            { icon: <Target className="w-3.5 h-3.5 text-rose-400" />,         label: "Exam Day" },
            { icon: <Zap className="w-3.5 h-3.5 text-yellow-400" />,          label: "Active Today" },
            { icon: <CheckCircle2 className="w-3.5 h-3.5 text-muted-foreground" />, label: "Completed" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              {icon}
              <span className="text-[11px] font-mono text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
