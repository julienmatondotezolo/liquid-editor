import React, { useState } from "react";
import Image from "next/image";
import importImage from "../../../public/images/import_120260.svg";
import styles from "./style.module.scss";

const ImportButton = () => {
  const [file, setFile] = useState({});

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
        <Image src={importImage} alt="Import file" width={20} height={20} />
        <p>Import file</p>
        <input type="file" accept=".html" onChange={(e) => getFileData(e)}></input>
      </div>

      <p>
        Document name: <strong>{file.name}</strong>
      </p>

      <p>{file.content}</p>
    </div>
  );
};

export default ImportButton;
