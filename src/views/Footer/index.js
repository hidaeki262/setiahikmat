import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Container, Grid } from "@mui/material";

export default function Footer() {
  // TODO: Update Footer page
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        bottom: 0,
      }}
    >
      <Container>
        <Grid xs={3} item>
        </Grid>
      </Container>

      <Typography variant="h1">{"Footer"}</Typography>
    </Box>
  );
}
