import * as React from "react";
import { Grid } from "@mui/material";
import { BasicButton, Input } from "../../components";
import { Label } from "../../constants";
import emailjs from "@emailjs/browser";

const service_id = "service_fbezdeo";
const template_id = "template_yhx45sc";
const public_key = "Y2rPS3rgRvKJzJ-S_";

export default function ContactDetails(params) {
  const [message, setMessage] = React.useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const isValidName = !!message.name;
    const isValidEmail = !!message.email && !onValidateEmail(message.email);
    const isValidSubject = !!message.address;
    const isValidMessage = !!message.message;
    const isValid =
      isValidName && isValidEmail && isValidSubject && isValidMessage;

    const templateParams = {
      from_name: message.name,
      from_email: message.email,
      from_subject: message.address,
      from_message: message.message,
    };

    if (isValid) {
      emailjs.send(service_id, template_id, templateParams, public_key).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent!");
          setMessage({
            name: "",
            email: "",
            address: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          setMessage({
            name: "",
            email: "",
            address: "",
            message: "",
          });
        }
      );
    }
  };

  const onValidateName = (val) => {
    if (val) {
      return !val;
    }
    return;
  };

  const onValidateEmail = (val) => {
    if (val) {
      if (val.includes("@")) {
        return !val;
      } else {
        return true;
      }
    }
    return;
  };

  const onValidateSubject = (val) => {
    if (val) {
      return !val;
    }
    return;
  };

  const onValidateMessage = (val) => {
    if (val) {
      return !val;
    }
    return;
  };

  return (
    <Grid xs={12} item>
      <Grid container rowSpacing={2}>
        <Grid xs={12} item>
          <Input
            error={onValidateName(message.name)}
            value={message.name}
            onChange={(val) => setMessage((prev) => ({ ...prev, name: val }))}
            label={Label.INPUT_LABEL.Name}
          />
        </Grid>
        <Grid xs={12} item>
          <Input
            error={onValidateEmail(message.email)}
            type="email"
            value={message.email}
            onChange={(val) => setMessage((prev) => ({ ...prev, email: val }))}
            label={Label.INPUT_LABEL.Email}
          />
        </Grid>
        <Grid xs={12} item>
          <Input
            error={onValidateSubject(message.address)}
            value={message.address}
            onChange={(val) =>
              setMessage((prev) => ({ ...prev, address: val }))
            }
            label={Label.INPUT_LABEL.Address}
          />
        </Grid>
        <Grid xs={12} item>
          <Input
            error={onValidateMessage(message.message)}
            value={message.message}
            onChange={(val) =>
              setMessage((prev) => ({ ...prev, message: val }))
            }
            label={Label.INPUT_LABEL.Message}
            multiline
            rows={4}
          />
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
}
