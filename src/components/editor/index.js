import dynamic from "next/dynamic";
import React from "react";
import { useRecoilState } from "recoil";

import { fileAtom } from "../../recoil/atoms";
import { Preview } from "../preview";
import ExportButton from "../shared/exportButton";
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
      <section className={styles.buttons}>
        <ImportButton type="file" />
        <ExportButton data={file} />
      </section>
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
