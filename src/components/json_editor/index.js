import dynamic from "next/dynamic";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import config from "../../config/config.json";
import { fileAtom, scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";
import ExportButton from "../shared/exportButton";
import ImportButton from "../shared/importButton";
import Tab from "../shared/tab";
import styles from "./style.module.scss";

const CodeMirror = dynamic(() => import("../codeMirror"), {
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
        <section className={styles.tabs}>
          <Tab name={file.name} href={config.ROUTE.HOME} active={false} />
          <Tab name={name} active={true} />
          <section className={styles.buttons}>
            <ImportButton type="scenario" />
            <ExportButton data={scenario} />
          </section>
        </section>
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
