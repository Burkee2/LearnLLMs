// sidebar.js
import React from "react";
import Sidebar from "react-sidebar";

const SidebarComponent = ({
  modules,
  onModuleSelect,
  isVisible,
  onSetVisible,
}) => {
  const sidebarContent = (
    <div>
      {modules.map((module, index) => (
        <div key={index} onClick={() => onModuleSelect(module)}>
          {module.title}
        </div>
      ))}
    </div>
  );

  return (
    <Sidebar
      sidebar={sidebarContent}
      open={isVisible}
      onSetOpen={onSetVisible}
      styles={{
        sidebar: { background: "white", width: "250px", zIndex: "1050" },
      }}
    >
      <div></div>{" "}
      {/* This div is necessary for react-sidebar but can be empty since the content is in the sidebar prop */}
    </Sidebar>
  );
};

export default SidebarComponent;
