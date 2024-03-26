import React from "react";
import MonacoEditor from "react-monaco-editor";
import "./index.css";

const Module = ({ module }) => {
  if (module.type === "reading") {
    return (
      <div
        className="p-10"
        dangerouslySetInnerHTML={{ __html: module.content }}
      />
    );
  } else if (module.type === "code-exercise") {
    return (
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={module.code}
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false,
          cursorStyle: "line",
          automaticLayout: true,
        }}
      />
    );
  }
  return null;
};

export default Module;
