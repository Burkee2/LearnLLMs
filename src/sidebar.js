import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const sidebar = ({ modules, onModuleSelect }) => {
  return (
    <Sidebar>
      <Menu>
        {modules.map((module, index) => (
          <MenuItem key={index} onClick={() => onModuleSelect(module)}>
            {module.title}
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default sidebar;
