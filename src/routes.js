import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "./views/MainPage";
import ConstructionPage from "./views/Services/ConstructionPage";
import CustomisePage from "./views/Services/CustomisePage";
import RenovationPage from "./views/Services/RenovationPage";

function RouteRules() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/renovation" element={<RenovationPage />} />
        <Route path="/customise" element={<CustomisePage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default RouteRules;
