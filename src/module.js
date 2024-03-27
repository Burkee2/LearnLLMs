import React, { lazy, Suspense } from "react";

const Module = ({ module }) => {
  const ModuleComponent = lazy(() => import(`${module.componentPath}`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ModuleComponent />
    </Suspense>
  );
};

export default Module;
