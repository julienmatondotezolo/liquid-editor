import { jsonLanguage } from "@codemirror/lang-json";
import CodeMirror from "@uiw/react-codemirror";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";

import config from "../../config/config.json";
import { FileExtensionName } from "../fileExtensionName";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const JSONeditor = () => {
  const [scenarios, setScenarios] = useState([
    { id: 0, name: "data.json" },
    { id: 1, name: "data-2.json" },
  ]);
  const alert = useAlert();

  useEffect(() => {
    const storageScenarios = window.localStorage.getItem(
      config.STORAGE.SCENARIOS
    );

    if (storageScenarios) {
      setScenarios(JSON.parse(storageScenarios));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(config.STORAGE.SCENARIOS, JSON.stringify(scenarios));
  }, [scenarios]);

  const getFileData = (event) => {
    const getFile = event.target.files[0];
    const fileExtension = getFile.name.split(".").pop();

    if (fileExtension == "json") {
      const reader = new FileReader();

      reader.onload = function (eventReader) {
        // setScenarios({ content: eventReader.target.result });
        handleScenario(eventReader.target.result);
      };
      reader.readAsText(getFile);
    } else {
      alert.error("Wrong file type ! (Only .json is accepted");
    }
  };

  const helperChangeScenario = (scenarios, value) =>
    [...scenarios].map((scenario) => {
      if (scenario.id === 0) {
        scenario = { ...scenario, ...value };
      }
      return scenario;
    });

  const handleDocumentName = (name) => {
    const newScenarioName = { name };
    const newScenarios = helperChangeScenario(scenarios, newScenarioName);

    setScenarios(newScenarios);
  };

  const handleScenario = (contentValue) => {
    try {
      const content = JSON.parse(contentValue);
      const newScenarios = helperChangeScenario(scenarios, { content });

      setScenarios(newScenarios);
    } catch (e) {
      alert.error("Write a valid JSON");
    }
  };

  return (
    <div className={styles.editor}>
      <section className={styles.container}>
        <FileName file={scenarios?.[0]} setName={handleDocumentName} />
        <section className={styles.buttons}>
          <ImportButton getFileData={getFileData} />
          <ExportButton data={scenarios[0]} />
        </section>
      </section>
      <div className={styles.editorHeader}>
        <FileExtensionName extension={"JSON"} />
      </div>
      <div className={styles.editorCode}>
        <CodeMirror
          className={styles.codeMirror}
          value={scenarios ? JSON.stringify(scenarios[0].content) : ""}
          extensions={jsonLanguage}
          onChange={(value) => handleScenario(value)}
        />
      </div>
    </div>
  );
};
