import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Logo } from "./Logo";
import { Label, PageHref } from "../../constants";
import { BasicButton } from "../../components";
import DrawerComponent from "./DrawerComponent";
import { scrollToHref } from "../../components/ScrollToTop";

export default function Header({ handleToggle }) {
  const app_bars = [
    {
      label: Label.APP_BAR_LABEL.HOME,
      location: PageHref.PAGE_HREF.HOME,
    },
    {
      label: Label.APP_BAR_LABEL.PRODUCTS,
      location: PageHref.PAGE_HREF.PRODUCTS,
    },
    {
      label: Label.APP_BAR_LABEL.ABOUT,
      location: PageHref.PAGE_HREF.ABOUT,
    },
    {
      label: Label.APP_BAR_LABEL.CONTACT,
      location: PageHref.PAGE_HREF.CONTACT,
    },
  ];

  return (
    <Box
      sx={{
        paddingTop: 2,
        paddingBottom: 2,
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
                {app_bars.map((app_bar, index) => (
                  <BasicButton
                    key={index}
                    sx={{
                      color: "#333333",
                    }}
                    label={app_bar.label}
                    onClick={(e) => scrollToHref(e, app_bar.location)}
                  />
                ))}
              </Stack>
              <DrawerComponent handleToggle={handleToggle} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
