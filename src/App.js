import * as React from "react";
import Box from "@mui/material/Box";
import { Header, Home, Services, About, Contact } from "./views";
import ScrollToTop from "./components/ScrollToTop";
import { AppBar, Toolbar } from "@mui/material";
import { ElevationScroll } from "./components";
import { PageHref } from "./constants";

function App() {
  return (
    <React.Fragment>
      <Box sx={{ height: "100vh" }}>
        <Toolbar id={PageHref.PAGE_ID.HOME} />
        <ElevationScroll>
          <AppBar position="fixed" color="inherit">
            <Header />
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        <Home />
        <Toolbar id={PageHref.PAGE_ID.PRODUCTS} />
        <Toolbar />
        <Services />
        <Toolbar id={PageHref.PAGE_ID.ABOUT} />
        <Toolbar />
        <About />
        <Toolbar id={PageHref.PAGE_ID.CONTACT} />
        <Toolbar />
        <Contact />
        <ScrollToTop />
      </Box>
    </React.Fragment>
  );
}

export default App;
