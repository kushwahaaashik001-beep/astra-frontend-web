import { createClient } from '@supabase/supabase-js';

// Ye variables hum Vercel ya Netlify ke environment settings mein daalenge
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Astra Error: Supabase URL or Key is missing in environment variables!");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Common Function: Database se articles fetch karne ke liye
 * Isse hum homepage aur dynamic pages dono jagah use karenge
 */
export async function getArticles(limit = 100) {
  const { data, error } = await supabase
    .from('astra_data')
    .select('*')
    .order('updated_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
  return data;
}
