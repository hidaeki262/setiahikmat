import React from "react";
import { Helmet } from "react-helmet";
import RouteRules from "./routes";

function App() {
  return (
    <>
      <Helmet>
        <title>{"Setia Hikmat"}</title>
        <meta
          name="description"
          content="Setia Hikmat is a diversified firm that provides comprehensive services from building construction and renovation to customised projects"
        />
      </Helmet>
      <RouteRules />
    </>
  );
}

export default App;
