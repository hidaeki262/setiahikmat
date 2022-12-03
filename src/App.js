import * as React from "react";
import Box from "@mui/material/Box";
import { Header, Home, Services, About, Contact } from "./views";
import ScrollToTop, { scrollToHref } from "./components/ScrollToTop";
import { BasicButton, ElevationScroll } from "./components";
import { AppBar, Backdrop, Grid } from "@mui/material";
import { Label, PageHref } from "./constants";
import CloseIcon from "@mui/icons-material/Close";
import { Logo } from "./views/Header/Logo";

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
      <Backdrop
        sx={{
          backdropFilter: "blur(30px)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={handleClose}
      >
        <Box sx={{ margin: 5 }}>
          <Grid container rowSpacing={5}>
            <Grid xs={3}>
              <Logo />
            </Grid>
            <Grid sx={{ textAlign: "end" }} xs={9} item>
              <CloseIcon
                sx={{ margin: 1, cursor: "pointer", color: "#D9593D" }}
                onClick={handleClose}
                fontSize="large"
              />
            </Grid>
            {options.map((option, index) => (
              <Grid xs={12} item>
                <BasicButton
                  sx={{ color: "#FFCCBC", width: "100%" }}
                  key={index}
                  label={option.title}
                  onClick={(e) => handleClose(e, option.location)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Backdrop>
    </React.Fragment>
  );
}

export default App;
