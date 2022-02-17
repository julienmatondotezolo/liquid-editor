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
    { id: 0, name: "Scenario 1", content: "{}" },
    { id: 1, name: "Scenario 2", content: "{}" },
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

  const helperChangeScenario = (scenarios, value) => {
    console.log("FUCKED VALUE:", value);
    return [...scenarios].map((scenario) => {
      if (scenario.id === 0) {
        scenario = { ...scenario, ...value };
      }
      return scenario;
    });
  };

  const handleDocumentName = (name) => {
    const newScenarioName = { name };
    const newScenarios = helperChangeScenario(scenarios, newScenarioName);

    setScenarios(newScenarios);
  };

  const handleScenario = (content) => {
    const parsedContent = JSON.parse(content);
    const newScenarios = helperChangeScenario(scenarios, { parsedContent });

    console.log(newScenarios);
    setScenarios(newScenarios);
  };

  return (
    <div className={styles.editor}>
      <section className={styles.container}>
        <FileName file={scenarios?.[0]} setName={handleDocumentName} />
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
          value={scenarios && JSON.stringify(scenarios[0].parsedContent)}
          extensions={jsonLanguage}
          onChange={(value) => handleScenario(value)}
        />
      </div>
    </div>
  );
};
