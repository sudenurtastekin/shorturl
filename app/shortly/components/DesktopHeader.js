import Logo from "@/components/svgs/logo";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/actions/auth";
export default async function DesktopHeader() {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
