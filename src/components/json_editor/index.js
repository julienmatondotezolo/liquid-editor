import { jsonLanguage } from "@codemirror/lang-json";
import CodeMirror from "@uiw/react-codemirror";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import config from "../../config/config.json";
import { scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";
import { scenariosSelector } from "../../recoil/selectors";
import { FileExtensionName } from "../fileExtensionName";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const JSONeditor = () => {
  const selectedScenarioID = useRecoilValue(selectedScenarioState);
  const allScenarios = useRecoilValue(scenariosSelector);
  const [scenario, setScenario] = useRecoilState(
    scenarioAtomFamily(selectedScenarioID)
  );
  const { name, content } = scenario;

  useEffect(() => {
    window.localStorage.setItem(
      config.STORAGE.SCENARIOS,
      JSON.stringify(allScenarios)
    );
  }, [allScenarios]);

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
        <CodeMirror
          className={styles.codeMirror}
          value={content ? JSON.stringify(content) : ""}
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
