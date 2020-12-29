import React from "react";
import { Link } from "react-router-dom";
import styles from "../Header.module.css";

export default function Home() {
  return (
    <div className={styles.left_menu_home}>
      <Link to="/">홈</Link>
    </div>
  );
}
