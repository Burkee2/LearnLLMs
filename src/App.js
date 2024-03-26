import React from "react";
import Course from "./course";
import modules from "./modules";

function App() {
  return (
    <div className="App">
      <Course modules={modules} />
    </div>
  );
}

export default App;
