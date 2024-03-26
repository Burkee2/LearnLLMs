import React, { useState } from "react";
import Module from "./module";
import Sidebar from "./sidebar";
import "./index.css";

const Course = ({ modules }) => {
  const [selectedModule, setSelectedModule] = useState(modules[0]);

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
  };

  const handleSwitchModule = (newModule) => {
    setSelectedModule(newModule);
  };

  return (
    <div className="flex">
      <Sidebar modules={modules} onModuleSelect={handleModuleSelect} />
      <Module module={selectedModule} onSwitchModule={handleSwitchModule} />
    </div>
  );
};

export default Course;
