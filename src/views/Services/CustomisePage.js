import { Box, Container, Grid, Typography } from "@mui/material";
import {
  customization_01,
  customization_02,
  customization_03,
  customization_04,
  customization_05,
  customization_06,
  customization_07,
  imageList_03,
} from "../../assets";
import { Colour } from "../../constants/Colour";

const customiseImages = [
  customization_01,
  customization_02,
  customization_03,
  customization_04,
  customization_05,
  customization_06,
  customization_07,
];

export default function CustomisePage() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${imageList_03})`,
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
                {"Customise Component"}
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
                  "As a leading raw materials provider, we aim to meet our client’s needs in all aspects of construction and renovation at the best rate and pricing."
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
                  "At Setia Hikmat, we are a leading provider of raw materials for construction and renovation projects. This means that we supply a wide range of materials such as cement, steel, lumber, and more, that are essential for building and construction work."
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
                  "Our goal as a raw materials provider is to ensure that we meet the needs of our clients in all aspects of construction and renovation. This includes not only providing high-quality materials but also offering a range of services such as delivery and installation, that make the construction process easier and more efficient for our clients."
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
                  "In addition to providing high-quality materials and services, we are also committed to offering the best rates and pricing to our clients. We work hard to ensure that our pricing is competitive with other raw materials providers in the industry, while still maintaining the highest standards of quality and service."
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
                  "Overall, as a leading raw materials provider, we are dedicated to meeting the needs of our clients in all aspects of construction and renovation. By offering a comprehensive range of materials and services, and pricing them competitively, we make it easier and more cost-effective for our clients to complete their projects successfully."
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
            {customiseImages.map((image) => (
              <Grid item>
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
    </>
  );
}
