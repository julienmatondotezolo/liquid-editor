import React, { useState } from "react";
import styles from "./style.module.scss";

export const DocumentName = ({ name }) => {
  return (
    <article className={styles.documentName}>
      <p>Document name</p>
      <p>{name}</p>
    </article>
  );
};
