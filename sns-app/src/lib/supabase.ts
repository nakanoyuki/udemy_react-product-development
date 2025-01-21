import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseApiKey = process.env.REACT_APP_SUPABASE_APIKEY;

if (!supabaseUrl || !supabaseApiKey) {
  throw new Error(
    "Missing Supabase environment variables: REACT_APP_SUPABASE_URL or REACT_APP_SUPABASE_APIKEY"
  );
}

export const supabase = createClient(supabaseUrl, supabaseApiKey);
