import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { Title } from "./Title";
import { Details } from "./Details";
import { Image } from "./Image";

export default function About() {
  const label = {
    title: "Who We Are",
    about:
      "Setia Hikmat is a diversified firm that provides comprehensive services from building construction and renovation to customised projects. We provide premium raw materials to cater to all your project needs. With our experienced expert team, we helped our clients achieve premium quality construction and renovation work cost-effectively.",
  };

  const TitleComponent = () => <Title title={label.title} />;

  const DetailsComponent = () => <Details content={label.about} />;

  const ImageComponent = () => <Image />;

  return (
    <Box>
      <Container>
        <Grid container rowSpacing={5} columnSpacing={5}>
          <Grid xs={12} item>
            <TitleComponent />
          </Grid>
          <Grid xs={12} md={6} item>
            <DetailsComponent />
          </Grid>
          <Grid xs={12} md={6} item sx={{ textAlign: "center" }}>
            <ImageComponent />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
