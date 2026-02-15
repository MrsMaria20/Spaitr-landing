"use client";

/** Tab IDs for the demo phone bottom nav; activeTab is passed from DemoPhone. */
export type DemoPhoneNavTab = "home" | "workouts" | "teams" | "key" | "profile";

/** Five nav items: icon (SVG) + label. Active tab gets text-primary and a red dot below icon. */
const TABS: { id: DemoPhoneNavTab; label: string; icon: React.ReactNode }[] = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "workouts",
    label: "Workouts",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path d="M6 6h2v12H6zM16 6h2v12h-2z" />
        <path d="M8 9h8M8 15h8" />
        <circle cx="5" cy="12" r="1.5" fill="currentColor" />
        <circle cx="19" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "teams",
    label: "Teams",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "key",
    label: "Key",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export interface DemoPhoneNavProps {
  activeTab: DemoPhoneNavTab;
}

/** Renders the fixed bottom nav bar: five tabs with icon + label; active tab in red with dot. */
export function DemoPhoneNav({ activeTab }: DemoPhoneNavProps) {
  return (
    <nav className="flex h-14 shrink-0 items-center justify-around border-t border-white/10 bg-bg/95 px-1 backdrop-blur">
      {TABS.map(({ id, label, icon }) => {
        const isActive = activeTab === id;
        /* Active: text-primary (red); inactive: text-text with opacity. Red dot only when active. */
        return (
          <div
            key={id}
            className="flex flex-col items-center justify-center gap-0.5 py-1"
            aria-current={isActive ? "page" : undefined}
          >
            <span
              className={`flex items-center justify-center ${isActive ? "text-primary" : "text-text opacity-80"}`}
            >
              {icon}
            </span>
            <span
              className={`text-[10px] font-medium ${isActive ? "text-primary" : "text-text opacity-80"}`}
            >
              {label}
            </span>
            {isActive && (
              <span className="h-1 w-1 rounded-full bg-primary" aria-hidden />
            )}
          </div>
        );
      })}
    </nav>
  );
}
