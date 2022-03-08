import dynamic from "next/dynamic";
import React from "react";
import { useRecoilState } from "recoil";

import { fileAtom } from "../../recoil/atoms";
import { FileExtensionName } from "../fileExtensionName";
import { Preview } from "../preview";
import { ScenarioPreviewPicker } from "../scenarioPreviewPicker";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

const CodeMirror = dynamic(() => import("../codeMirror"), {
  ssr: false,
});

export const Editor = () => {
  const [file, setFile] = useRecoilState(fileAtom);
  const changeFileContent = (editor, data, value) => {
    setFile({ ...file, content: value });
  };

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
          mode={"html"}
          content={file?.content || ""}
          onChange={changeFileContent}
          className={styles.codeMirror}
        />
        <Preview className={styles.codePreview} />
      </div>
    </div>
  );
};
