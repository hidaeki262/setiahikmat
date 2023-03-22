import { AppBar, Box, Container, Grid, Typography } from "@mui/material";
import {
  imageList_02,
  renovation_01,
  renovation_02,
  renovation_03,
} from "../../assets";
import React, { useState } from "react";
import { Colour } from "../../constants/Colour";
import { Label, PageHref } from "../../constants";
import { ElevationScroll } from "../../components";
import Header from "../Header";
import { scrollToHref } from "../../components/ScrollToTop";
import MenuBackdrop from "../../components/MenuBackdrop";

const options = [
  {
    title: Label.APP_BAR_LABEL.HOME,
    location: PageHref.PAGE_HREF.HOME,
    id: PageHref.PAGE_ID.HOME,
  },
  {
    title: Label.APP_BAR_LABEL.PRODUCTS,
    location: PageHref.PAGE_HREF.PRODUCTS,
    id: PageHref.PAGE_ID.PRODUCTS,
  },
];

const renovationImages = [renovation_01, renovation_02, renovation_03];

export default function RenovationPage() {
  const [open, setOpen] = useState(false);

  const handleClose = (event) => {
    scrollToHref(event, null);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <ElevationScroll>
        <AppBar
          position="fixed"
          color="transparent"
          sx={{ backdropFilter: "blur(30px)" }}
        >
          <Header handleToggle={handleToggle} app_bars={options} />
        </AppBar>
      </ElevationScroll>

      <Box
        sx={{
          backgroundImage: `url(${imageList_02})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        mb={5}
        mt={14}
        pt={10}
        pb={10}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} />
            <Grid item xs={12} />
            <Grid item xs={12} justifyContent={"center"} mb={"46px"}>
              <Typography
                sx={{
                  font: "normal normal 600 157px/214px Open Sans",
                  textShadow:
                    "inset 0px 3px 6px #00000029, 0px 3px 6px #0000004D",
                  "@media (max-width:768px)": {
                    font: "normal normal 600 40px/55px Open Sans;",
                  },
                  color: Colour.WHITE,
                  letterSpacing: 0,
                  textAlign: "center",
                }}
              >
                {"Renovation"}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  font: "normal normal 600 32px/43px Open Sans",
                  "@media (max-width:768px)": {
                    font: "normal normal 600 16px/22px Open Sans",
                  },
                  color: Colour.WHITE,
                  textAlign: "left",
                }}
              >
                {
                  "With our growth in experience over the years, we provide an extensive range of renovation solutions to our clients."
                }
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box mb={5}>
        <Container>
          <Grid container rowSpacing={4}>
            <Grid item>
              <Typography
                sx={{
                  font: "normal normal 300 24px/33px Open Sans",
                  "@media (max-width:768px)": {
                    font: "normal normal 300 16px/22px Open Sans",
                  },
                  textAlign: "jusify",
                  color: "#333",
                }}
              >
                {
                  "At Setia Hikmat, we have been in the construction and renovation industry for some time, and over the years we have gained a significant amount of experience in this field. As a result, we are able to offer an extensive range of renovation solutions to our clients. These solutions can include a variety of renovation services, such as kitchen and bathroom renovations, home extensions, basement finishing, and more."
                }
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  font: "normal normal 300 24px/33px Open Sans",
                  "@media (max-width:768px)": {
                    font: "normal normal 300 16px/22px Open Sans",
                  },
                  textAlign: "jusify",
                  color: "#333",
                }}
              >
                {
                  "Our experience in the industry has allowed us to develop a deep understanding of what our clients need when it comes to renovation services. We have seen firsthand the different challenges that can arise during a renovation project, and we have developed the skills and expertise needed to overcome these challenges and deliver successful projects."
                }
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  font: "normal normal 300 24px/33px Open Sans",
                  "@media (max-width:768px)": {
                    font: "normal normal 300 16px/22px Open Sans",
                  },
                  textAlign: "jusify",
                  color: "#333",
                }}
              >
                {
                  "By offering an extensive range of renovation solutions, we are able to cater to the needs of a wide range of clients. Whether you are looking for a simple bathroom remodel or a complete home renovation, we have the experience and expertise needed to get the job done right."
                }
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  font: "normal normal 300 24px/33px Open Sans",
                  "@media (max-width:768px)": {
                    font: "normal normal 300 16px/22px Open Sans",
                  },
                  textAlign: "jusify",
                  color: "#333",
                }}
              >
                {
                  "Overall, our growth in experience over the years has allowed us to expand our range of renovation solutions, providing clients with a comprehensive set of services that can be customized to meet their specific needs. By offering these solutions, we are able to help our clients transform their homes or commercial spaces into the spaces they have always envisioned."
                }
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box mb={5}>
        <Container>
          <Grid
            sx={{
              borderBottom: "5px solid #FECCBC",
              marginLeft: 5,
              marginRight: 5,
            }}
          />
        </Container>
      </Box>
      <Box mb={5}>
        <Container>
          <Grid container justifyContent={"space-evenly"} rowSpacing={5}>
            {renovationImages.map((image, index) => (
              <Grid key={index} item>
                <img
                  src={image}
                  alt="Description"
                  style={{ width: "300px", height: "200px" }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <MenuBackdrop handleClose={handleClose} options={options} open={open} />
    </>
  );
}
