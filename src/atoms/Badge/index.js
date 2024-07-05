import React from "react";
import styles from "./index.module.css";

const Badge = (props) => {
    const { title } = props;
  return (
    <div className={styles.badgeWrapper}>
      <div className={styles.badgeTitle}>{title}</div>
    </div>
  );
};

export default Badge;
