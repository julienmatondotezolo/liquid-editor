import dynamic from "next/dynamic";
import Link from "next/link";
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
          <Link href={config.ROUTE.HOME} passHref>
            <a>
              <Tab name={file.name} active={false} />
            </a>
          </Link>
          <Link href={config.ROUTE.SCENARIO} passHref>
            <a>
              <Tab name={name} active={true} />
            </a>
          </Link>
          <section className={styles.buttons}>
            <ImportButton type="file" />
            <ExportButton data={file} />
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
