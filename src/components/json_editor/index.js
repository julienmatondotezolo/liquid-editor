import dynamic from "next/dynamic";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { fileAtom, scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";
import Tabs from "../shared/tabs";
import styles from "./style.module.scss";

const CodeMirror = dynamic(() => import("../shared/codeMirror"), {
  ssr: false,
});

export const JSONeditor = () => {
  const selectedScenarioId = useRecoilValue(selectedScenarioState);
  const file = useRecoilValue(fileAtom);
  const [scenario, setScenario] = useRecoilState(scenarioAtomFamily(selectedScenarioId));
  const { name, content } = scenario;
  const changeScenarioContent = (editor, data, value) => {
    setScenario({ ...scenario, content: JSON.parse(value) });
  };

  return (
    <div className={styles.editor}>
      <div className={styles.editorCode}>
        <Tabs fileName={file.name} scenarioName={name} scenario={scenario} />
        <div className={styles.editorContent}>
          <CodeMirror
            mode={"json"}
            content={JSON.stringify(content, null, 2)}
            onChange={changeScenarioContent}
            className={styles.codeMirror}
          />
        </div>
      </div>
    </div>
  );
};
