import { jsonLanguage } from "@codemirror/lang-json";
import CodeMirror from "@uiw/react-codemirror";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";

import { FileExtensionName } from "../fileExtensionName";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const JSONeditor = () => {
  const [scenarios, setScenarios] = useState([
    { id: 0, name: "Scenario 1" },
    { id: 1, name: "Scenario 2" },
  ]);
  const alert = useAlert();

  useEffect(() => {
    setScenarios(
      JSON.parse(window.localStorage.getItem("bothive-liquid-scenario"))
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("bothive-liquid-scenario", JSON.stringify(scenarios));
  }, [scenarios]);

  const getFileData = (event) => {
    const getFile = event.target.files[0];
    const fileExtension = getFile.name.split(".").pop();

    if (fileExtension == "json") {
      const reader = new FileReader();

      reader.onload = function (eventReader) {
        setScenarios({ content: eventReader.target.result });
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

    // setScenarios({ ...scenarios, name: value });
    setScenarios(newScenarios);
  };

  const handleScenario = (content) => {
    const newScenarioContent = { content };
    const newScenarios = helperChangeScenario(scenarios, newScenarioContent);

    setScenarios(newScenarios);
  };

  return (
    <div className={styles.editor}>
      <section className={styles.container}>
        <FileName file={scenarios[0]} setName={handleDocumentName} />
        <section className={styles.buttons}>
          <ImportButton getFileData={getFileData} />
          <ExportButton data={scenarios} />
        </section>
      </section>
      <div className={styles.editorHeader}>
        <FileExtensionName extension={"JSON"} />
      </div>
      <div className={styles.editorCode}>
        <CodeMirror
          className={styles.codeMirror}
          value={scenarios && scenarios.content}
          extensions={jsonLanguage}
          onChange={(value) => handleScenario(value)}
        />
      </div>
    </div>
  );
};
