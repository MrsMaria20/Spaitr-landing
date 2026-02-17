"use client";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [sport, setSport] = useState("");
  const [role, setRole] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      const res = await fetch("/api/beta-signups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          full_name: fullName,
          sport,
          role, // must be: athlete | coach | parent | team_admin
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Signup failed");

      setMessage({ type: "success", text: "You're in! 🎉 We'll reach out soon." });
      setEmail("");
      setFullName("");
      setSport("");
      setRole("");
    } catch (err: any) {
      setMessage({ type: "error", text: err?.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 px-6 bg-zinc-900 dark:bg-zinc-950 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Join the Spaitr Beta</h2>
        <p className="text-zinc-300 mb-8">
          Drop your info and we’ll contact you when your beta spot opens up.
        </p>

        <form onSubmit={handleSubmit} className="text-left space-y-4">
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Email</label>
            <input
              required
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">Full name</label>
            <input
              required
              type="text"
              placeholder="Jane Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">Sport</label>
            <input
              required
              type="text"
              placeholder="Soccer"
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">Role</label>
            <select
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="" disabled>
                Select role
              </option>
              <option value="athlete">Athlete</option>
              <option value="coach">Coach</option>
              <option value="parent">Parent</option>
              <option value="team_admin">Team Admin</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-white px-6 py-3 text-zinc-900 font-medium hover:bg-zinc-100 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Request beta access"}
          </button>

          {message && (
            <p
              className={`text-sm mt-2 ${
                message.type === "success" ? "text-green-300" : "text-red-300"
              }`}
            >
              {message.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}