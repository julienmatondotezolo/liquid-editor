import React, { useState } from "react";
import { FaFileImport } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { getFileData } from "../../../helpers";
import {
  fileAtom,
  scenarioAtomFamily,
  selectedScenarioState,
} from "../../../recoil/atoms";
import { Notification } from "../../shared/notification";
import styles from "./style.module.scss";

export const ImportButton = ({ type }) => {
  const selectedScenarioID = useRecoilValue(selectedScenarioState);
  const setFile = useSetRecoilState(fileAtom);
  const setScenario = useSetRecoilState(scenarioAtomFamily(selectedScenarioID));
  const [result, setResult] = useState(null);

  const importFile = (fileData) => {
    setResult(getFileData(fileData, setFile, setScenario, type));
  };

  return (
    <div className={styles.button}>
      <FaFileImport />
      <p>Import file</p>
      <input
        type="file"
        accept=".html, .liquid, .json"
        onChange={(fileData) => importFile(fileData)}
      />
      {result && (
        <Notification
          message={result.message}
          code={result.code}
          delay="5000"
        />
      )}
    </div>
  );
};

export default ImportButton;
