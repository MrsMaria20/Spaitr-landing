import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Accept either canonical values OR pretty labels coming from the UI
const ROLE_MAP = {
  athlete: "athlete",
  coach: "coach",
  parent: "parent",
  team_admin: "team_admin",
  "team admin": "team_admin",
  Athlete: "athlete",
  Coach: "coach",
  Parent: "parent",
  "Team Admin": "team_admin",
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, full_name, sport, role } = body ?? {};

    // Basic required validation
    if (!email || !full_name || !sport || !role) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }

    // Normalize inputs
    const cleanEmail = String(email).toLowerCase().trim();
    const cleanName = String(full_name).trim();
    const cleanSport = String(sport).trim();

    // Normalize role (handles "Team Admin" and "team_admin" etc.)
    const roleKey = String(role).trim();
    const roleLowerKey = roleKey.toLowerCase();
    const cleanRole = ROLE_MAP[roleKey] || ROLE_MAP[roleLowerKey];

    if (!cleanRole) {
      return Response.json({ error: "Invalid role." }, { status: 400 });
    }

    // Insert row
    const { error } = await supabase.from("beta_signups").insert([
      {
        email: cleanEmail,
        full_name: cleanName,
        sport: cleanSport,
        role: cleanRole,
      },
    ]);

    if (error) {
      const msg = (error.message || "").toLowerCase();
      const isDuplicate =
        msg.includes("duplicate") ||
        msg.includes("unique") ||
        msg.includes("already exists");

      return Response.json(
        { error: isDuplicate ? "You're already on the beta list." : (error.message || "Insert failed.") },
        { status: 400 }
      );
    }

    return Response.json({ success: true }, { status: 200 });
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}