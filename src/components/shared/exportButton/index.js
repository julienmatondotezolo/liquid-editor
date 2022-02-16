import React, { useRef } from "react";
import { FaFileExport } from "react-icons/fa";

import styles from "./style.module.scss";

const ExportButton = ({ data }) => {
  const anchorElement = useRef();
  const exportData = () => {
    const file = new Blob([data.content], { type: "text/plain" });

    anchorElement.current.href = URL.createObjectURL(file);
    anchorElement.current.click();
  };

  return (
    <div className={styles.exportButton}>
      <FaFileExport />
      <button onClick={exportData}>
        Export file
        <a href="" ref={anchorElement} download={data.name}></a>
      </button>
    </div>
  );
};

export default ExportButton;
