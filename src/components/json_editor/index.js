import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import config from "../../config/config.json";
import { fileAtom, scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";
import { Notification } from "../shared/notification";
import { OptionIcons } from "../shared/optionIcons";
import Tabs from "../shared/tabs";
import styles from "./style.module.scss";

const CodeMirror = dynamic(() => import("../shared/codeMirror"), {
  ssr: false,
});

export const JSONeditor = () => {
  const selectedScenarioId = useRecoilValue(selectedScenarioState);
  const file = useRecoilValue(fileAtom);
  const [scenario, setScenario] = useRecoilState(scenarioAtomFamily(selectedScenarioId));
  const { name, content } = scenario;
  const [result, setResult] = useState({});

  const changeScenarioContent = (editor, data, value) => {
    if (value) {
      try {
        const parsedValue = JSON.parse(value);

        setResult({});
        setScenario({ ...scenario, content: parsedValue });
      } catch (error) {
        setResult({ ...result, code: 406, message: "Write valid JSON" });
      }
    }
  };

  return (
    <div className={styles.editor}>
      <div className={styles.editorCode}>
        <Tabs fileName={file.name} scenarioName={name} scenario={scenario} />
        <div className={styles.editorContent}>
          <CodeMirror
            mode={"json"}
            name={name}
            content={JSON.stringify(content, null, 2)}
            onChange={changeScenarioContent}
            className={styles.codeMirror}
          >
            <OptionIcons
              name={name}
              mode={"json"}
              content={JSON.stringify(content, null, 2)}
              onChange={changeScenarioContent}
            />
          </CodeMirror>
        </div>
      </div>
      {Object.keys(result).length === 0 ? (
        ""
      ) : (
        <Notification message={result.message} code={result.code} delay={config.NOTIFICATION.DELAY} />
      )}
    </div>
  );
};
