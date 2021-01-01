import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Page Not Found.</h2>
    <h4 className={styles.message}>
      The page you're looking for does not exist or has moved.
    </h4>
    <Link className={styles.link} to="/">
      Go back home &rarr;
    </Link>
  </div>
);

export default NotFound;
