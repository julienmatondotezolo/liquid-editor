import dynamic from "next/dynamic";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import config from "../../config/config.json";
import { fileAtom, scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";
import { Preview } from "../preview";
import ExportButton from "../shared/exportButton";
import ImportButton from "../shared/importButton";
import Tab from "../shared/tab";
import styles from "./style.module.scss";

const CodeMirror = dynamic(() => import("../codeMirror"), {
  ssr: false,
});

export const Editor = () => {
  const [file, setFile] = useRecoilState(fileAtom);
  const selectedScenarioId = useRecoilValue(selectedScenarioState);
  const scenario = useRecoilValue(scenarioAtomFamily(selectedScenarioId));
  const { name } = scenario;
  const changeFileContent = (editor, data, value) => {
    setFile({ ...file, content: value });
  };

  return (
    <div className={styles.editor}>
      <div className={styles.editorCode}>
        <section className={styles.tabs}>
          <Tab name={file.name} href={config.ROUTE.HOME} active={true} />
          <Tab name={name} active={false} />
          <section className={styles.buttons}>
            <ImportButton type="file" />
            <ExportButton data={file} />
          </section>
        </section>
        <div className={styles.editorContent}>
          <CodeMirror
            mode={"html"}
            content={file?.content || ""}
            onChange={changeFileContent}
            className={styles.codeMirror}
          />
          <Preview className={styles.codePreview} />
        </div>
      </div>
    </div>
  );
};
