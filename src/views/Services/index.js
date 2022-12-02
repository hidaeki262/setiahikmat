import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { Title } from "../About/Title";
import { Details } from "../About/Details";
import { PageHref } from "../../constants";

export default function About() {
  const label = {
    title: "Our Services",
    content:
      "We aim to provide the best-customised services to our clients to meet their needs at the best rates and pricing.",
  };

  const TitleComponent = () => <Title title={label.title} />;
  const DetailsComponent = () => (
    <Details style={{ width: "60%" }} content={label.content} />
  );

  return (
    <Box id={PageHref.PAGE_ID.PRODUCTS}>
      <Container>
        <Grid container rowSpacing={5} columnSpacing={5}>
          <Grid item />
          <Grid xs={12} item>
            <TitleComponent />
          </Grid>
          <Grid xs={12} item>
            <DetailsComponent />
          </Grid>
          <Grid xs={12} item>
            <Grid container>
              <Grid xs={4} item sx={{ bgcolor: "red" }}></Grid>
              <Grid xs={4} item sx={{ bgcolor: "blue" }}></Grid>
              <Grid xs={4} item sx={{ bgcolor: "black" }}></Grid>
            </Grid>
          </Grid>
          <Grid item />
        </Grid>
      </Container>
    </Box>
  );
}
