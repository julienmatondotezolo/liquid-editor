import dynamic from "next/dynamic";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { fileAtom, scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";
import { Preview } from "../preview";
import Tabs from "../shared/tabs";
import styles from "./style.module.scss";

const CodeMirror = dynamic(() => import("../shared/codeMirror"), {
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
        <Tabs fileName={file.name} scenarioName={name} file={file} />
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
