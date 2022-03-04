import { jsonLanguage } from "@codemirror/lang-json";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";
import { FileExtensionName } from "../fileExtensionName";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const JSONeditor = () => {
  const selectedScenarioId = useRecoilValue(selectedScenarioState);
  const [scenario, setScenario] = useRecoilState(
    scenarioAtomFamily(selectedScenarioId)
  );
  const { name, content } = scenario;

  const changeScenarioContent = (value) => {
    console.log("ON CHANGE SCENARIO ID:", selectedScenarioId);
    console.log(value);
    // setScenario({ ...scenario, content: JSON.parse(value) });
  };

  console.log("SCENARIO ID:", selectedScenarioId);

  return (
    <div className={styles.editor}>
      <section className={styles.container}>
        <FileName name={name} />
        <section className={styles.buttons}>
          <ImportButton />
          <ExportButton data={scenario} />
        </section>
      </section>
      <div className={styles.editorHeader}>
        <FileExtensionName extension={"JSON"} />
      </div>
      <div className={styles.editorCode}>
        {/* <input
          type="text"
          value={content ? JSON.stringify(conte©nt) : ""}
          onChange={(event) =>
            setScenario({
              ...scenario,
              content: JSON.parse(event.target.value),
            })
          }
        /> */}
        <CodeMirror
          className={styles.codeMirror}
          value={content ? JSON.stringify(content) : ""}
          extensions={jsonLanguage}
          onChange={(value) => changeScenarioContent(value)}
        />
      </div>
    </div>
  );
};
