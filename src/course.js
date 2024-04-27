import React, { useState } from "react";
import Module from "./module";
import Sidebar from "./sidebar";
import "./index.css";
import Button from "@mui/material/Button";

const Course = ({ modules }) => {
  const [selectedModule, setSelectedModule] = useState(modules[0]);
  const [isSidebarVisible, setisSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setisSidebarVisible(!isSidebarVisible);
  };

  const handleModuleSelect = (module) => {
    setSelectedModule(module);
  };

  const handleSwitchModule = (newModule) => {
    setSelectedModule(newModule);
  };

  const handleNextModule = () => {
    const currentIndex = modules.indexOf(selectedModule);
    const nextIndex = (currentIndex + 1) % modules.length;
    setSelectedModule(modules[nextIndex]);
  };

  const handlePreviousModule = () => {
    const currentIndex = modules.indexOf(selectedModule);
    const previousIndex = (currentIndex - 1 + modules.length) % modules.length;
    setSelectedModule(modules[previousIndex]);
  };

  return (
    <div className="pt-16">
      {" "}
      {/* Padding top to prevent overlap with the fixed header */}
      <div className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 px-6 z-50">
        <h1 className="text-lg">Learn LLMs</h1>
      </div>
      <Sidebar
        modules={modules}
        onModuleSelect={handleModuleSelect}
        isVisible={isSidebarVisible}
        onSetVisible={toggleSidebar}
      />
      <Module module={selectedModule} onSwitchModule={handleSwitchModule} />
      <div className="fixed bottom-1 left-0 w-full bg-gray-200 border-t py-2 px-6 flex justify-between items-center">
        <Button variant="contained" onClick={toggleSidebar}>
          Modules
        </Button>
        <div className="flex-grow flex justify-center">
          <Button variant="contained" onClick={handlePreviousModule}>
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={handleNextModule}
            style={{ marginLeft: "8px" }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Course;
