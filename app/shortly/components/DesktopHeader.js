import Logo from "@/components/svgs/logo";
import Link from "next/link";
import { createClient } from '@supabase/supabase-js';


import { signOut } from "@/actions/auth";


export default async function DesktopHeader() {
  const supabase = createClient('https://nkmvhnwulrqvvmnzfmdz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rbXZobnd1bHJxdnZtbnpmbWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2NjAsImV4cCI6MjA0MzM3ODY2MH0.57lDrq8eEdkSO_CpN-rSacX6j_cljo2_RA_tlp00Jl0');
  const { data: { user }, error } = await supabase.auth.getUser();
  return (
    <div className="desktopHeader">
      <Logo />
      <div className="desktopNav">
        <div className="nav">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
      </div>
      <div className="loginNav">
        {user ? (
          <div className="admin-header">
            <span>Hoş geldin <em><strong>{user.email}</strong></em></span>
            <form action={signOut}>
              <button type="submit" className="cikis">Çıkış Yap</button>
            </form>
          </div>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signUp">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}