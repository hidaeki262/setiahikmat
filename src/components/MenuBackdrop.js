import * as React from "react";
import Box from "@mui/material/Box";
import { BasicButton } from "../components";
import { Backdrop, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Logo } from "../views/Header/Logo";
import { Label } from "../constants";

const redirectLinks = [
  {
    label: "Construction",
    path: "./construction",
  },
  {
    label: "Renovation",
    path: "./renovation",
  },
  {
    label: "Customise",
    path: "./customise",
  },
];

export default function MenuBackdrop(props) {
  const { handleClose, options, open } = props;

  const handleClickHome = (event) => {
    event.preventDefault();
    window.location.assign("./");
  };

  const handleRedirect = (event, route) => {
    event.preventDefault();
    window.location.assign(route);
  };

  return (
    <Backdrop
      sx={{
        backdropFilter: "blur(30px)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <Box sx={{ margin: 5 }}>
        <Grid container rowSpacing={5}>
          <Grid xs={3} item>
            <Logo />
          </Grid>
          <Grid sx={{ textAlign: "end" }} xs={9} item>
            <CloseIcon
              sx={{ margin: 1, cursor: "pointer", color: "#D9593D" }}
              onClick={handleClose}
              fontSize="large"
            />
          </Grid>
          {options.map((option, index) => {
            if (option.title === Label.APP_BAR_LABEL.HOME) {
              return (
                <Grid key={index} xs={12} item>
                  <BasicButton
                    sx={{ color: "#FFCCBC", width: "100%" }}
                    key={index}
                    label={option.title}
                    onClick={handleClickHome}
                  />
                </Grid>
              );
            } else if (option.title === Label.APP_BAR_LABEL.PRODUCTS) {
              return (
                <React.Fragment key={index}>
                  {redirectLinks.map((link, idx) => (
                    <Grid key={idx} xs={12} item>
                      <BasicButton
                        sx={{ color: "#FFCCBC", width: "100%" }}
                        key={idx}
                        label={link.label}
                        onClick={(e) => handleRedirect(e, link.path)}
                      />
                    </Grid>
                  ))}
                </React.Fragment>
              );
            } else {
              return (
                <Grid key={index} xs={12} item>
                  <BasicButton
                    sx={{ color: "#FFCCBC", width: "100%" }}
                    key={index}
                    label={option.title}
                    onClick={(e) => handleClose(e, option.location)}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
    </Backdrop>
  );
}
