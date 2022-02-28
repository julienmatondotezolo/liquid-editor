import { htmlLanguage } from "@codemirror/lang-html";
import CodeMirror from "@uiw/react-codemirror";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import config from "../../config/config.json";
import { fileAtom, selectedScenarioState } from "../../recoil/atoms";
import { FileExtensionName } from "../fileExtensionName";
import { Preview } from "../preview";
import { ScenarioPreviewPicker } from "../scenarioPreviewPicker";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const Editor = () => {
  const [file, setFile] = useRecoilState(fileAtom);
  const selectedScenarioID = useRecoilValue(selectedScenarioState);

  useEffect(() => {
    const storageFile = window.localStorage.getItem(config.STORAGE.USER_CODE);

    if (storageFile) {
      setFile(JSON.parse(storageFile));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(config.STORAGE.USER_CODE, JSON.stringify(file));
  }, [file]);

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
        <ScenarioPreviewPicker />
      </div>
      <div className={styles.editorCode}>
        <CodeMirror
          className={styles.codeMirror}
          value={file ? file.content : ""}
          extensions={htmlLanguage}
          onChange={(value) => setFile({ ...file, content: value })}
        />
        <Preview className={styles.codePreview} scenario={selectedScenarioID} />
      </div>
    </div>
  );
};
