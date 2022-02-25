import { jsonLanguage } from "@codemirror/lang-json";
import CodeMirror from "@uiw/react-codemirror";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useRecoilState } from "recoil";

import config from "../../config/config.json";
import { scenarioAtomFamily } from "../../recoil/atoms";
import { FileExtensionName } from "../fileExtensionName";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const JSONeditor = () => {
  const [pageId, setPageId] = useState(0);
  const [scenarios, setScenarios] = useState([]);

  const alert = useAlert();
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== router.route) {
      setPageId(parseInt(router.query.id));
    }
  }, [router]);

  const [allScenarios, setAllScenarios] = useRecoilState(
    scenarioAtomFamily(pageId)
  );

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

  const getFileData = (event) => {
    const getFile = event.target.files[0];
    const fileExtension = getFile.name.split(".").pop();

    if (fileExtension == "json") {
      const reader = new FileReader();

      reader.onload = function (eventReader) {
        handleScenario(eventReader.target.result);
      };
      reader.readAsText(getFile);
    } else {
      alert.error("Wrong file type ! (Only .json is accepted");
    }
  };

  const helperChangeScenario = (value) =>
    [...scenarios].map((scenario) => {
      if (scenario.id === pageId) {
        scenario = { ...scenario, ...value };
      }
      return scenario;
    });

  const handleDocumentName = (name) => {
    const newScenarioName = { name };
    const newScenarios = helperChangeScenario(newScenarioName);

    setScenarios(newScenarios);
  };

  const handleScenario = (contentValue) => {
    const content = JSON.parse(contentValue);
    const newScenarios = helperChangeScenario({ content });

    setScenarios(newScenarios);
  };

  return (
    <div className={styles.editor}>
      <section className={styles.container}>
        <FileName file={scenarios[pageId]} setName={handleDocumentName} />
        <section className={styles.buttons}>
          <ImportButton getFileData={getFileData} />
          <ExportButton data={scenarios[pageId]} />
        </section>
      </section>
      <div className={styles.editorHeader}>
        <FileExtensionName extension={"JSON"} />
      </div>
      <div className={styles.editorCode}>
        <CodeMirror
          className={styles.codeMirror}
          // value={
          //   scenarios
          //     ? JSON.stringify(scenarios[pageId]?.content)
          //     : { name: "Write JSON here." }
          // }
          value={
            allScenarios
              ? JSON.stringify(allScenarios.content)
              : { name: "Write JSON here." }
          }
          extensions={jsonLanguage}
          // onChange={(value) => handleScenario(value)}
          onChange={(value) =>
            setAllScenarios({
              ...allScenarios,
              id: pageId,
              content: JSON.parse(value),
            })
          }
        />
      </div>
    </div>
  );
};
