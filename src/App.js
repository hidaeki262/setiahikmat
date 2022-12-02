import * as React from "react";
import Box from "@mui/material/Box";
import { Header, Home, Services, About, Contact } from "./views";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <React.Fragment>
      <Box>
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
