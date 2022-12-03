import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { Title } from "../About/Title";
import { Details } from "../About/Details";
import { PageHref } from "../../constants";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function About() {
  const label = {
    title: "Our Services",
    content:
      "We aim to provide the best-customised services to our clients to meet their needs at the best rates and pricing.",
  };

  const imageList = [
    {
      img: "/assets/imageList_01.png",
      label: "Construction",
    },
    {
      img: "/assets/imageList_01.png",
      label: "Renovation",
    },
    {
      img: "/assets/imageList_01.png",
      label: "Customise Component",
    },
  ];

  const TitleComponent = () => <Title title={label.title} />;
  const DetailsComponent = () => (
    <Details
      sx={{
        width: "60%",
        "@media (max-width:768px)": {
          width: "80%",
        },
      }}
      content={label.content}
    />
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
              <ImageList sx={{ overflow: "hidden" }}>
                {imageList.map((item, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={`${item.img}?fit=crop&auto=format`}
                      srcSet={`${item.img}?fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar title={item.label} position={"below"} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
          <Grid item />
        </Grid>
      </Container>
    </Box>
  );
}
