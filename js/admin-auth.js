const SUPABASE_URL = "https://wmxadphlrihwnggguwti.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_P_fbg48EZ7lXehBTbJN21Q_EsMiT9TA";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

console.log("Admin auth script loaded");