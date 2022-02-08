import React, { useState } from "react";
import Image from "next/image";
import importIcon from "../../assets/images/import_icon.svg";
import styles from "./style.module.scss";

const ImportButton = ({ setFile }) => {
  const getFileData = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function (event) {
      setFile({ name: e.target.files[0].name, content: event.target.result });
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <div className={styles.button}>
        <Image src={importIcon} alt="Import file" width={20} height={20} />
        <p>Import file</p>
        <input type="file" accept=".html" onChange={(file) => getFileData(file)}></input>
      </div>
    </div>
  );
};

export default ImportButton;
