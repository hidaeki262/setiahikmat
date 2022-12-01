import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Colour } from "../../constants/Colour";

export default function Home() {
  const labels = {
    titleMsg: "We Provide Architectural Design and Construction",
    contentMsg:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
  };

  return (
    <Box
      id="Home"
      sx={{
        height: 0.85,
        paddingLeft: "10vw",
        paddingTop: "3vw",
      }}
    >
      <Grid
        container
        sx={{ height: "100%", alignItems: "center" }}
        rowSpacing={1}
      >
        <Typography
          variant="h1"
          fontSize={42}
          sx={{ width: 3 / 5, color: Colour.RED }}
        >
          {labels.titleMsg}
        </Typography>
        <Typography
          variant="body1"
          fontSize={16}
          sx={{ width: 3 / 5, color: Colour.DARKGREY }}
        >
          {labels.contentMsg}
        </Typography>
        <Grid container sx={{ width: 3 / 5, textAlign: "center" }}>
          <Grid item xs={4} sx={{ bgcolor: "red" }}>
            1
          </Grid>
          <Grid item xs={4} sx={{ bgcolor: "green" }}>
            2
          </Grid>
          <Grid item xs={4} sx={{ bgcolor: "black" }}>
            3
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
