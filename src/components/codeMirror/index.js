import "codemirror/lib/codemirror.css";
import "codemirror/addon/lint/lint.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/json-lint";
import "codemirror/addon/edit/closebrackets";

import jsonlint from "jsonlint-mod";
import React from "react";
import { UnControlled } from "react-codemirror2-react-17";

const CodeMirror = ({ mode, content, onChange }) => {
  window.jsonlint = jsonlint;

  return (
    <UnControlled
      value={content ?? ""}
      options={{
        mode: mode == "json" ? "application/ld+json" : "text/html",
        lint: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        lineNumbers: true,
        gutters: ["CodeMirror-lint-markers"],
      }}
      autoCursor={false}
      onChange={onChange}
    />
  );
};

export default CodeMirror;
