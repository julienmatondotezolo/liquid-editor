import { jsonLanguage } from "@codemirror/lang-json";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";

import { useScenarioContext } from "../../context";
import { FileExtensionName } from "../fileExtensionName";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const JSONeditor = () => {
  const { scenarios, scenario, selectedScenario } = useScenarioContext();
  const { name, content } = scenarios[selectedScenario];

  return (
    <div className={styles.editor}>
      <section className={styles.container}>
        <FileName name={name} />
        <section className={styles.buttons}>
          <ImportButton />
          <ExportButton data={scenarios[selectedScenario]} />
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
            scenario.update(
              {
                content: JSON.parse(value),
              },
              selectedScenario
            )
          }
        />
      </div>
    </div>
  );
};
