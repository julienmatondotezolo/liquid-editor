import React from "react";

import styles from "./style.module.scss";

export default function Tab({ name, active }) {
  return (
    <div className={`${styles.tab} ${active && styles.active}`}>
      <p>{name}</p>
    </div>
  );
}
