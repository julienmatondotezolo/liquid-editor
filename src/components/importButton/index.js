import React, { useState } from "react";
import Image from "next/image";
import importIcon from "../../assets/images/import_icon.svg";
import styles from "./style.module.scss";

const ImportButton = ({ getFileData }) => {
  return (
    <div className={styles.button}>
      <Image src={importIcon} alt="Import file" width={20} height={20} />
      <p>Import file</p>
      <input type="file" accept=".html .liquid" onChange={(file) => getFileData(file)}></input>
    </div>
  );
};

export default ImportButton;
