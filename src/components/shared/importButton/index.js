import React from "react";
import { FaFileImport } from "react-icons/fa";

import { useFileContext, useScenarioContext } from "../../../context";
import { getFileData } from "../../../helpers";
import styles from "./style.module.scss";

export const ImportButton = () => {
  const { setFile } = useFileContext();
  const { scenario, selectedScenario } = useScenarioContext();

  return (
    <div className={styles.button}>
      <FaFileImport />
      <p>Import file</p>
      <input
        type="file"
        accept=".html, .liquid, .json"
        onChange={(fileData) =>
          getFileData(fileData, setFile, scenario, selectedScenario)
        }
      />
    </div>
  );
};

export default ImportButton;
