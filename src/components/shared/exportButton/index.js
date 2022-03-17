import React from "react";
import { FaFileExport } from "react-icons/fa";

import { downloadFile } from "../../../helpers";
import styles from "./style.module.scss";

const ExportButton = ({ data }) => (
  <div className={styles.exportButton}>
    <FaFileExport onClick={() => downloadFile(data.content, data.name)} />
  </div>
);

export default ExportButton;
