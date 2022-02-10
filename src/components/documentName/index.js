import React, { useState } from "react";
import styles from "./style.module.scss";

export const DocumentName = ({ file, setName }) => {
  const [value, setValue] = useState(file.name);
  const handleChange = (e) => {
    setValue(e.target.value);
    setName(e.target.value);
  };

  return (
    <article className={styles.documentName}>
      <p>{file.name}</p>
      <input type="text" value={value} onChange={handleChange}></input>
    </article>
  );
};
