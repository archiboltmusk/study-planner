import { useRef, type ChangeEvent } from "react";
import { Download, Upload, Search, ExternalLink } from "lucide-react";
import { NAV_GROUPS, type NavGroup, type MainTab } from "@/lib/nav-config";

interface AppNavProps {
  activeGroup: NavGroup;
  activeTab: MainTab;
  flagBadge?: number;
  completedCount: number;
  totalDays: number;
  onGroupClick: (id: NavGroup) => void;
  onTabClick: (id: MainTab) => void;
  onExport: () => void;
  onImport: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchOpen: () => void;
}

export function AppNav({
  activeGroup, activeTab, flagBadge, completedCount, totalDays,
  onGroupClick, onTabClick, onExport, onImport, onSearchOpen,
}: AppNavProps) {
  const importRef = useRef<HTMLInputElement>(null);
  const activeGroupData = NAV_GROUPS.find(g => g.id === activeGroup) ?? NAV_GROUPS[0];
  const showSubNav = activeGroupData.tabs.length > 1;

  return (
    <div
      className="shrink-0 border-b"
      style={{
        background: 'rgba(10,14,20,0.92)',
        borderColor: 'rgba(232,169,61,0.25)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="px-4 md:px-6 py-2 flex items-center justify-between gap-3">

        {/* Logo mark */}
        <span
          className="hidden sm:block text-xs font-mono font-semibold shrink-0 tracking-widest uppercase"
          style={{ color: 'var(--gold)', letterSpacing: '0.18em' }}
        >
          <span className="aspirant-pulse inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle" style={{ background: 'var(--crimson)' }} />
          INICET
        </span>

        <nav
          className="flex gap-0.5 overflow-x-auto no-scrollbar"
          aria-label="Navigation groups"
        >
          {NAV_GROUPS.map(({ id, label, Icon }) => {
            const isActive = activeGroup === id;
            const hasBadge = id === 'practice' && flagBadge;
            return (
              <button
                key={id}
                onClick={() => onGroupClick(id)}
                className="relative flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium uppercase tracking-wider transition-all"
                style={{
                  color: isActive ? 'var(--paper)' : 'rgba(242,237,227,0.45)',
                  background: isActive ? 'rgba(196,40,71,0.18)' : 'transparent',
                  borderBottom: isActive ? '2px solid var(--crimson)' : '2px solid transparent',
                  letterSpacing: '0.1em',
                }}
                aria-pressed={isActive}
                onMouseEnter={e => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(242,237,227,0.80)';
                }}
                onMouseLeave={e => {
                  if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(242,237,227,0.45)';
                }}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">{label}</span>
                {hasBadge && (
                  <span
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-[9px] font-mono flex items-center justify-center"
                    style={{ background: 'var(--crimson)' }}
                    aria-label={`${flagBadge} flagged`}
                  >
                    {flagBadge > 99 ? '99' : flagBadge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          {/* Progress */}
          <span className="text-[10px] font-mono hidden sm:block" style={{ color: 'rgba(232,169,61,0.7)', letterSpacing: '0.08em' }}>
            {completedCount}/{totalDays}
          </span>
          <div
            className="h-1.5 w-20 sm:w-28 rounded-none overflow-hidden hidden sm:block"
            role="progressbar"
            aria-valuenow={completedCount}
            aria-valuemin={0}
            aria-valuemax={totalDays}
            aria-label={`Study progress: ${completedCount} of ${totalDays} days`}
            style={{ background: 'rgba(242,237,227,0.08)', borderRadius: '1px' }}
          >
            <div
              className="h-full transition-all duration-500 ease-out"
              style={{
                width: `${(completedCount / totalDays) * 100}%`,
                background: 'linear-gradient(90deg, var(--crimson), var(--gold))',
              }}
            />
          </div>

          {/* Earning Chart link */}
          <a
            href="/earning-chart.html"
            target="_blank"
            rel="noopener noreferrer"
            title="The Earning Chart — Life After MBBS"
            className="hidden sm:flex items-center gap-1 text-[10px] font-mono font-semibold uppercase tracking-widest px-2.5 py-1 transition-all"
            style={{
              background: 'rgba(232,169,61,0.10)',
              color: 'var(--gold)',
              border: '1px solid rgba(232,169,61,0.30)',
              borderRadius: '2px',
              letterSpacing: '0.14em',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(232,169,61,0.22)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(232,169,61,0.10)'; }}
          >
            <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
            ₹ Chart
          </a>

          {/* Aspirant link */}
          <a
            href="/perfect-aspirant.html"
            target="_blank"
            rel="noopener noreferrer"
            title="The Perfect Aspirant — revision queue & readiness engine"
            className="hidden sm:flex items-center gap-1 text-[10px] font-mono font-semibold uppercase tracking-widest px-2.5 py-1 transition-all"
            style={{
              background: 'rgba(196,40,71,0.15)',
              color: 'var(--crimson)',
              border: '1px solid rgba(196,40,71,0.35)',
              borderRadius: '2px',
              letterSpacing: '0.14em',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(196,40,71,0.28)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(196,40,71,0.15)'; }}
          >
            <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
            Aspirant
          </a>

          {/* Action icons */}
          <button
            onClick={onSearchOpen}
            title="Search / Command palette (Ctrl+K)"
            className="p-1.5 transition-colors"
            style={{ color: 'rgba(242,237,227,0.45)' }}
            aria-label="Open command palette"
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--paper)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(242,237,227,0.45)'; }}
          >
            <Search className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <input
            ref={importRef}
            type="file"
            accept=".json"
            className="hidden"
            onChange={onImport}
            aria-hidden="true"
          />
          <button
            onClick={onExport}
            title="Export backup"
            className="p-1.5 transition-colors"
            style={{ color: 'rgba(242,237,227,0.45)' }}
            aria-label="Export progress backup"
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--paper)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(242,237,227,0.45)'; }}
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <button
            onClick={() => importRef.current?.click()}
            title="Import backup"
            className="p-1.5 transition-colors"
            style={{ color: 'rgba(242,237,227,0.45)' }}
            aria-label="Import progress backup"
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--paper)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(242,237,227,0.45)'; }}
          >
            <Upload className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {showSubNav && (
        <div
          className="px-4 md:px-6 pb-0"
          style={{ borderTop: '1px solid rgba(242,237,227,0.06)' }}
        >
          <div
            className="flex gap-0 overflow-x-auto no-scrollbar"
            role="tablist"
            aria-label={`${activeGroupData.label} sections`}
          >
            {activeGroupData.tabs.map(({ id, label, Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onTabClick(id)}
                  className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 text-[10px] font-mono font-medium uppercase tracking-widest transition-all"
                  style={{
                    color: isActive ? 'var(--gold)' : 'rgba(242,237,227,0.40)',
                    borderBottom: isActive ? '2px solid var(--gold)' : '2px solid transparent',
                    letterSpacing: '0.12em',
                    background: 'transparent',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(242,237,227,0.70)';
                  }}
                  onMouseLeave={e => {
                    if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(242,237,227,0.40)';
                  }}
                >
                  <Icon className="w-3 h-3" aria-hidden="true" />
                  {label}
                  {id === 'revision' && flagBadge ? (
                    <span
                      className="w-4 h-4 text-white text-[9px] font-mono flex items-center justify-center"
                      style={{ background: 'var(--crimson)', borderRadius: '2px' }}
                    >
                      {flagBadge}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
