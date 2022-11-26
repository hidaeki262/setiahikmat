import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Logo } from "./Logo";
import { ButtonLabel, PageHref } from "../../constants";
import { BasicButton } from "../../components";
import Drawer from "./Drawer";

export default function Header() {
  // TODO: Update Header page
  return (
    <Box
      sx={{
        height: 150,
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
                <BasicButton href={PageHref.HOME} label={ButtonLabel.HOME} />
                <BasicButton href={PageHref.ABOUT} label={ButtonLabel.ABOUT} />
                <BasicButton
                  href={PageHref.PRODUCTS}
                  label={ButtonLabel.PRODUCTS}
                />
                <BasicButton
                  href={PageHref.CONTACT}
                  label={ButtonLabel.CONTACT}
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
