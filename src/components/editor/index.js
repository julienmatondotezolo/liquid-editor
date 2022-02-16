import { htmlLanguage } from "@codemirror/lang-html";
import CodeMirror from "@uiw/react-codemirror";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";

import { FileExtensionName } from "../fileExtensionName";
import { Preview } from "../preview";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const Editor = () => {
  const [file, setFile] = useState({ name: "index.html" });
  const alert = useAlert();

  useEffect(() => {
    setFile(JSON.parse(window.localStorage.getItem("bothive-liquid")));
  }, []);

  useEffect(() => {
    localStorage.setItem("bothive-liquid", JSON.stringify(file));
  }, [file]);

  const getFileData = (event) => {
    const getFile = event.target.files[0];
    const fileExtension = getFile.name.split(".").pop();

    if (fileExtension == "html" || fileExtension == "liquid") {
      const reader = new FileReader();

      reader.onload = function (eventReader) {
        setFile({ name: getFile.name, content: eventReader.target.result });
      };
      reader.readAsText(getFile);
    } else {
      alert.error("Wrong file type ! (Only .html & .liquid or accepted");
    }
  };

  const getDocumentName = (value) => {
    setFile({ ...file, name: value });
  };

  return (
    <div className={styles.editor}>
      <section className={styles.container}>
        <FileName file={file} setName={getDocumentName} />
        <section className={styles.buttons}>
          <ImportButton getFileData={getFileData} />
          <ExportButton data={file} />
        </section>
      </section>
      <div className={styles.editorHeader}>
        <FileExtensionName extension={"liquid"} />
        <FileExtensionName extension={"preview"} />
      </div>
      <div className={styles.editorCode}>
        <CodeMirror
          className={styles.codeMirror}
          value={file && file.content}
          extensions={htmlLanguage}
          onChange={(value) => setFile({ ...file, content: value })}
        />
        {/* <Preview className={styles.codePreview} value={file && file.content} /> */}
      </div>
    </div>
  );
};
