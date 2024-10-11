"use client";

import { login } from './actions';


export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h1>LOGIN</h1>
      <form className={styles.LoginForm}>
        <label htmlFor="email">Email:</label> <br />
        <input id="email" name="email" type="email" required /> <br />
        <label htmlFor="password">Password:</label> <br />
        <input id="password" name="password" type="password" required /> <br />
        <div className={styles.LSbuttons}>
          <button type="submit" formAction={login}>Log in</button>
        </div>
      </form>
    </div>
  );
}
