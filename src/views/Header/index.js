import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        height: 300,
        backgroundColor: "primary.dark",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">{"Header"}</Typography>
    </Box>
  );
}
