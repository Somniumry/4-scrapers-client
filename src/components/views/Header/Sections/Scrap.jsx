import React from "react";
import { Link } from "react-router-dom";
import styles from "../Header.module.css";

export default function Scrap() {
  return (
    <div className={styles.left_menu_scrap}>
      <Link to="/scrap">스크랩</Link>
    </div>
  );
}
