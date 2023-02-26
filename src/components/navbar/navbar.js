import React from "react";
import styles from "./navbar.module.css";

const navbar = () => {
  return (
    <header className={styles.main}>
      <div className={styles.navbarWrapper}>
        <a href="/" className={styles.logo}>
          <h2>Questions</h2>
        </a>

        <div className={styles.content}>
          <a href="/login" className={styles.login}>
            Login
          </a>
          <a href="/register" className={styles.register}>
            Register
          </a>
        </div>
      </div>
    </header>
  );
};

export default navbar;
