import React from "react";
import { FaFileImport } from "react-icons/fa";
import { useRecoilState } from "recoil";

import { getFileData } from "../../../helpers";
import { fileAtom } from "../../../recoil/atoms";
import styles from "./style.module.scss";

export const ImportButton = () => {
  const [file, setFile] = useRecoilState(fileAtom);

  return (
    <div className={styles.button}>
      <FaFileImport />
      <p>Import file</p>
      <input
        type="file"
        accept=".html, .liquid, .json"
        onChange={(fileData) => getFileData(fileData, setFile)}
      />
    </div>
  );
};

export default ImportButton;
