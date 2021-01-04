import React from "react";
import { Link } from "react-router-dom";
import styles from "../Header.module.css";

export default function Home({ changeHomeButton, btnColor }) {
  return (
    <Link
      className={`${styles.left_menu_home} ${btnColor && styles.black}`}
      onClick={() => {
        changeHomeButton();
      }}
      to="/"
    >
      <div>홈</div>
    </Link>
  );
}
