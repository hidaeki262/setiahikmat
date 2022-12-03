import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid, Typography } from "@mui/material";
import { Title } from "../About/Title";
import { Details } from "../About/Details";
import { PageHref } from "../../constants";
import { imageList_01 } from "../../assets";
import { Colour } from "../../constants/Colour";

export default function About() {
  const label = {
    title: "Our Services",
    content:
      "We aim to provide the best-customised services to our clients to meet their needs at the best rates and pricing.",
  };

  const imageList = [
    {
      img: imageList_01,
      content:
        "We are a one-stop renovation company that provides comprehensive construction services covering commercial and your sweet home.",
      label: "Construction",
    },
    {
      img: imageList_01,
      content:
        "With our growth in experience over the years, we provide an extensive range of renovation solutions to our clients.",
      label: "Renovation",
    },
    {
      img: imageList_01,
      content:
        "As a leading raw materials provider, we aim to meet our client’s needs in all aspects of construction and renovation at the best rate and pricing.",
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

  const HoverComponent = (props) => {
    const { img, content, label, index } = props;
    return (
      <Grid key={label + index} item>
        <Box
          sx={{
            paddingTop: index * 5,
            "@media (max-width:768px)": {
              paddingTop: 0,
            },
          }}
        >
          <Grid>
            {/* Comment this for correct mobile view */}
            <Box
              sx={{
                position: "absolute",
                marginTop: "6px",
                marginLeft: "9px",
                height: "478px",
                width: "352px",
                background: "#FF8A69 0% 0% no-repeat padding-box",
                opacity: 0,
                transition: "0.3s ease-out",
                ":hover": {
                  opacity: 0.84,
                },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  marginLeft: "75px",
                  marginRight: "75px",
                  font: "normal normal 500 20px/27px Open Sans",
                  letterSpacing: "0px",
                  color: Colour.WHITE,
                  opacity: 1,
                }}
              >
                {content}
              </Typography>
            </Box>
            {/* Comment this for correct mobile view  */}
            <Box component={"img"} src={img} />
          </Grid>
          <Typography
            sx={{
              font: "normal normal 600 34px/46px Open Sans",
              "@media (max-width:768px)": {
                font: "normal normal 600 16px/22px Open Sans",
              },
              color: Colour.DARKGREY,
            }}
          >
            {label}
          </Typography>
        </Box>
      </Grid>
    );
  };

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
            <Grid container style={{ overflowX: "auto", flexWrap: "nowrap" }}>
              {imageList.map((item, index) => {
                return <HoverComponent {...item} index={index} />;
              })}
            </Grid>
          </Grid>
          <Grid item />
        </Grid>
      </Container>
    </Box>
  );
}
