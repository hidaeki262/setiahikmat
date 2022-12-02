import * as React from "react";
import Box from "@mui/material/Box";
import { Header, Home, Services, About, Contact } from "./views";
import ScrollToTop from "./components/ScrollToTop";
import { ElevationScroll } from "./components";
import { AppBar } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <Box>
        <ElevationScroll>
          <AppBar
            position="fixed"
            color="transparent"
            sx={{ backdropFilter: "blur(30px)" }}
          >
            <Header />
          </AppBar>
        </ElevationScroll>
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
