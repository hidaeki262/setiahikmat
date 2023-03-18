import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  construction_01,
  construction_02,
  construction_03,
  construction_04,
  imageList_01,
} from "../../assets";
import { Colour } from "../../constants/Colour";

const items = [
  {
    description:
      "Setia Hikmat is a one-stop shop for renovation and construction services, meaning that we offer a wide range of services that cover all aspects of your renovation or construction project. This can include services such as design, planning, project management, construction, and finishing touches.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageSrc: construction_04,
  },
  {
    description:
      "Our company also provides comprehensive construction services that cover both commercial and residential projects. This means that we can handle projects of various sizes and types, from small-scale renovations to large-scale commercial construction projects.",
    imageSrc: construction_03,
  },
  {
    description: `The phrase "your sweet home" is a reference to residential properties, highlighting that we are able to offer comprehensive services for homeowners looking to renovate or build their dream home. By using this phrase, we are focused on providing personalised and attentive service to homeowners who want to create a comfortable and welcoming living space.`,
    imageSrc: construction_01,
  },
  {
    description:
      "Overall, Setia Hikmat is able to provide a complete range of renovation and construction services, from planning to execution, for both commercial and residential projects. By offering a one-stop shop for all your renovation and construction needs, we make it easy for you to get your projects completed efficiently and effectively.",
    imageSrc: construction_02,
  },
];

function DescriptionImageComponent({ items }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md")); // sm onwards

  const renderImg = (item) => (
    <Grid item xs={12} sm={4}>
      <img
        src={item.imageSrc}
        alt="Description"
        style={{ width: "300px", height: "200px" }}
      />
    </Grid>
  );

  const renderDesc = (item) => (
    <Grid
      sx={{ borderBottom: "5px solid #FECCBC", paddingBottom: 4 }}
      item
      xs={12}
      sm={8}
    >
      <Typography
        sx={{
          font: "normal normal 300 24px/33px Open Sans",
          "@media (max-width:768px)": {
            font: "normal normal 600 16px/22px Open Sans",
          },
          color: "#333",
          textAlign: "left",
          height: "100%",
        }}
      >
        {item.description}
      </Typography>
    </Grid>
  );
  return (
    <Grid container spacing={2}>
      {items.map((item, index) => {
        console.log(index, index % 2 === 0);
        return (
          <React.Fragment key={index}>
            {!matches ? (
              <>
                {renderDesc(item)}
                {renderImg(item)}
              </>
            ) : index % 2 === 0 ? (
              <>
                {renderDesc(item)}
                {renderImg(item)}
              </>
            ) : (
              <>
                {renderImg(item)}
                {renderDesc(item)}
              </>
            )}
          </React.Fragment>
        );
      })}
    </Grid>
  );
}

export default function ConstructionPage() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${imageList_01})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: 5,
        }}
        mb={5}
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
                {"Construction"}
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
                  "We are a one-stop renovation company that provides comprehensive construction services covering commercial and your sweet home."
                }
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box mb={5}>
        <Container>
          <DescriptionImageComponent items={items} />
        </Container>
      </Box>
    </>
  );
}
