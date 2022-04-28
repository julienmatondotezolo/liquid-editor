import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { fileAtom, scenarioAtomFamily, selectedScenarioState } from "../../../recoil/atoms";
import styles from "./style.module.scss";

export const FileName = ({ name }) => {
  const [file, setFile] = useRecoilState(fileAtom);
  const selectedScenarioID = useRecoilValue(selectedScenarioState);
  const [scenario, setScenario] = useRecoilState(scenarioAtomFamily(selectedScenarioID));

  return (
    <article className={styles.documentName}>
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
        <input type="text" value={file.name} onChange={(event) => setFile({ ...file, name: event.target.value })} />
      )}
    </article>
  );
};
