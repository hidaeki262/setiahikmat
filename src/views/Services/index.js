import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid, ImageListItem, Typography } from "@mui/material";
import { Title } from "../About/Title";
import { Details } from "../About/Details";
import { PageHref } from "../../constants";
import { imageList_01, imageList_02, imageList_03 } from "../../assets";
import { Colour } from "../../constants/Colour";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function About() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md")); // sm onwards

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
      img: imageList_02,
      content:
        "With our growth in experience over the years, we provide an extensive range of renovation solutions to our clients.",
      label: "Renovation",
    },
    {
      img: imageList_03,
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
          width: "100%",
        },
      }}
      content={label.content}
    />
  );

  const HoverComponent = (props) => {
    const { img, content, label, index } = props;
    return (
      <ImageListItem>
        <Box
          sx={{
            paddingTop: index * 5,
            "@media (max-width:768px)": {
              paddingTop: 0,
            },
          }}
        >
          <Grid container>
            <Grid xs={12} item>
              <Box>
                {/* render hover content */}
                <Box
                  sx={{
                    position: "absolute",
                    height: "496px",
                    width: "370px",
                    marginRight: "12px",
                    background: "#FF8A69 0% 0% no-repeat padding-box",
                    opacity: 0,
                    transition: "0.3s ease-out",
                    ":hover": {
                      opacity: 0.84,
                    },
                    display: "flex",
                    alignItems: "center",
                    "@media (max-width:1024px)": {
                      height: "430px",
                      width: "325px",
                    },
                    "@media (max-width:768px)": {
                      height: "344px",
                      width: "255px",
                    },
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
                      "@media (max-width:1024px)": {
                        font: "normal normal 600 16px/22px Open Sans",
                        marginLeft: "30px",
                        marginRight: "30px",
                      },
                    }}
                  >
                    {content}
                  </Typography>
                </Box>
                {/* render image */}
                <Box
                  sx={{
                    marginRight: "12px",
                    height: "496px",
                    width: "370px",
                    objectFit: "cover",
                    "@media (max-width:1024px)": {
                      height: "430px",
                      width: "325px",
                    },
                    "@media (max-width:768px)": {
                      height: "344px",
                      width: "255px",
                    },
                  }}
                  component="img"
                  src={img}
                />
              </Box>
            </Grid>
            {/* render component label */}
            <Grid xs={12} item>
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
            </Grid>
          </Grid>
        </Box>
      </ImageListItem>
    );
  };

  return (
    <Container>
      <Grid container rowSpacing={matches ? 5 : 2} columnSpacing={5}>
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
              return <HoverComponent key={index} {...item} index={index} />;
            })}
          </Grid>
        </Grid>
        <Grid
          xs={12}
          item
          id={PageHref.PAGE_ID.ABOUT}
          sx={{ height: "130px" }}
        />
      </Grid>
    </Container>
  );
}
