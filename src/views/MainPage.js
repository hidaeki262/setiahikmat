import { AppBar, Box } from "@mui/material";
import { useState } from "react";
import { ElevationScroll } from "../components";
import MenuBackdrop from "../components/MenuBackdrop";
import ScrollToTop, { scrollToHref } from "../components/ScrollToTop";
import { Label, PageHref } from "../constants";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";

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

export default function MainPage() {
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
      <Box>
        <ElevationScroll>
          <AppBar
            position="fixed"
            color="transparent"
            sx={{ backdropFilter: "blur(30px)" }}
          >
            <Header handleToggle={handleToggle} app_bars={options} />
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
