import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid, Typography } from "@mui/material";
import { BasicButton, Input } from "../../components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Label, PageHref } from "../../constants";

export default function Contact() {
  const CompanyDetails = () => (
    <Grid container rowSpacing={5}>
      <Grid xs={12} item>
        <Typography variant="h4">{"get in touch"}</Typography>
      </Grid>
      <Grid xs={7} item>
        <Grid container rowSpacing={3}>
          <Grid xs={12} item>
            <Typography variant="body1">
              {
                "We welcome business associates from various industrial sectors who are keen to work with us. Please contact us if you have questions. Thanks."
              }
            </Typography>
          </Grid>
          <Grid container item>
            <Grid xs={1} item>
              <LocationOnIcon fontSize={"small"} />
            </Grid>
            <Grid xs={11} item>
              <Typography variant="body1">
                {
                  "No. 6-1-1, Diamond Square Jalan Semarak API 2 Off Jalan Gombak 53000 Kuala Lumpur"
                }
              </Typography>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid xs={1} item>
              <EmailIcon fontSize={"small"} />
            </Grid>
            <Grid xs={11} item>
              <Typography variant="body1">
                {"info@maximasolaris.com"}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid xs={1} item>
              <PhoneIcon fontSize={"small"} />
            </Grid>
            <Grid xs={11} item>
              <Typography variant="body1">{"03-5870 4412"}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  const ContactDetails = () => (
    <Grid container rowSpacing={5}>
      <Grid xs={12} item>
        <Typography variant="h4">{"send us a message"}</Typography>
      </Grid>
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
            <BasicButton label={Label.FORM_LABEL.SUBMIT} variant="contained" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  // TODO: Update Contact page

  return (
    <Box
      id={PageHref.PAGE_ID.CONTACT}
      sx={{
        height: 300,
      }}
    >
      <Container>
        <Grid container>
          <Grid xs={12} md={6} item>
            <CompanyDetails />
          </Grid>
          <Grid xs={12} md={6} item>
            <ContactDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
