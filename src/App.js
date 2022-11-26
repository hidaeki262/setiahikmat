import * as React from "react";
import Box from "@mui/material/Box";
import Map from "./components/Map";

function App() {
  // TODO: Add pages
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <Map />
      </Box>
    </React.Fragment>
  );
}

export default App;
