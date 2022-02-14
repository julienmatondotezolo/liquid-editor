import React, { useState, useRef } from "react";
import Image from "next/image";
import exportIcon from "../../assets/images/export_icon.svg";
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
      <Image src={exportIcon} alt="Import file" width={20} height={20} />
      <button onClick={exportData}>
        Export file
        <a href="#" ref={anchorElement} download={data.name}></a>
      </button>
    </div>
  );
};

export default ExportButton;
