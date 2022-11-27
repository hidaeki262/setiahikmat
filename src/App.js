import * as React from "react";
import Box from "@mui/material/Box";
import { Header } from "./views";
import Contact from "./views/Contact";

function App() {
  // TODO: Add pages
  return (
    <React.Fragment>
      <Box sx={{ height: "100vh", padding: 7 }}>
        <Header />
        <Contact />
      </Box>
    </React.Fragment>
  );
}

export default App;
