import * as React from "react";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function DrawerComponent({ handleToggle }) {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={handleToggle}
      sx={{
        mr: 2,
        display: {
          xs: "block",
          md: "none",
        },
        color: "#D9593D",
      }}
    >
      <MenuRoundedIcon fontSize="large" />
    </IconButton>
  );
}
