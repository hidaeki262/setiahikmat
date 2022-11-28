import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
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
        sx={{ position: "fixed", bottom: 32, right: 32, color: "#D9593D" }}
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
        size="64px"
        aria-label="scroll back to top"
        sx={{
          bgcolor: "#D9593D",
          borderRadius: "16px",
          width: "64px",
          height: "64px",
          paddingTop: "14px",
          transition: "0.5s",
          alignItems: "flex-start",
          color: "#FFFFFF",
          "&:hover": {
            bgcolor: "#D9593D",
            paddingTop: "6px",
          },
        }}
      >
        <ArrowUpwardIcon sx={{height: "48px", width: "48px"}} />
      </Fab>
    </ScrollTop>
  );
}
