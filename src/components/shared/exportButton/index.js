import React from "react";
import { BiExport } from "react-icons/bi";

import { downloadFile } from "../../../helpers";
import styles from "./style.module.scss";

const ExportButton = ({ data }) => (
  <div className={styles.exportButton}>
    <BiExport onClick={() => downloadFile(data.content, data.name)} />
  </div>
);

export default ExportButton;
