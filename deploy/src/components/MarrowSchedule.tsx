import { useState, useMemo } from "react";
import {
  CalendarDays, Trophy, Clock, ChevronDown, ChevronUp,
  Zap, BookOpen, Target, AlertCircle, CheckCircle2, Circle,
  Flame, Star, TrendingUp,
} from "lucide-react";
import {
  MARROW_SCHEDULE, MARROW_PHASE_LABELS, NEXT_TESTS, getTodayMarrowDay,
  type MarrowDay, type MarrowPhase,
} from "@/data/marrow-schedule";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function todayIso(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function daysUntil(iso: string): number {
  const target = new Date(iso + "T00:00:00");
  const today  = new Date(); today.setHours(0, 0, 0, 0);
  return Math.round((target.getTime() - today.getTime()) / 86400000);
}

function isPast(iso: string): boolean { return daysUntil(iso) < 0; }

const PHASE_COLORS: Record<MarrowPhase, string> = {
  1: "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-400",
  2: "from-violet-500/20 to-violet-500/5 border-violet-500/30 text-violet-400",
  3: "from-amber-500/20 to-amber-500/5 border-amber-500/30 text-amber-400",
  4: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400",
  5: "from-rose-500/20 to-rose-500/5 border-rose-500/30 text-rose-400",
};

const PHASE_BADGE: Record<MarrowPhase, string> = {
  1: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  2: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  3: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  4: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  5: "bg-rose-500/20 text-rose-400 border-rose-500/30",
};

const SUBJECT_COLORS: Record<string, string> = {
  "Anatomy":           "bg-sky-500/10 text-sky-300 border-sky-500/30",
  "Biochemistry":      "bg-teal-500/10 text-teal-300 border-teal-500/30",
  "Physiology":        "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  "Pharmacology":      "bg-violet-500/10 text-violet-300 border-violet-500/30",
  "Microbiology":      "bg-lime-500/10 text-lime-300 border-lime-500/30",
  "Pathology":         "bg-rose-500/10 text-rose-300 border-rose-500/30",
  "Community Medicine":"bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  "Forensic Medicine": "bg-neutral-500/10 text-neutral-300 border-neutral-500/30",
  "Ophthalmology":     "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
  "ENT":               "bg-purple-500/10 text-purple-300 border-purple-500/30",
  "Anaesthesia":       "bg-slate-500/10 text-slate-300 border-slate-500/30",
  "Medicine":          "bg-blue-500/10 text-blue-300 border-blue-500/30",
  "Surgery":           "bg-orange-500/10 text-orange-300 border-orange-500/30",
  "Paediatrics":       "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
  "OBG":               "bg-pink-500/10 text-pink-300 border-pink-500/30",
  "Dermatology":       "bg-amber-500/10 text-amber-300 border-amber-500/30",
  "Radiology":         "bg-gray-500/10 text-gray-300 border-gray-500/30",
  "Psychiatry":        "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30",
  "Orthopaedics":      "bg-stone-500/10 text-stone-300 border-stone-500/30",
};

function hoursLabel(h: number): string {
  const wh = Math.floor(h);
  const wm = Math.round((h - wh) * 60);
  if (wm === 0) return `${wh}h`;
  if (wh === 0) return `${wm}m`;
  return `${wh}h ${wm}m`;
}

// ─── Next Test Banner ─────────────────────────────────────────────────────────

function NextTestBanner() {
  const next = useMemo(() => {
    const today = todayIso();
    return NEXT_TESTS.find(t => t.iso >= today) ?? null;
  }, []);

  if (!next) return null;
  const d = daysUntil(next.iso);
  const isExam = next.name === "NEET-PG 2026";

  return (
    <div className={`rounded-xl border px-4 py-3 flex items-center justify-between gap-3 bg-gradient-to-r ${
      isExam
        ? "from-rose-500/20 to-rose-500/5 border-rose-500/40"
        : "from-amber-500/15 to-amber-500/5 border-amber-500/30"
    }`}>
      <div className="flex items-center gap-2 min-w-0">
        <Trophy className={`w-4 h-4 shrink-0 ${isExam ? "text-rose-400" : "text-amber-400"}`} />
        <div className="min-w-0">
          <p className={`text-xs font-mono font-bold ${isExam ? "text-rose-400" : "text-amber-400"}`}>
            Next: {next.name}
          </p>
          <p className="text-[10px] font-mono text-muted-foreground">{next.iso}</p>
        </div>
      </div>
      <div className={`shrink-0 text-right`}>
        <p className={`text-lg font-mono font-bold ${isExam ? "text-rose-400" : "text-amber-400"}`}>
          {d === 0 ? "TODAY" : d < 0 ? "DONE" : `${d}d`}
        </p>
        <p className="text-[9px] font-mono text-muted-foreground uppercase">{d === 0 ? "!" : d > 0 ? "to go" : "past"}</p>
      </div>
    </div>
  );
}

// ─── Today Card ───────────────────────────────────────────────────────────────

function TodayCard({ day, onDrill }: { day: MarrowDay; onDrill: (subject: string) => void }) {
  const ph = day.phase;

  return (
    <div className={`rounded-xl border bg-gradient-to-br p-4 ${PHASE_COLORS[ph]}`}>
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border bg-background/30 text-foreground/70">
              Today · Day {day.day}
            </span>
            <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border ${PHASE_BADGE[ph]}`}>
              {MARROW_PHASE_LABELS[ph]}
            </span>
          </div>
          <p className="text-xs font-mono text-muted-foreground mt-1">{day.label}</p>
        </div>
        <Flame className="w-5 h-5 text-orange-400 shrink-0" />
      </div>

      {day.isExamDay && (
        <div className="text-center py-4">
          <p className="text-2xl font-bold text-rose-400">🎯 NEET-PG 2026</p>
          <p className="text-sm font-mono text-rose-300 mt-1">Exam Day — You've got this!</p>
        </div>
      )}

      {day.isTest && (
        <div className="flex items-center gap-2 bg-background/30 rounded-lg px-3 py-2.5">
          <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
          <div>
            <p className="text-xs font-mono font-bold text-amber-400">{day.testName}</p>
            <p className="text-[10px] font-mono text-muted-foreground">Give your best — treat it like the real exam</p>
          </div>
        </div>
      )}

      {day.isBuffer && (
        <div className="flex items-center gap-2 bg-background/30 rounded-lg px-3 py-2.5">
          <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
          <div>
            <p className="text-xs font-mono font-bold text-emerald-400">Buffer Day — Deep review</p>
            <p className="text-[10px] font-mono text-muted-foreground">Analyse every wrong answer, revise weak areas</p>
          </div>
        </div>
      )}

      {day.isOpenRevision && !day.isExamDay && (
        <div className="flex items-center gap-2 bg-background/30 rounded-lg px-3 py-2.5">
          <TrendingUp className="w-4 h-4 text-violet-400 shrink-0" />
          <div>
            <p className="text-xs font-mono font-bold text-violet-400">Open Revision Day</p>
            <p className="text-[10px] font-mono text-muted-foreground">Revise your weakest subjects + Core BTR revision</p>
          </div>
        </div>
      )}

      {day.activities.length > 0 && (
        <div className="space-y-2">
          {day.activities.map((a, i) => (
            <div key={i} className="flex items-center justify-between bg-background/30 rounded-lg px-3 py-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className={`text-[9px] px-1.5 py-0.5 rounded border font-mono ${SUBJECT_COLORS[a.subject] ?? "bg-muted/30 text-muted-foreground border-border"}`}>
                  {a.revision ? `${a.subject} ${a.revision}` : a.subject}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">{hoursLabel(a.hours)}</span>
              </div>
              {a.drillSubject && (
                <button
                  onClick={() => onDrill(a.drillSubject!)}
                  className="flex items-center gap-1 text-[9px] font-mono px-2 py-1 rounded bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30 transition-colors shrink-0"
                >
                  <Zap className="w-3 h-3" /> Practice
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Day Row ──────────────────────────────────────────────────────────────────

function DayRow({ day, isToday, isPastDay }: { day: MarrowDay; isToday: boolean; isPastDay: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const ph = day.phase;

  const rowBg = isToday
    ? "bg-primary/10 border-primary/30"
    : isPastDay
    ? "bg-muted/20 border-border/30 opacity-60"
    : "bg-card border-border hover:bg-muted/10";

  return (
    <div className={`rounded-xl border transition-all ${rowBg}`}>
      <button
        className="w-full flex items-center gap-3 px-3 py-2.5 text-left"
        onClick={() => !day.isOpenRevision && day.activities.length > 0 && setExpanded(e => !e)}
      >
        {/* Day number */}
        <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
          isToday ? "bg-primary text-primary-foreground" : PHASE_BADGE[ph]
        }`}>
          {day.day}
        </div>

        {/* Date label */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`text-xs font-mono ${isToday ? "text-primary font-bold" : "text-foreground"}`}>
              {day.label}
            </span>
            {isToday && <span className="text-[9px] font-mono bg-primary/20 text-primary px-1.5 py-0.5 rounded-full border border-primary/30">TODAY</span>}
          </div>
          <p className="text-[10px] font-mono text-muted-foreground mt-0.5 truncate">
            {day.isExamDay ? "🎯 NEET-PG 2026 EXAM DAY"
              : day.isTest ? `🏆 ${day.testName}`
              : day.isBuffer ? "📋 Buffer — Review & Analyse"
              : day.isOpenRevision ? "🔄 Open Revision"
              : day.activities.map(a => a.revision ? `${a.subject}(${a.revision})` : a.subject).join(" + ")}
          </p>
        </div>

        {/* Hours / status */}
        <div className="shrink-0 flex items-center gap-1.5">
          {isPastDay
            ? <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            : isToday
            ? <Flame className="w-4 h-4 text-orange-400" />
            : <Circle className="w-4 h-4 text-border" />}
          {day.activities.length > 0 && !expanded && (
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          )}
          {expanded && <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" />}
        </div>
      </button>

      {expanded && day.activities.length > 0 && (
        <div className="px-3 pb-3 pt-0 space-y-1.5 border-t border-border/40">
          {day.activities.map((a, i) => (
            <div key={i} className="flex items-center justify-between text-[10px] font-mono">
              <span className={`px-1.5 py-0.5 rounded border ${SUBJECT_COLORS[a.subject] ?? "bg-muted/30 text-muted-foreground border-border"}`}>
                {a.revision ? `${a.subject} (${a.revision})` : a.subject}
              </span>
              <span className="text-muted-foreground">{hoursLabel(a.hours)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── BTR Complement Box ───────────────────────────────────────────────────────

function BTRComplementBox() {
  const today = getTodayMarrowDay();
  if (!today || today.activities.length === 0) return null;

  const subjects = [...new Set(today.activities.filter(a => a.drillSubject).map(a => a.subject))];

  const tips: Record<string, string[]> = {
    "Medicine":          ["Revise cardiology one-liners", "Solve 20 Medicine PYQs", "Check Core BTR Medicine phase"],
    "Surgery":           ["Revise surgical anatomy landmarks", "Solve 20 Surgery PYQs", "Do Surgery rapid revision"],
    "Anatomy":           ["Revise nerve injury mnemonics", "Solve 20 Anatomy PYQs", "Do Anatomy rapid revision"],
    "Biochemistry":      ["Revise metabolic pathways", "Solve 20 Biochemistry PYQs", "Do Biochemistry rapid revision"],
    "Physiology":        ["Revise normal values table", "Solve 20 Physiology PYQs", "Do Physiology rapid revision"],
    "Pharmacology":      ["Revise drug of choice list", "Solve 20 Pharmacology PYQs", "Do Pharmacology rapid revision"],
    "Microbiology":      ["Revise staining techniques", "Solve 20 Microbiology PYQs", "Do Microbiology rapid revision"],
    "Pathology":         ["Revise tumour markers", "Solve 20 Pathology PYQs", "Do Pathology rapid revision"],
    "Community Medicine":["Revise national programme stats", "Solve 20 PSM PYQs", "Do PSM rapid revision"],
    "Forensic Medicine": ["Revise medicolegal sections", "Solve 20 Forensic PYQs", "Do Forensic rapid revision"],
    "OBG":               ["Revise partogram & labour stages", "Solve 20 OBG PYQs", "Do OBG rapid revision"],
    "Paediatrics":       ["Revise developmental milestones", "Solve 20 Paediatrics PYQs", "Do Paeds rapid revision"],
    "ENT":               ["Revise ENT anatomy", "Solve 20 ENT/Ophthalmology PYQs", "Do ENT rapid revision"],
    "Ophthalmology":     ["Revise fundoscopy signs", "Solve 20 ENT/Ophthalmology PYQs", "Do Ophthalmology rapid revision"],
  };

  const allTips = subjects.flatMap(s => tips[s] ?? []);

  return (
    <div className="rounded-xl border border-violet-500/30 bg-violet-500/5 p-4">
      <div className="flex items-center gap-2 mb-3">
        <Star className="w-4 h-4 text-violet-400" />
        <p className="text-xs font-mono font-bold text-violet-400">Core BTR Boost for Today</p>
      </div>
      <p className="text-[10px] font-mono text-muted-foreground mb-2">
        Complement your Marrow session with these Core BTR actions:
      </p>
      <ul className="space-y-1.5">
        {allTips.slice(0, 4).map((tip, i) => (
          <li key={i} className="flex items-start gap-1.5 text-[10px] font-mono text-foreground/80">
            <span className="text-violet-400 shrink-0">▸</span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface Props {
  onNavigateToDrill?: (subject: string) => void;
}

export function MarrowSchedule({ onNavigateToDrill }: Props) {
  const [phaseFilter, setPhaseFilter] = useState<MarrowPhase | "all">("all");
  const today = todayIso();
  const todayDay = useMemo(() => MARROW_SCHEDULE.find(d => d.iso === today) ?? null, [today]);

  const filtered = useMemo(() => {
    if (phaseFilter === "all") return MARROW_SCHEDULE;
    return MARROW_SCHEDULE.filter(d => d.phase === phaseFilter);
  }, [phaseFilter]);

  // Progress
  const passedDays = MARROW_SCHEDULE.filter(d => d.iso < today).length;
  const totalDays  = 100;
  const pct        = Math.round((passedDays / totalDays) * 100);

  const phases: (MarrowPhase | "all")[] = ["all", 1, 2, 3, 4, 5];
  const phaseLabels: Record<string, string> = {
    all: "All", 1: "P1", 2: "P2·R2", 3: "P3·R3", 4: "P4·R4", 5: "Final",
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto space-y-4 pb-20">

      {/* Header */}
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 mb-1">
          <CalendarDays className="w-5 h-5 text-primary" />
          <h2 className="text-base font-bold text-foreground">Marrow NEET PG 2026</h2>
        </div>
        <p className="text-[11px] font-mono text-muted-foreground">
          100-day schedule · INI-CET May 16 · NEET-PG Aug 30
        </p>
      </div>

      {/* Progress bar */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-mono text-muted-foreground">Journey progress</span>
          <span className="text-[10px] font-mono text-primary font-bold">{pct}% · Day {passedDays}/{totalDays}</span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex justify-between mt-1">
          {[0, 25, 50, 75, 100].map(p => (
            <span key={p} className="text-[8px] font-mono text-muted-foreground">{p}%</span>
          ))}
        </div>
      </div>

      {/* Next test banner */}
      <div className="px-4">
        <NextTestBanner />
      </div>

      {/* Today card */}
      {todayDay && (
        <div className="px-4">
          <TodayCard
            day={todayDay}
            onDrill={(subject) => onNavigateToDrill?.(subject)}
          />
        </div>
      )}

      {/* Core BTR complement box */}
      <div className="px-4">
        <BTRComplementBox />
      </div>

      {/* Quick stats */}
      <div className="px-4 grid grid-cols-3 gap-2">
        {[
          { label: "Grand Tests", value: "4", color: "text-amber-400" },
          { label: "Revision Cycles", value: "4×", color: "text-violet-400" },
          { label: "Days Left", value: String(Math.max(0, daysUntil("2026-08-30"))), color: "text-rose-400" },
        ].map(s => (
          <div key={s.label} className="bg-card border border-border rounded-xl px-3 py-2.5 text-center">
            <p className={`text-lg font-mono font-bold ${s.color}`}>{s.value}</p>
            <p className="text-[9px] font-mono text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Phase filter */}
      <div className="px-4 flex gap-1.5 overflow-x-auto pb-1">
        {phases.map(p => (
          <button
            key={p}
            onClick={() => setPhaseFilter(p)}
            className={`shrink-0 text-[10px] font-mono px-3 py-1.5 rounded-full border transition-colors ${
              phaseFilter === p
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-muted/20 text-muted-foreground border-border hover:border-primary/40"
            }`}
          >
            {phaseLabels[String(p)]}
          </button>
        ))}
      </div>

      {/* Day list */}
      <div className="px-4 space-y-1.5">
        {filtered.map(day => (
          <DayRow
            key={day.day}
            day={day}
            isToday={day.iso === today}
            isPastDay={day.iso < today}
          />
        ))}
      </div>
    </div>
  );
}
