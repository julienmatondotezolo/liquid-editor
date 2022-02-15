import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { jsonLanguage } from "@codemirror/lang-json";
import styles from "./style.module.scss";
import ImportButton from "../shared/importButton";
import { FileName } from "../shared/fileName";
import ExportButton from "../shared/exportButton";
import { FileExtensionName } from "../fileExtensionName";

export const JSONeditor = () => {
  const [scenario, setScenario] = useState({ id: 0, name: "Scenario 1" });

  useEffect(() => {
    setScenario(JSON.parse(window.localStorage.getItem("bothive-liquid-scenario")));
  }, []);

  useEffect(() => {
    localStorage.setItem("bothive-liquid-scenario", JSON.stringify(scenario));
  }, [scenario]);

  const getFileData = (event) => {
    const getFile = event.target.files[0];
    const fileExtension = getFile.name.split(".").pop();

    if (fileExtension == "json") {
      const reader = new FileReader();
      reader.onload = function (eventReader) {
        setScenario({ content: eventReader.target.result });
      };
      reader.readAsText(getFile);
    } else {
      alert("Wrong file type");
    }
  };

  const getDocumentName = (value) => {
    setScenario({ ...scenario, name: value });
  };

  return (
    <div className={styles.editor}>
      <section className={styles.container}>
        <FileName file={scenario} setName={getDocumentName} />
        <section className={styles.buttons}>
          <ImportButton getFileData={getFileData} />
          <ExportButton data={scenario} />
        </section>
      </section>
      <div className={styles.editorHeader}>
        <FileExtensionName extension={"JSON"} />
      </div>
      <div className={styles.editorCode}>
        <CodeMirror
          className={styles.codeMirror}
          value={scenario.content}
          extensions={jsonLanguage}
          onChange={(value) => setScenario({ ...scenario, content: value })}
        />
      </div>
    </div>
  );
};
