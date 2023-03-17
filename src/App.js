import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Helmet } from "react-helmet";
import { AppBar } from "@mui/material";
import { Label, PageHref } from "./constants";
import { ElevationScroll } from "./components";
import MenuBackdrop from "./components/MenuBackdrop";
import ScrollToTop, { scrollToHref } from "./components/ScrollToTop";
import { Header, Home, Services, About, Contact } from "./views";

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
  const [open, setOpen] = useState(false);

  const handleClose = (event, href) => {
    scrollToHref(event, href);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Helmet>
        <title>{"Setia Hikmat"}</title>
        <meta
          name="description"
          content="Setia Hikmat is a diversified firm that provides comprehensive services from building construction and renovation to customised projects"
        />
      </Helmet>
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
    </>
  );
}

export default App;
