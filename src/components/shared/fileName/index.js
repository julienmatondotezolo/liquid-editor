import React from "react";

import { useFileContext } from "../../../context/index";
import styles from "./style.module.scss";

export const FileName = ({ name }) => {
  const { file, setFile } = useFileContext();

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
