import React, { useState } from "react";
import { BiImport } from "react-icons/bi";
import { useRecoilValue, useSetRecoilState } from "recoil";

import config from "../../../config/config.json";
import { getFileData } from "../../../helpers";
import { fileAtom, scenarioAtomFamily, selectedScenarioState } from "../../../recoil/atoms";
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
      <BiImport />
      <input type="file" accept=".html, .liquid, .json" onChange={(fileData) => importFile(fileData)} />
      {result && <Notification message={result.message} code={result.code} delay={config.NOTIFICATION.DELAY} />}
    </div>
  );
};

export default ImportButton;
