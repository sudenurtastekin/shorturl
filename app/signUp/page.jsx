import { signUp } from "@/actions/auth";
import { createClient } from "@/utils/supabase/server";
import styles from "./signUp.css";

export default function SignUPPage() {
  return (
    <div className={styles.container}>
      <h1>Kayıt Ol</h1>
      <form action={signUp}>
        <label htmlFor="firstName">Adınız:</label>
        <input id="firstName" name="firstName" type="text" required />
        
        <label htmlFor="lastName">Soyadınız:</label>
        <input id="lastName" name="lastName" type="text" required />
        
        <label htmlFor="email">E-posta:</label>
        <input id="email" name="email" type="email" required />
        
        <label htmlFor="password">Şifre:</label>
        <input id="password" name="password" type="password" required />
        
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
}
