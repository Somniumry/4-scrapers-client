import React from "react";
import { Link } from "react-router-dom";
import styles from "../Header.module.css";
import logoImg from "../../../../images/logo.png";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={logoImg} width="50px" alt="logo" />
      </Link>
    </div>
  );
}
