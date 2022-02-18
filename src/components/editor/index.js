import { htmlLanguage } from "@codemirror/lang-html";
import CodeMirror from "@uiw/react-codemirror";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";

import config from "../../config/config.json";
import { FileExtensionName } from "../fileExtensionName";
import { Preview } from "../preview";
import { ScenarioPreviewPicker } from "../scenarioPreviewPicker";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const Editor = () => {
  const [file, setFile] = useState({ name: "index.html" });
  const [scenarios, setScenarios] = useState([
    {
      id: 0,
      name: "untitled-scenario.json",
      content: { name: "julien", age: 13 },
    },
    { id: 1, name: "data-2.json" },
  ]);
  const [currentScenario, setCurrentScenario] = useState(0);
  const alert = useAlert();

  useEffect(() => {
    const storageFile = window.localStorage.getItem(config.STORAGE.USER_CODE);
    const storageScenarios = window.localStorage.getItem(
      config.STORAGE.SCENARIOS
    );

    if (storageFile) {
      setFile(JSON.parse(storageFile));
    }

    if (storageScenarios) {
      setScenarios(JSON.parse(storageScenarios));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(config.STORAGE.USER_CODE, JSON.stringify(file));
    localStorage.setItem(config.STORAGE.SCENARIOS, JSON.stringify(scenarios));
  }, [file, scenarios]);

  const getFileData = (event) => {
    const getFile = event.target.files[0];
    const fileExtension = getFile.name.split(".").pop();
    const reader = new FileReader();

    reader.onload = function (eventReader) {
      setFile({
        name: event.target.files[0].name,
        content: eventReader.target.result,
      });
    };

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
        <ScenarioPreviewPicker
          scenarios={scenarios}
          setCurrentScenario={setCurrentScenario}
        />
      </div>
      <div className={styles.editorCode}>
        <CodeMirror
          className={styles.codeMirror}
          value={file ? file.content : "<h1>Write your code here...</h1>"}
          extensions={htmlLanguage}
          onChange={(value) => setFile({ ...file, content: value })}
        />
        <Preview
          className={styles.codePreview}
          scenario={currentScenario}
          value={file.content}
        />
      </div>
    </div>
  );
};
