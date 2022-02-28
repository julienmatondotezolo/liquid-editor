import React from "react";

import { useFileContext, useScenarioContext } from "../../../context/index";
import styles from "./style.module.scss";

export const FileName = ({ name }) => {
  const { file, setFile } = useFileContext();
  const { scenario, selectedScenario } = useScenarioContext();

  return (
    <article className={styles.documentName}>
      <p>Document name</p>
      {name ? (
        <input
          type="text"
          value={name}
          onChange={(event) =>
            scenario.update({ name: event.target.value }, selectedScenario)
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
