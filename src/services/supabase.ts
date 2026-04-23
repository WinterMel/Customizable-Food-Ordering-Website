import { createClient } from '@supabase/supabase-js';

// Access Supabase credentials securely via environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// We disable this client if the vars are missing, allowing the app to run visually safely 
// while waiting for proper connection setup in Phase 3.
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!supabase) {
  console.warn("Supabase credentials missing. Supabase client will be null.");
}
