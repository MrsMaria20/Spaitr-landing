"use client";

/**
 * Demo phone screen content for the three Product Preview mockups.
 * - DashboardScreen: Home view (stats, teams, assignments) — scrollable.
 * - TeamsScreen: Team detail + athletes list + team code QR — scrollable.
 * - ProfileScreen: User profile with red header and info cards — fixed height.
 * Uses theme tokens (bg-primary, glass panels); reference uses white text and red accents.
 */

/** Shared card style: dark grey panels with pronounced rounded corners (reference). */
const glassCard = "rounded-2xl border border-white/10 bg-white/[0.08]";

/* ─── Inline SVG icons (no external assets) ─────────────────────────────── */
function IconBell() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
function IconUserPlus() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="23" y1="11" x2="17" y2="11" />
    </svg>
  );
}
function IconGear() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconPencil() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
function IconEnvelope() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/* ─── Phone 1: Dashboard screen ─────────────────────────────────────────── */
/** Home view: stats, Discover/Team CTAs, Your Teams list, Recent Assignments. Scrollable. */
export function DashboardScreen() {
  return (
    <div className="min-h-full pb-2">
      {/* Sticky header: title + notification/add/settings icons + greeting */}
      <div className="sticky top-0 z-10 border-b border-white/10 bg-bg/95 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-white">Dashboard</h1>
          <div className="flex items-center gap-3 text-white">
            <IconBell />
            <IconUserPlus />
            <IconGear />
          </div>
        </div>
        <p className="mt-0.5 text-sm text-white/80">Welcome back, John</p>
      </div>

      <div className="space-y-4 p-4 pt-4">
        {/* Three stat cards: large white number, label, small red icon below */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: "3", label: "ATHLETES", Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> },
            { value: "7", label: "ASSIGNMENT", Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
            { value: "11", label: "WORKOUTS", Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M6 6h2v12H6zM16 6h2v12h-2z" /><path d="M8 9h8M8 15h8" /><circle cx="5" cy="12" r="1.5" fill="currentColor" /><circle cx="19" cy="12" r="1.5" fill="currentColor" /></svg> },
          ].map((s) => (
            <div key={s.label} className={`${glassCard} flex flex-col items-center p-3.5`}>
              <span className="text-xl font-bold text-white">{s.value}</span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-white">{s.label}</span>
              <span className="mt-1.5 text-primary"><s.Icon /></span>
            </div>
          ))}
        </div>

        {/* Primary actions: Discover (dark grey), Team (bright red CTA) */}
        <div className="flex gap-2">
          <button type="button" className="flex-1 rounded-2xl border border-white/10 bg-white/[0.08] py-3 text-sm font-medium text-white">
            Discover
          </button>
          <button type="button" className="flex-1 rounded-2xl bg-primary py-3 text-sm font-medium text-white">
            Team
          </button>
        </div>

        {/* Your Teams: two team cards (The Mountain, Hello Team) with code + sport tag */}
        <div>
          <div className="mb-2 flex items-center gap-1.5">
            <span className="text-primary"><IconUsers /></span>
            <h2 className="text-sm font-semibold text-white">Your Teams</h2>
          </div>
          <div className="space-y-2.5">
            <div className={`${glassCard} flex items-center gap-3 p-3.5`}>
              <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-slate-500 to-slate-700" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">The Mountain</p>
                <p className="text-xs text-primary">4M6CRT</p>
                <span className="mt-0.5 inline-block rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium text-blue-400">Soccer</span>
              </div>
            </div>
            <div className={`${glassCard} flex items-center gap-3 p-3.5`}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                <IconUsers />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">Hello Team</p>
                <p className="text-xs text-primary">UUUUUU</p>
                <span className="mt-0.5 inline-block rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium text-blue-400">Football</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Assignments Given: list + "View All" link (red) */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">Recent Assignments Given</h2>
            <span className="text-xs font-medium text-primary">View All</span>
          </div>
          <div className={`${glassCard} space-y-2 p-3.5`}>
            {["Strength block • Due Fri", "Conditioning • Due Sat", "Recovery flow • Due Sun"].map((a, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <span className="text-sm text-white">{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Extra content so this screen scrolls */}
        <div className={`${glassCard} p-3`}>
          <p className="text-xs text-white/70">Quick actions</p>
          <div className="mt-2 flex gap-2">
            <span className="rounded-lg bg-white/10 px-2 py-1 text-[10px] text-white/80">Create workout</span>
            <span className="rounded-lg bg-white/10 px-2 py-1 text-[10px] text-white/80">Invite athlete</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Phone 2: Teams screen ─────────────────────────────────────────────── */
/** Team detail view: selector, team card with QR code, stats, Athletes list. Scrollable. */
export function TeamsScreen() {
  return (
    <div className="min-h-full pb-2">
      {/* Sticky header: title + two red icons (person-plus, plus in circle) */}
      <div className="sticky top-0 z-10 border-b border-white/10 bg-bg/95 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-white">Teams</h1>
          <div className="flex items-center gap-2 text-primary">
            <IconUserPlus />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-lg font-medium">+</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-4 pt-4">
        {/* Team selector: circular image left, team name • sport, down arrow right */}
        <div className={`${glassCard} flex items-center gap-3 rounded-2xl px-3.5 py-3`}>
          <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-slate-500 to-slate-700" />
          <span className="flex-1 text-sm text-white">The Mountain • Soccer</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-white/80">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {/* Team detail card: circular image, name, meta, red edit; Team Code (white + bold red) + red QR + red copy */}
        <div className={`${glassCard} p-4`}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-slate-500 to-slate-700" />
              <div>
                <p className="font-semibold text-white">The Mountain</p>
                <p className="text-xs text-white/80">Soccer • Youth • Male</p>
              </div>
            </div>
            <span className="text-primary"><IconPencil /></span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="text-white/90">Team Code:</span>
            <span className="font-mono font-bold text-primary">4M6CRT</span>
            <span className="ml-auto flex items-center gap-2 text-primary">
              <img
                src="/qrcode-team.png"
                alt="Team code QR code"
                width={36}
                height={36}
                className="h-9 w-9 rounded border border-white/10 bg-white object-contain"
              />
              <span aria-hidden title="Copy">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </span>
            </span>
          </div>
        </div>

        {/* Three stat cards: red icon above, then number, then label (ATHLETES, CREATED, WORKOUTS) */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: "0", label: "ATHLETES", Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> },
            { value: "Jul 2025", label: "CREATED", Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
            { value: "0", label: "WORKOUTS", Icon: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M6 6h2v12H6zM16 6h2v12h-2z" /><path d="M8 9h8M8 15h8" /><circle cx="5" cy="12" r="1.5" fill="currentColor" /><circle cx="19" cy="12" r="1.5" fill="currentColor" /></svg> },
          ].map((s) => (
            <div key={s.label} className={`${glassCard} flex flex-col items-center p-3`}>
              <span className="text-primary"><s.Icon /></span>
              <span className="mt-1 text-base font-bold text-white">{s.value}</span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-white/80">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Athletes section: heading + red Invite button with person-plus icon */}
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-white">Athletes (3)</h2>
          <button type="button" className="flex items-center gap-1.5 rounded-2xl bg-primary px-3 py-2 text-xs font-medium text-white">
            <IconUserPlus /> Invite
          </button>
        </div>

        {/* Athlete list: circular avatar (yellow-green + initial), name bold white, email smaller white */}
        <div className="space-y-2">
          {[
            { name: "John Doe", email: "john.doe@example.com", initial: "J" },
            { name: "Jane Smith", email: "jane.s@example.com", initial: "J" },
            { name: "Alex Rivera", email: "alex.r@example.com", initial: "A" },
          ].map((p) => (
            <div key={p.email} className={`${glassCard} flex items-center gap-3 p-3.5`}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-500/90 text-sm font-semibold text-white">
                {p.initial}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-white">{p.name}</p>
                <p className="truncate text-xs text-white/70">{p.email}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra content so this screen scrolls */}
        <div className={`${glassCard} p-3`}>
          <p className="text-xs text-white/70">Team settings</p>
          <p className="mt-1 text-[10px] text-subtle">Manage roster and permissions</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Phone 3: Profile screen ────────────────────────────────────────────── */
/** User profile: red header, avatar, COACH badge, completion bar, Basic/Contact cards. Fixed height. */
export function ProfileScreen() {
  return (
    <div className="min-h-full pb-2">
      {/* Red header: back, title, gear; avatar + name + COACH + email; completion bar 62% */}
      <div className="bg-primary px-4 pb-6 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-white opacity-90" aria-hidden>←</span>
          <h1 className="text-lg font-bold text-white">Profile</h1>
          <span className="text-white"><IconGear /></span>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <div className="h-16 w-16 rounded-full border-2 border-white/30 bg-white/20" />
          <p className="mt-2 text-xl font-bold text-white">John</p>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium text-primary">COACH</span>
            <span className="text-white"><IconPencil /></span>
          </div>
          <p className="mt-0.5 text-sm text-white/90">john.doe@example.com</p>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-white">
            <span>Profile Completion</span>
            <span>62%</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/30">
            <div className="h-full w-[62%] rounded-full bg-primary" />
          </div>
        </div>
      </div>

      <div className="space-y-3 px-4 pt-4">
        {/* Basic Information: red person icon, title white, red pencil; key-value pairs (white label, white value) */}
        <div className={`${glassCard} p-4`}>
          <div className="flex items-center justify-between">
            <span className="text-primary"><IconUsers /></span>
            <h2 className="text-sm font-semibold text-white">Basic Information</h2>
            <span className="text-primary"><IconPencil /></span>
          </div>
          <dl className="mt-3 space-y-2 text-xs">
            <div className="flex justify-between text-white"><dt>Name</dt><dd>John</dd></div>
            <div className="flex justify-between text-white"><dt>Date of Birth</dt><dd>2/8/2000</dd></div>
            <div className="flex justify-between text-white"><dt>Member Since</dt><dd>7/9/2025</dd></div>
          </dl>
        </div>

        {/* Contact Information: red envelope icon, title white, red pencil; Email: full address */}
        <div className={`${glassCard} p-4`}>
          <div className="flex items-center justify-between">
            <span className="text-primary"><IconEnvelope /></span>
            <h2 className="text-sm font-semibold text-white">Contact Information</h2>
            <span className="text-primary"><IconPencil /></span>
          </div>
          <p className="mt-3 text-xs text-white/90">Email john.doe@example.com</p>
        </div>
      </div>
    </div>
  );
}
