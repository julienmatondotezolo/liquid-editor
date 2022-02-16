import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html, htmlLanguage } from "@codemirror/lang-html";
import { useAlert } from "react-alert";
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
    setFile(JSON.parse(window.localStorage.getItem("liquid-editor-code")));
  }, []);

  useEffect(() => {
    localStorage.setItem("liquid-editor-code", JSON.stringify(file));
  }, [file]);

  const getFileData = (event) => {
    const getFile = event.target.files[0];
    const fileExtension = getFile.name.split(".").pop();

    if (fileExtension == "html" || fileExtension == "liquid" || fileExtension == "json") {
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
