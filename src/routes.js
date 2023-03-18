import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./views/MainPage";
import ConstructionPage from "./views/Services/ConstructionPage";

function RouteRules() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* TODO: Add construction page */}
        <Route path="/construction" element={<ConstructionPage />} />
        {/* TODO: Add renovation page */}
        {/* TODO: Add customization page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default RouteRules;
