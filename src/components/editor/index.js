import { htmlLanguage } from "@codemirror/lang-html";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";

import { useFileContext } from "../../context/index";
import { FileExtensionName } from "../fileExtensionName";
import { Preview } from "../preview";
import { ScenarioPreviewPicker } from "../scenarioPreviewPicker";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const Editor = () => {
  const { file, setFile } = useFileContext();

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
          value={file?.content || ""}
          extensions={htmlLanguage}
          onChange={(value) => setFile({ ...file, content: value })}
        />
        <Preview className={styles.codePreview} />
      </div>
    </div>
  );
};
