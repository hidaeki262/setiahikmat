import * as React from "react";
import Box from "@mui/material/Box";
import { Header, Home, Services, About, Contact } from "./views";
import ScrollToTop, { scrollToHref } from "./components/ScrollToTop";
import { ElevationScroll } from "./components";
import { AppBar } from "@mui/material";
import { Label, PageHref } from "./constants";
import MenuBackdrop from "./components/MenuBackdrop";

const options = [
  {
    title: Label.APP_BAR_LABEL.HOME,
    location: PageHref.PAGE_HREF.HOME,
    id: PageHref.PAGE_ID.HOME,
  },
  {
    title: Label.APP_BAR_LABEL.PRODUCTS,
    location: PageHref.PAGE_HREF.PRODUCTS,
    id: PageHref.PAGE_ID.PRODUCTS,
  },
  {
    title: Label.APP_BAR_LABEL.ABOUT,
    location: PageHref.PAGE_HREF.ABOUT,
    id: PageHref.PAGE_ID.ABOUT,
  },
  {
    title: Label.APP_BAR_LABEL.CONTACT,
    location: PageHref.PAGE_HREF.CONTACT,
    id: PageHref.PAGE_ID.CONTACT,
  },
];

function App() {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, href) => {
    scrollToHref(event, href);
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Box>
        <ElevationScroll>
          <AppBar
            position="fixed"
            color="transparent"
            sx={{ backdropFilter: "blur(30px)" }}
          >
            <Header handleToggle={handleToggle} />
          </AppBar>
        </ElevationScroll>
        <Home />
        <Services />
        <About />
        <Contact />
        <ScrollToTop />
      </Box>
      <MenuBackdrop handleClose={handleClose} options={options} open={open} />
    </React.Fragment>
  );
}

export default App;
