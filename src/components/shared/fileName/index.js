import React from "react";

import styles from "./style.module.scss";

export const FileName = ({ file, setName }) => (
  <article className={styles.documentName}>
    <p>Document name</p>
    <input
      type="text"
      value={file && file.name}
      onChange={(e) => setName(e.target.value)}
    ></input>
  </article>
);
