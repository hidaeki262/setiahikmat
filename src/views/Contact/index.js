import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { BasicButton, HoverComponent, Input, Text } from "../../components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Label } from "../../constants";
import { companyNameLogo } from "../../assets";
import AddressMap from "../../components/Map";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Contact() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  const label = {
    title: "Let's Start a Conversation",
    address: "Company Address Selangor, Malaysia",
    email: "Email Address",
    contactNumber: "Contact Number",
  };

  const onSubmit = () => {};

  const SectionTitle = () => {
    return (
      <HoverComponent width="580px">
        <Text isBold isTitle>
          {label.title}
        </Text>
      </HoverComponent>
    );
  };

  const CompanyDetails = () => (
    <Grid container rowSpacing={5}>
      <Grid xs={12} sm={7} item>
        <Grid container rowSpacing={3}>
          <Grid xs={12} item>
            <Box
              component="img"
              sx={{
                height: matchesMD ? 120 : matchesSM ? 100 : 80,
              }}
              alt="Contact Logo"
              src={companyNameLogo}
            />
          </Grid>
          <Grid container item>
            <Grid xs={2} item>
              <LocationOnIcon fontSize={"large"} />
            </Grid>
            <Grid xs={10} item>
              <Text>{label.address}</Text>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid xs={2} item>
              <EmailIcon fontSize={"large"} />
            </Grid>
            <Grid xs={10} item>
              <Text>{label.email}</Text>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid xs={2} item>
              <PhoneIcon fontSize={"large"} />
            </Grid>
            <Grid xs={10} item>
              <Text>{label.contactNumber}</Text>
            </Grid>
          </Grid>
          <Grid xs={12} item>
            <AddressMap />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  const ContactDetails = () => (
    <Grid xs={12} item>
      <Grid container rowSpacing={2}>
        <Grid xs={12} item>
          <Input label={Label.INPUT_LABEL.Name} />
        </Grid>
        <Grid xs={12} item>
          <Input label={Label.INPUT_LABEL.Email} />
        </Grid>
        <Grid xs={12} item>
          <Input label={Label.INPUT_LABEL.Contact} />
        </Grid>
        <Grid xs={12} item>
          <Input label={Label.INPUT_LABEL.Address} multiline rows={4} />
        </Grid>
        <Grid xs={12} item>
          <Input label={Label.INPUT_LABEL.Message} multiline rows={4} />
        </Grid>
        <Grid xs={12} item>
          <BasicButton
            sx={{
              background:
                "transparent linear-gradient(180deg, #FF8A69 0%, #D9593D 100%) 0% 0% no-repeat padding-box",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "16px",
              width: "100%",
            }}
            label={Label.FORM_LABEL.SUBMIT}
            variant="contained"
            onClick={onSubmit}
          />
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Box sx={{ backgroundColor: "#F8EAE7" }}>
      <Container sx={{ paddingBottom: 9 }}>
        <Grid container rowSpacing={5}>
          <Grid xs={12} item>
            <SectionTitle />
          </Grid>
          <Grid xs={12} sm={6} item>
            <CompanyDetails />
          </Grid>
          <Grid xs={12} sm={6} item>
            <ContactDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
