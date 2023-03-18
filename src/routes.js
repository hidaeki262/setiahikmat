import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./views/MainPage";

function RouteRules() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* TODO: Add construction page */}
        {/* TODO: Add renovation page */}
        {/* TODO: Add customization page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default RouteRules;
