import { supabase } from "./supabase-client.js";

export async function logActivity({
  userId,
  type,
  description,
  meta_data = {}
}) {
  const { error } = await supabase
    .from("activities")
    .insert([
      {
        user_id: userId,
        type,
        description,
        meta_data
      }
    ]);

  if (error) {
    console.error("Activity log failed:", error);
  }
}