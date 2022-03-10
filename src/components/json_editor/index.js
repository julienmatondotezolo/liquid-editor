import dynamic from "next/dynamic";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";
import { FileExtensionName } from "../fileExtensionName";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

const CodeMirror = dynamic(() => import("../codeMirror"), {
  ssr: false,
});

export const JSONeditor = () => {
  const selectedScenarioId = useRecoilValue(selectedScenarioState);
  const [scenario, setScenario] = useRecoilState(
    scenarioAtomFamily(selectedScenarioId)
  );
  const { name, content } = scenario;
  const changeScenarioContent = (editor, data, value) => {
    setScenario({ ...scenario, content: JSON.parse(value) });
  };

  return (
    <div className={styles.editor}>
      <section className={styles.container}>
        <FileName name={name} />
        <section className={styles.buttons}>
          <ImportButton type="scenario" />
          <ExportButton data={scenario} />
        </section>
      </section>
      <div className={styles.editorHeader}>
        <FileExtensionName extension={"JSON"} />
      </div>
      <div className={styles.editorCode}>
        <CodeMirror
          mode={"json"}
          content={JSON.stringify(content, null, 2)}
          onChange={changeScenarioContent}
          className={styles.codeMirror}
        />
      </div>
    </div>
  );
};
