/* import React, { useState } from "react";

import MonacoEditor from "react-monaco-editor";

const CodeEditorWindow = ({ onChange, language, code }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <MonacoEditor
      height="60vh" 
      width={`100%`}
      language="python"
      value={value}
      theme="vs-dark"
      defaultValue=""
      onChange={handleEditorChange}
      options={{
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: "line",
        automaticLayout: true,
      }}
    />
  );
};
export default CodeEditorWindow;
 */
