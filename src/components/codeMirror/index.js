import "codemirror/lib/codemirror.css";
import "codemirror/addon/lint/lint.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/json-lint";
import "codemirror/addon/edit/closebrackets";

import React from "react";
import { UnControlled } from "react-codemirror2-react-17";
import { useRecoilState, useRecoilValue } from "recoil";

import { scenarioAtomFamily, selectedScenarioState } from "../../recoil/atoms";

const jsonlint = require("jsonlint-mod");

export default function CodeMirror() {
  const selectedScenarioId = useRecoilValue(selectedScenarioState);
  const [scenario, setScenario] = useRecoilState(
    scenarioAtomFamily(selectedScenarioId)
  );
  const { content } = scenario;
  const changeScenarioContent = (editor, data, value) => {
    setScenario({ ...scenario, content: JSON.parse(value) });
  };

  window.jsonlint = jsonlint;

  return (
    <UnControlled
      value={content ? JSON.stringify(content, null, 2) : ""}
      options={{
        mode: "application/ld+json",
        lint: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        lineNumbers: true,
        gutters: ["CodeMirror-lint-markers"],
      }}
      autoCursor={false}
      onChange={changeScenarioContent}
    />
  );
}
