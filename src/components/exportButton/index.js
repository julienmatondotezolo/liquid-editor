import React, { useState } from "react";
import Image from "next/image";
import exportIcon from "../../assets/images/export_icon.svg";
import styles from "./style.module.scss";

const ExportButton = ({ data }) => {
  const exportData = () => {
    const element = document.createElement("a");
    const file = new Blob([data.content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = data.name;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    // https://thewebdev.info/2021/11/20/how-to-download-a-string-as-txt-file-in-react/
  };

  return (
    <div className={styles.button} onClick={exportData}>
      <Image src={exportIcon} alt="Import file" width={20} height={20} />
      <p>Export file</p>
    </div>
  );
};

export default ExportButton;
