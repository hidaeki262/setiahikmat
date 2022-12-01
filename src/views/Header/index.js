import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Logo } from "./Logo";
import { Label, PageHref } from "../../constants";
import { BasicButton } from "../../components";
import Drawer from "./Drawer";

export default function Header() {
  return (
    <Box
      sx={{
        maxHeight: 150,
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid xs={3} item>
            <Logo />
          </Grid>
          <Grid xs={9} item>
            <Grid container flexDirection={"row-reverse"}>
              <Stack
                sx={{
                  mr: 2,
                  display: {
                    md: "block",
                    xs: "none",
                  },
                }}
                direction="row"
                spacing={5}
              >
                <BasicButton
                  sx={{
                    font: "normal normal 600 20px/27px Open Sans",
                    color: "#333333",
                  }}
                  href={PageHref.PAGE_HREF.HOME}
                  label={Label.APP_BAR_LABEL.HOME}
                />
                <BasicButton
                  sx={{
                    font: "normal normal 600 20px/27px Open Sans",
                    color: "#333333",
                  }}
                  href={PageHref.PAGE_HREF.ABOUT}
                  label={Label.APP_BAR_LABEL.ABOUT}
                />
                <BasicButton
                  sx={{
                    font: "normal normal 600 20px/27px Open Sans",
                    color: "#333333",
                  }}
                  href={PageHref.PAGE_HREF.PRODUCTS}
                  label={Label.APP_BAR_LABEL.PRODUCTS}
                />
                <BasicButton
                  sx={{
                    font: "normal normal 600 20px/27px Open Sans",
                    color: "#333333",
                  }}
                  href={PageHref.PAGE_HREF.CONTACT}
                  label={Label.APP_BAR_LABEL.CONTACT}
                />
              </Stack>
              <Drawer />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
