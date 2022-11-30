import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: "3vw",
          right: "3vw",
          color: "#D9593D",
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function ScrollToTop(props) {
  return (
    <ScrollTop {...props}>
      <Fab
        aria-label="scroll back to top"
        sx={{
          bgcolor: "#D9593D",
          borderRadius: "2vh",
          width: "7vh",
          height: "7vh",
          paddingTop: "1.7vh",
          transition: "0.3s",
          alignItems: "flex-start",
          color: "#FFFFFF",
          "&:hover": {
            bgcolor: "#D9593D",
            paddingTop: "0.8vh",
          },
        }}
      >
        <ArrowUpwardIcon sx={{ height: "5vh", width: "5vh" }} />
      </Fab>
    </ScrollTop>
  );
}
