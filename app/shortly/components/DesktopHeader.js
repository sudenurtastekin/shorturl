import Logo from "@/components/svgs/logo";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/actions/auth";
export default async function DesktopHeader() {
  const supabase = createClient();
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