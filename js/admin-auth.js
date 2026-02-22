const SUPABASE_URL = "https://wmxadphlrihwnggguwti.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_P_fbg48EZ7lXehBTbJN21Q_EsMiT9TA";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// ===== TEST LOGIN FUNCTION =====

window.testLogin = async function () {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: "Barryjamescrawford@outlook.com",
    password: "ADMIN2026"
  });

  if (error) {
    console.error("Login failed:", error.message);
  } else {
    console.log("Login successful:", data);
  }
}

console.log("Admin auth script loaded");