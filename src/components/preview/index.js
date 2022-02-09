import React from "react";
import styles from "./style.module.scss";

export const Preview = ({ value }) => {
  return (
    <div className={styles.preview}>
      <article>
        <p>{value}</p>
      </article>
    </div>
  );
};
