import { jsonLanguage } from "@codemirror/lang-json";
import CodeMirror from "@uiw/react-codemirror";
import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useRecoilState, useRecoilValue } from "recoil";

import config from "../../config/config.json";
import { scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";
import { FileExtensionName } from "../fileExtensionName";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const JSONeditor = () => {
  const selectedScenarioID = useRecoilValue(selectedScenarioState);
  const [scenario, setScenario] = useRecoilState(
    scenarioAtomFamily(selectedScenarioID)
  );
  const { name, content } = scenario;

  console.log(scenario);
  // useEffect(() => {
  //   if (router.asPath !== router.route) {
  //     setPageId(parseInt(router.query.id));
  //   }
  // }, [router]);

  // const [allScenarios, setAllScenarios] = useRecoilState(
  //   scenarioAtomFamily(pageId)
  // );

  // useEffect(() => {
  //   const storageScenarios = window.localStorage.getItem(
  //     config.STORAGE.SCENARIOS
  //   );

  //   if (storageScenarios) {
  //     setScenarios(JSON.parse(storageScenarios));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(config.STORAGE.SCENARIOS, JSON.stringify(scenarios));
  // }, [scenarios]);

  // const getFileData = (event) => {
  //   const getFile = event.target.files[0];
  //   const fileExtension = getFile.name.split(".").pop();

  //   if (fileExtension == "json") {
  //     const reader = new FileReader();

  //     reader.onload = function (eventReader) {
  //       handleScenario(eventReader.target.result);
  //     };
  //     reader.readAsText(getFile);
  //   } else {
  //     alert.error("Wrong file type ! (Only .json is accepted");
  //   }
  // };

  // const helperChangeScenario = (value) =>
  //   [...scenarios].map((scenario) => {
  //     if (scenario.id === pageId) {
  //       scenario = { ...scenario, ...value };
  //     }
  //     return scenario;
  //   });

  // const handleDocumentName = (name) => {
  //   const newScenarioName = { name };
  //   const newScenarios = helperChangeScenario(newScenarioName);

  //   setScenarios(newScenarios);
  // };

  // const handleScenario = (contentValue) => {
  //   const content = JSON.parse(contentValue);
  //   const newScenarios = helperChangeScenario({ content });

  //   setScenarios(newScenarios);
  // };

  return (
    <div className={styles.editor}>
      <section className={styles.container}>
        <FileName file={name} />
        <section className={styles.buttons}>
          <ImportButton />
          <ExportButton data={scenario} />
        </section>
      </section>
      <div className={styles.editorHeader}>
        <FileExtensionName extension={"JSON"} />
      </div>
      <div className={styles.editorCode}>
        <CodeMirror
          className={styles.codeMirror}
          value={JSON.stringify(content)}
          extensions={jsonLanguage}
          onChange={(value) =>
            setScenario({
              ...scenario,
              content: JSON.parse(value),
            })
          }
        />
      </div>
    </div>
  );
};
