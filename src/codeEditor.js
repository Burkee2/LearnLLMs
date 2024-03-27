import React from "react";
import MonacoEditor from "react-monaco-editor";

const CodeEditor = ({ code }) => (
  <MonacoEditor
    width="800"
    height="600"
    language="javascript"
    theme="vs-dark"
    value={code}
    options={{
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: "line",
      automaticLayout: true,
    }}
  />
);

export default CodeEditor;
