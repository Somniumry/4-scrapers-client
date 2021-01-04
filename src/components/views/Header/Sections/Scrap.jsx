import React from "react";
import { Link } from "react-router-dom";
import styles from "../Header.module.css";

export default function Scrap({ LoginCompleted, renderLoginModal }) {
  return LoginCompleted ? (
    <Link className={styles.left_menu_scrap} to="/scrap">
      <div>스크랩</div>
    </Link>
  ) : (
    <div
      className={styles.left_menu_scrap}
      onClick={() => {
        renderLoginModal();
      }}
    >
      스크랩
    </div>
  );
}
