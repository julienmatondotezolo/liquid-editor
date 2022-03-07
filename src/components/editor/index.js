import { htmlLanguage } from "@codemirror/lang-html";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import { useRecoilState } from "recoil";

import { ShadowRoot } from "../../helpers/";
import { fileAtom } from "../../recoil/atoms";
import { FileExtensionName } from "../fileExtensionName";
import { Preview } from "../preview";
import { ScenarioPreviewPicker } from "../scenarioPreviewPicker";
import ExportButton from "../shared/exportButton";
import { FileName } from "../shared/fileName";
import ImportButton from "../shared/importButton";
import styles from "./style.module.scss";

export const Editor = () => {
  const [file, setFile] = useRecoilState(fileAtom);

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
        <ShadowRoot>
          <CodeMirror
            className={styles.codeMirror}
            value={file?.content || ""}
            extensions={htmlLanguage}
            onChange={(value) => setFile({ ...file, content: value })}
          />
        </ShadowRoot>
        <Preview className={styles.codePreview} />
      </div>
    </div>
  );
};
