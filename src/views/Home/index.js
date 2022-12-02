import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Colour } from "../../constants/Colour";
import { Container } from "@mui/system";
import { homeBg } from "../../assets/index";

export default function Home() {
  const labels = {
    titleMsg: "We Provide Architectural Design and Construction",
    contentMsg:
      "A firm specialising in construction, architectural design services and raw material providers",
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${homeBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 80%",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Grid container>
          <Grid container rowSpacing={12} >
            <Grid xs={12} item />
            <Grid xs={12} item>
              <Typography
                sx={{
                  font: "normal normal 600 60px/82px Open Sans",
                  "@media (max-width:768px)": {
                    font: "normal normal 600 32px/43px Open Sans",
                  },
                  width: 3.5 / 5,
                  color: Colour.RED,
                  letterSpacing: 0,
                }}
              >
                {labels.titleMsg}
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <Typography
                sx={{
                  width: 3 / 5,
                  font: "normal normal 600 34px/46px Open Sans",
                  "@media (max-width:768px)": {
                    font: "normal normal 600 16px/22px Open Sans",
                  },
                  color: Colour.DARKGREY,
                }}
              >
                {labels.contentMsg}
              </Typography>
            </Grid>
            <Grid xs={12} item />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
