import { useState } from "react";
import { Target, Calendar, RotateCcw, CheckCircle } from "lucide-react";

interface Props {
  currentExamDate: Date;
  onSave: (date: Date) => void;
  isPostExam?: boolean;
}

export function ExamDateConfig({ currentExamDate, onSave, isPostExam = false }: Props) {
  const [inputDate, setInputDate] = useState<string>(
    currentExamDate.toISOString().slice(0, 10)
  );
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const parsed = new Date(`${inputDate}T09:00:00`);
    if (isNaN(parsed.getTime())) return;
    onSave(parsed);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (isPostExam) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="max-w-sm w-full space-y-8 text-center">
          {/* Celebration */}
          <div className="space-y-3">
            <div className="bg-emerald-500/20 p-4 rounded-2xl inline-flex mx-auto">
              <CheckCircle className="w-10 h-10 text-emerald-400" />
            </div>
            <h1 className="text-2xl font-bold font-mono uppercase tracking-wider text-primary">
              Exam Day is Here!
            </h1>
            <p className="text-sm font-mono text-muted-foreground max-w-xs mx-auto">
              Your war plan is complete. You've put in the work — now go ace it!
            </p>
          </div>

          {/* New exam date */}
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-muted-foreground" />
              <p className="text-xs font-mono uppercase text-muted-foreground">Set next exam date</p>
            </div>
            <input
              type="date"
              value={inputDate}
              min={new Date().toISOString().slice(0, 10)}
              onChange={e => setInputDate(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              onClick={handleSave}
              disabled={!inputDate}
              className="w-full py-2.5 bg-primary text-primary-foreground text-sm font-mono rounded-lg hover:opacity-90 disabled:opacity-40 transition-opacity flex items-center justify-center gap-2"
            >
              {saved ? <CheckCircle className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
              {saved ? "Saved!" : "Start new countdown"}
            </button>
          </div>

          <p className="text-[11px] font-mono text-muted-foreground/60">
            Setting a new exam date will reset the countdown timer but keep all your notes and progress.
          </p>
        </div>
      </div>
    );
  }

  // Inline settings widget (used inside the app)
  return (
    <div className="bg-card border border-border rounded-xl p-5 space-y-3">
      <div className="flex items-center gap-2">
        <Target className="w-4 h-4 text-primary" />
        <h3 className="text-xs font-mono uppercase text-muted-foreground">Exam Date</h3>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="date"
          value={inputDate}
          onChange={e => setInputDate(e.target.value)}
          className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          onClick={handleSave}
          disabled={!inputDate}
          className="px-4 py-2 bg-primary text-primary-foreground text-xs font-mono rounded-lg hover:opacity-90 disabled:opacity-40 transition-opacity flex items-center gap-1.5"
        >
          {saved ? <CheckCircle className="w-3.5 h-3.5" /> : <Calendar className="w-3.5 h-3.5" />}
          {saved ? "Saved!" : "Update"}
        </button>
      </div>
      <p className="text-[10px] font-mono text-muted-foreground">
        Current: {currentExamDate.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
      </p>
    </div>
  );
}
