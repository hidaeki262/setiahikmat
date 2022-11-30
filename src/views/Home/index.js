import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Colour } from "../../constants/Colour";

export default function Home() {
  const labels = {
    titleMsg: "We Provide Architectural Design and Construction",
  };

  return (
    <Box
      id="Home"
      sx={{
        textAlign: "center",
      }}
    >
      <Typography variant="h1" fontSize={"4.5vw"} sx={{ width: 2 / 3, color: Colour.RED }}>
        {labels.titleMsg}
      </Typography>
    </Box>
  );
}
