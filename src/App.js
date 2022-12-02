import * as React from "react";
import Box from "@mui/material/Box";
import { Header, Home, Services, About, Contact } from "./views";
import ScrollToTop from "./components/ScrollToTop";
import { AppBar, Toolbar } from "@mui/material";
import { ElevationScroll } from "./components";

function App() {
  return (
    <React.Fragment>
      <Box sx={{ height: "100vh" }}>
        <Toolbar id="back-to-top-anchor" />
        <ElevationScroll>
          <AppBar position="fixed" color="inherit">
            <Header />
          </AppBar>
        </ElevationScroll>
        <Toolbar />
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
