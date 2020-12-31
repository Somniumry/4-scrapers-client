import React from "react";
import styles from "./More.module.css";

export default function More({ scrollHandler }) {
  return (
    <div
      className={styles.moreBox}
      onClick={() => {
        scrollHandler();
      }}
    >
      더보기
    </div>
  );
}
