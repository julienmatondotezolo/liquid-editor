import React from "react";
import { FaFileImport } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { getFileData } from "../../../helpers";
import {
  fileAtom,
  scenarioAtomFamily,
  selectedScenarioState,
} from "../../../recoil/atoms";
import styles from "./style.module.scss";

export const ImportButton = () => {
  const selectedScenarioID = useRecoilValue(selectedScenarioState);
  const setFile = useSetRecoilState(fileAtom);
  const setScenario = useSetRecoilState(scenarioAtomFamily(selectedScenarioID));

  return (
    <div className={styles.button}>
      <FaFileImport />
      <p>Import file</p>
      <input
        type="file"
        accept=".html, .liquid, .json"
        onChange={(fileData) => getFileData(fileData, setFile, setScenario)}
      />
    </div>
  );
};

export default ImportButton;
