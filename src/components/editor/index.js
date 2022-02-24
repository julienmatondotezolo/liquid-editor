import { htmlLanguage } from "@codemirror/lang-html";
import CodeMirror from "@uiw/react-codemirror";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import config from "../../config/config.json";
import { fileAtom, scenarioAtom } from "../../recoil/atoms";
import { FileExtensionName } from "../fileExtensionName";
import { Preview } from "../preview";
import { ScenarioPreviewPicker } from "../scenarioPreviewPicker";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const Editor = () => {
  const [file, setFile] = useRecoilState(fileAtom);
  const [scenarios, setScenarios] = useRecoilState(scenarioAtom);
  const [currentScenario, setCurrentScenario] = useState(0);

  useEffect(() => {
    const storageFile = window.localStorage.getItem(config.STORAGE.USER_CODE);
    // const storageScenarios = window.localStorage.getItem(
    //   config.STORAGE.SCENARIOS
    // );

    if (storageFile) {
      setFile(JSON.parse(storageFile));
    }

    // if (storageScenarios) {
    //   setScenarios(JSON.parse(storageScenarios));
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem(config.STORAGE.USER_CODE, JSON.stringify(file));
  }, [file]);

  // useEffect(() => {
  //   localStorage.setItem(config.STORAGE.SCENARIOS, JSON.stringify(scenarios));
  // }, [scenarios]);

  return (
    <div className={styles.editor}>
      <section className={styles.container}>
        <FileName />
        <section className={styles.buttons}>
          <ImportButton />
          <ExportButton data={file} />
        </section>
      </section>
      <div className={styles.editorHeader}>
        <FileExtensionName extension={"liquid"} />
        {/* <ScenarioPreviewPicker
          scenarios={scenarios}
          setCurrentScenario={setCurrentScenario}
        /> */}
        <ScenarioPreviewPicker />
      </div>
      <div className={styles.editorCode}>
        <CodeMirror
          className={styles.codeMirror}
          value={file ? file.content : ""}
          extensions={htmlLanguage}
          onChange={(value) => setFile({ ...file, content: value })}
        />
        {/* <Preview className={styles.codePreview} scenario={currentScenario} /> */}
      </div>
    </div>
  );
};
