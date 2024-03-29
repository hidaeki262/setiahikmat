import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { Title } from "./Title";
import { Details } from "./Details";
import { Image } from "./Image";
import { PageHref } from "../../constants";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function About() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md")); // sm onwards

  const label = {
    title: "Who We Are",
    about:
      "It is a diversified firm that provides comprehensive services from building construction and renovation to customised projects. We provide premium raw materials to cater to all your project needs. With our experienced expert team, we helped our clients achieve premium quality construction and renovation work cost-effectively.",
    companyName: "Setia Hikmat",
  };

  const TitleComponent = () => <Title title={label.title} />;

  const DetailsComponent = () => (
    <Details content={label} textAlign={"justify"} />
  );

  const ImageComponent = () => <Image />;

  return (
    <Box
      sx={{
        marginBottom: 10,
      }}
    >
      <Container>
        <Grid container rowSpacing={matches ? 5 : 2} columnSpacing={5}>
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
        <Grid xs={12} item id={PageHref.PAGE_ID.CONTACT} sx={{ height: 72 }} />
      </Container>
    </Box>
  );
}
