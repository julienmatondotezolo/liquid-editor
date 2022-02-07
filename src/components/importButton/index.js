import React from "react";
import Image from "next/image";
import importImage from "../../../public/images/import_120260.svg";
import styles from "./style.module.scss";

const ImportButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button}>
        <Image src={importImage} alt="Import file" width={20} height={20} />
        <p>Import file</p>
        <input type="file" accept=".html"></input>
      </div>
    </div>
  );
};

export default ImportButton;
