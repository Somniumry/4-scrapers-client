import React from "react";
import styles from "../Header.module.css";

export default function UserInfo({ renderUserInfoModal }) {
  return (
    <div
      className={styles.right_menu_signUp}
      onClick={() => {
        renderUserInfoModal();
      }}
    >
      유저정보
    </div>
  );
}
