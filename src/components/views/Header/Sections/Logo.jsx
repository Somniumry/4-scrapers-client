import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../Header.module.css";
import logoImg from "../../../../images/logo.png";

export default function Logo() {
  const history = useHistory();

  const reloadHandler = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <div className={styles.logo} onClick={reloadHandler}>
      <img src={logoImg} width="50px" alt="logo" />
    </div>
  );
}
