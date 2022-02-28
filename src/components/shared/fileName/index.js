import React from "react";

import { useFile } from "../../../context/ index";
import styles from "./style.module.scss";

export const FileName = ({ name }) => {
  const { file, setFile } = useFile();

  return (
    <article className={styles.documentName}>
      <p>Document name</p>
      {name ? (
        <input
          type="text"
          value={name}
          onChange={(event) =>
            setScenario({
              ...scenario,
              name: event.target.value,
            })
          }
        />
      ) : (
        <input
          type="text"
          value={file.name}
          onChange={(event) => setFile({ ...file, name: event.target.value })}
        />
      )}
    </article>
  );
};
