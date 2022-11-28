import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Home() {
  // TODO: Update Contact page
  return (
    <Box
      sx={{
        height: 300,
        backgroundColor: "primary.dark",
        textAlign: "center",
      }}
      id="Home"
    >
      <Typography variant="h1">{"Home"}</Typography>
    </Box>
  );
}
