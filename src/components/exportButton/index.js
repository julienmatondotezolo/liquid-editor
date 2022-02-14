import React, { useState } from "react";
import Image from "next/image";
import exportIcon from "../../assets/images/export_icon.svg";
import styles from "./style.module.scss";

const ExportButton = ({ data }) => {
  const exportData = (e) => {
    const file = new Blob([data.content], { type: "text/plain" });

    e.target.href = URL.createObjectURL(file);
  };

  return (
    <div className={styles.exportButton}>
      <Image src={exportIcon} alt="Import file" width={20} height={20} />
      <button onClick={exportData}>
        Export file
        <a href="#" download={data.name}></a>
      </button>
    </div>
  );
};

export default ExportButton;
