import React from "react";
import { FaFileExport } from "react-icons/fa";
import styles from "./style.module.scss";
import { downloadFile } from "../../helpers";

const ExportButton = ({ data }) => {
  return (
    <div className={styles.exportButton}>
      <FaFileExport />
      <button onClick={() => downloadFile(data.content, data.name)}>Export file</button>
    </div>
  );
};

export default ExportButton;
