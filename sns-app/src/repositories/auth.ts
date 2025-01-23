import { supabase } from "../lib/supabase";

export const authRepository = {
  async signup(name: any, email: any, password: any) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error != null) throw new Error(error.message);
    return { ...data.user, userName: data.user?.user_metadata?.name };
  },
  async signin(email: any, password: any) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error.message);
    return { ...data.user, userName: data.user?.user_metadata?.name };
  },
};
