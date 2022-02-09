import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { htmlLanguage } from "@codemirror/lang-html";
import styles from "./style.module.scss";
import ImportButton from "../importButton";
import { Preview } from "../preview";

export const Editor = () => {
  const [file, setFile] = useState({});

  const getFileData = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      setFile({ name: e.target.files[0].name, content: event.target.result });
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <ImportButton getFileData={getFileData} />
      <div className={styles.editor}>
        <CodeMirror className={styles.codeMirror} value={file.content} extensions={htmlLanguage} />
        <Preview className={styles.codePreview} />
      </div>
    </div>
  );
};
