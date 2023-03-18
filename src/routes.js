import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./views/MainPage";
import ConstructionPage from "./views/Services/ConstructionPage";
import RenovationPage from "./views/Services/RenovationPage";

function RouteRules() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/renovation" element={<RenovationPage />} />
        {/* TODO: Add customization page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default RouteRules;
