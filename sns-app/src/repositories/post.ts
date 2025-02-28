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

  async find(page: number, limit: number) {
    page = isNaN(page) || page < 1 ? 1 : page;
    const start = limit * (page - 1);
    const end = start + limit - 1;
    const { data, error } = await supabase
      .from("posts_view")
      .select("*")
      .range(start, end)
      .order("created_at", { ascending: false });
    if (error != null) throw new Error(error.message);
    return data.map((post) => {
      return {
        ...post,
        userId: post.user_id,
        userName: post.user_metadata.name,
      };
    });
  },

  async delete(id: string) {
    const { error } = await supabase.from("post").delete().eq("id", id);
    if (error != null) throw new Error(error.message);
    return true;
  },

  async signout() {
    const { error } = await supabase.auth.signOut()
    if (error != null) throw new Error(error.message);
    return true;
  },
};
