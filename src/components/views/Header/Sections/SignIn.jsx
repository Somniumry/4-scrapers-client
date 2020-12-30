import React from "react";
import styles from "../Header.module.css";

export default function SignIn({ renderLoginModal }) {
  return (
    <div
      className={styles.right_menu_signIn}
      onClick={() => {
        renderLoginModal();
      }}
    >
      로그인
    </div>
  );
}
