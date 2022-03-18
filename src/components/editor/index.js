import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

import config from "../../config/config.json";
import { fileAtom } from "../../recoil/atoms";
import { Preview } from "../preview";
import ExportButton from "../shared/exportButton";
import ImportButton from "../shared/importButton";
import Tab from "../shared/tab";
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
      <div className={styles.editorCode}>
        <section className={styles.tabs}>
          <Link href={config.ROUTE.HOME} passHref>
            <a>
              <Tab name={file.name} active={true} />
            </a>
          </Link>
          <Link href={config.ROUTE.SCENARIO} passHref>
            <a>
              <Tab name={"belasting-scenario.json"} active={false} />
            </a>
          </Link>
          <section className={styles.buttons}>
            <ImportButton type="file" />
            <ExportButton data={file} />
          </section>
        </section>
        <div className={styles.editorContent}>
          <CodeMirror
            mode={"html"}
            content={file?.content || ""}
            onChange={changeFileContent}
            className={styles.codeMirror}
          />
          <Preview className={styles.codePreview} />
        </div>
      </div>
    </div>
  );
};
