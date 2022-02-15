import React from "react";
import { FaFileImport } from "react-icons/fa";
import styles from "./style.module.scss";

const ImportButton = ({ getFileData }) => {
  return (
    <div className={styles.button}>
      <FaFileImport />
      <p>Import file</p>
      <input type="file" accept=".html, .liquid, .json" onChange={(file) => getFileData(file)}></input>
    </div>
  );
};

export default ImportButton;
