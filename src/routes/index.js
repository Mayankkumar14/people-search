import React from "react";
import { Navigate, Route, Routes as RootRoutes } from "react-router-dom";

import People from "../components/People";

const Routes = () => {
  return (
    <RootRoutes>
      <Route path="/" element={<Navigate to="/people" replace />} />
      <Route path="/people" element={<People />} />
    </RootRoutes>
  );
};

export default Routes;
