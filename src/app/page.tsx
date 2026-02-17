import { DemoPhonesRow } from "@/components/DemoPhonesRow";

/**
 * SPAITR landing page. Single-page layout with anchor sections for nav.
 * Uses theme tokens (bg-bg, text-text, text-muted, panel-glass, card-glass, btn-primary).
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text">

      <main id="top" className="mx-auto w-full max-w-6xl px-6">

        {/* ─── HERO: Mobile First + Experience Spaitr On The Go + phone demo ─ */}
        <section id="preview" className="relative scroll-mt-24 py-16 md:py-20">
          {/* Decorative spotlight: subtle red glow behind hero and phones. */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[55%] h-[480px] w-[min(100%,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[100px]" />
          </div>

          <div className="text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-muted">
              MOBILE FIRST
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              EXPERIENCE SPAITR
              <span className="block text-primary">ON THE GO</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
              Seamlessly manage your tasks and projects from anywhere. Your coach in your pocket.
            </p>
          </div>

          <div className="mt-14 flex justify-center">
            <DemoPhonesRow />
          </div>
        </section>

        {/* ─── OUR STORY: Built by Athletes (single glass panel) ────────────── */}
        <section id="story" className="scroll-mt-24 py-24 md:py-28">
          <div className="panel-glass p-10 text-center md:p-12">
            <h2 className="text-2xl font-semibold tracking-tight">Built by Athletes</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">
              SPAITR was born from a simple observation: talented teams were falling short not
              because they lacked skill, but because off-field work wasn’t getting done.
            </p>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
              We’ve been there. We’ve seen the potential go unrealized because athletes didn’t have
              the structure, accountability, or motivation they needed outside of practice. Traditional fitness apps weren’t built for teams,
              and coaches had no way to track what was happening when players weren’t on the field.
            </p>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
              So we built SPAITR. A platform that brings the same intensity, structure, and team
              spirit from the field into every workout. Where AI meets athletic ambition, and where
              every rep counts toward something bigger.
            </p>
            <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-6 text-sm">
              <div className="rounded-full border border-white/20 bg-white/5 px-4 py-2.5 ring-1 ring-primary/20 transition-all duration-300 hover:ring-primary/40 hover:shadow-[0_0_40px_-8px_rgba(229,56,59,0.2)]">
                <span className="font-semibold text-primary">Passion</span>
                <p className="mt-1 text-muted">Built by athletes who understand the grind</p>
              </div>
              <div className="rounded-full border border-white/20 bg-white/5 px-4 py-2.5 ring-1 ring-primary/20 transition-all duration-300 hover:ring-primary/40 hover:shadow-[0_0_40px_-8px_rgba(229,56,59,0.2)]">
                <span className="font-semibold text-primary">Purpose</span>
                <p className="mt-1 text-muted">Helping teams reach their full potential</p>
              </div>
              <div className="rounded-full border border-white/20 bg-white/5 px-4 py-2.5 ring-1 ring-primary/20 transition-all duration-300 hover:ring-primary/40 hover:shadow-[0_0_40px_-8px_rgba(229,56,59,0.2)]">
                <span className="font-semibold text-primary">People</span>
                <p className="mt-1 text-muted">Community-driven, team-focused approach</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── EVERYTHING YOU NEED TO WIN: Feature cards ──────────────────── */}
        <section id="how" className="scroll-mt-24 py-24 md:py-28">
          <div className="rounded-3xl bg-white/40 p-8 dark:bg-white/5 md:p-10">
            <h2 className="text-center text-2xl font-semibold tracking-tight">Everything You Need To Win</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
              Stay accountable. Train smarter. Unlock your full potential.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Workout Tracking",
                  desc: "Log and complete structured workouts for both individuals and teams. Track every rep, set, and milestone with precision.",
                },
                {
                  title: "AI Coach",
                  desc: "Get instant, personalized training plans tailored to your goals and history. Your AI coach adapts as you improve.",
                },
                {
                  title: "Coach & Team Tools",
                  desc: "Assign workouts, track completion, and monitor progress with ease. Keep your entire team synchronized and accountable.",
                },
                {
                  title: "Notifications & Reminders",
                  desc: "Stay on top of upcoming or overdue workouts with real-time alerts. Never miss a training session again.",
                },
                {
                  title: "Switch Roles",
                  desc: "Toggle between athlete and coach views for flexibility. One platform for everyone on your team.",
                },
                {
                  title: "Performance Analytics",
                  desc: "Visualize your progress with detailed charts and insights. Understand your strengths and areas for improvement.",
                },
              ].map((item) => (
                <div key={item.title} className="card-glass p-10 ring-1 ring-primary/20 transition-all duration-300 hover:ring-primary/40 hover:shadow-[0_0_40px_-8px_rgba(229,56,59,0.2)]">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY SPAITR: 2-column — left copy + bullets, right stats panel ─── */}
        <section id="proof" className="scroll-mt-24 py-24 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: badge, headline, paragraph, 3 bullet features with red icon blocks */}
            <div>
              <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-muted">
                THE DIFFERENCE
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                WHY SPAITR?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-muted">
                Most fitness apps focus on solo training. SPAITR is built for teams who need structure
                off the field. With AI-driven workouts, real-time progress tracking, and coach-to-athlete
                accountability, preparation becomes easy and effective.
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  { title: "Team-First Approach", desc: "Designed specifically for teams, not individuals. Keep everyone accountable and moving toward the same goals." },
                  { title: "Data-Driven Progress", desc: "Track improvements over time with detailed analytics. See what's working and what needs adjustment." },
                  { title: "Built for Athletes", desc: "Created by people who understand the demands of competitive sports and team dynamics." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary ring-1 ring-primary/30">
                      <span className="text-lg font-bold leading-none">✓</span>
                    </span>
                    <div>
                      <h3 className="font-semibold text-text">{item.title}</h3>
                      <p className="mt-1 leading-6 text-muted">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: stats panel — 3 stacked progress bars, red fill, red outline/glow */}
            <div className="panel-glass relative overflow-hidden p-8 md:p-10 ring-1 ring-primary/20 transition-all duration-300 hover:ring-primary/40 hover:shadow-[0_0_40px_-8px_rgba(229,56,59,0.2)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" aria-hidden />
              <div className="relative space-y-6">
                <h3 className="text-lg font-semibold tracking-tight text-text">Game Changer</h3>
                {[
                  { label: "Team Completion Rate", value: 94 },
                  { label: "Workout Adherence", value: 87 },
                  { label: "Coach Satisfaction", value: 99 },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">{stat.label}</span>
                      <span className="font-semibold text-primary">{stat.value}%</span>
                    </div>
                    <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${stat.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── JOIN BETA: Lead capture form ───────────────────────────────── */}
        <section id="beta" className="scroll-mt-24 py-24 md:py-28">
          <div className="panel-glass p-10 md:p-12">
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight">Ready to Transform Your Training?</h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                Be among the first to experience the future of team training. Limited beta spots available.
              </p>
            </div>

            <form className="mt-8 grid gap-4 md:grid-cols-2">
              <input
                className="h-12 rounded-xl border border-border bg-transparent px-4 text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Full Name"
              />
              <input
                className="h-12 rounded-xl border border-border bg-transparent px-4 text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Email Address"
                type="email"
              />
              <input
                className="h-12 rounded-xl border border-border bg-transparent px-4 text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Sport"
              />
              <select
                className="h-12 rounded-xl border border-border bg-transparent px-4 text-text outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                defaultValue=""
              >
                <option value="" disabled>Role</option>
                <option value="athlete">Athlete</option>
                <option value="coach">Coach</option>
                <option value="parent">Parent</option>
                <option value="team-admin">Team Admin</option>
              </select>

              <div className="md:col-span-2">
                <button type="button" className="btn-primary mt-2 w-full">
                  Request Beta Access
                </button>
                <p className="mt-3 text-xs text-subtle">
              
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* ─── FOOTER: Copyright ───────────────────────────────────────────── */}
        <footer className="py-12 text-sm text-subtle">
          <div className="border-t border-border pt-8">
            © {new Date().getFullYear()} SPAITR. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}