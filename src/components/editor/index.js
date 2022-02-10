import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { htmlLanguage } from "@codemirror/lang-html";
import styles from "./style.module.scss";
import ImportButton from "../importButton";
import { Preview } from "../preview";
import { DocumentName } from "../documentName";
import ExportButton from "../exportButton";

export const Editor = () => {
  const [file, setFile] = useState({ name: "index.html" });

  useEffect(() => {
    setFile(JSON.parse(window.localStorage.getItem("liquid-editor-code")));
  }, []);

  useEffect(() => {
    localStorage.setItem("liquid-editor-code", JSON.stringify(file));
  }, [file]);

  const getFileData = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      setFile({ name: e.target.files[0].name, content: event.target.result });
    };

    reader.readAsText(file);
  };

  const getDocumentName = (value) => {
    setFile({ ...file, name: value });
  };

  return (
    <div className={styles.editor}>
      <section className={styles.container}>
        <DocumentName file={file} setName={getDocumentName} />
        <section className={styles.buttons}>
          <ImportButton getFileData={getFileData} />
          <ExportButton data={file} />
        </section>
      </section>
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
