import React, { useState } from "react";
import Image from "next/image";
import importImage from "../../../public/images/import_120260.svg";
import styles from "./style.module.scss";

const ImportButton = () => {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState("");

  const getFile = (e) => {
    setFileName(e.target.files[0].name);

    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function (event) {
      setFile(event.target.result);
    };

    reader.readAsText(file);
  };

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button}>
        <Image src={importImage} alt="Import file" width={20} height={20} />
        <p>Import file</p>
        <input type="file" accept=".html" onChange={(e) => getFile(e)}></input>
      </div>

      <p>
        Document name: <strong>{fileName}</strong>
      </p>

      <p>{file}</p>
    </div>
  );
};

export default ImportButton;
