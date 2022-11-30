import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Header, Home, Services, About, Contact } from "./views";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // TODO: Add pages
  return (
    <React.Fragment>
      <Box sx={{ height: "100vh" }}>
        <Toolbar id="back-to-top-anchor" />
        <Header />
        <Home />
        <Services />
        <About />
        <Contact />
        <ScrollToTop />
      </Box>
    </React.Fragment>
  );
}

export default App;
