import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
<<<<<<< HEAD
import { htmlLanguage } from "@codemirror/lang-html";
=======
import { html, htmlLanguage } from "@codemirror/lang-html";
import { useAlert } from "react-alert";
>>>>>>> LE-7-only-allow-html-file-upload
import styles from "./style.module.scss";
import ImportButton from "../shared/importButton";
import { Preview } from "../preview";
import { FileName } from "../shared/fileName";
import ExportButton from "../shared/exportButton";
import { FileExtensionName } from "../fileExtensionName";

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
      alert.error("Wrong file type ! (Only .html & .json or accepted ");
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
          value={file.content}
          extensions={htmlLanguage}
          onChange={(value) => setFile({ ...file, content: value })}
        />
        <Preview className={styles.codePreview} value={file.content} />
      </div>
    </div>
  );
};
