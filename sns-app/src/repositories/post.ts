import { supabase } from "../lib/supabase";

export const postRepository = {
  async create(content: string, userId: string) {
    const { data, error } = await supabase
      .from("post")
      .insert([{ content, user_id: userId }])
      .select();
    if (error != null) throw new Error(error.message);
    return data[0];
  },
};
