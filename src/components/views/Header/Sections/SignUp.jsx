import React from "react";
import styles from "../Header.module.css";

export default function SignUp({ renderRegisterModal }) {
  return (
    <div
      className={styles.right_menu_signUp}
      onClick={() => {
        renderRegisterModal();
      }}
    >
      회원가입
    </div>
  );
}
