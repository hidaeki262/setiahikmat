import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container, Grid, Menu, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Logo } from "./Logo";
import { Label } from "../../constants";
import { BasicButton } from "../../components";
import DrawerComponent from "./DrawerComponent";
import { scrollToHref } from "../../components/ScrollToTop";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  display: "block",
  width: "100%",
  height: "100%",
  padding: "6px 16px",
  boxSizing: "border-box",
};

export default function Header({ handleToggle, app_bars }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickHome = (event) => {
    event.preventDefault();
    window.location.assign("./");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Container>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid xs={3} item>
            <Logo />
          </Grid>
          <Grid xs={9} item>
            <Grid container flexDirection={"row-reverse"}>
              <Stack
                sx={{
                  mr: 2,
                  display: {
                    md: "block",
                    xs: "none",
                  },
                }}
                direction="row"
                spacing={5}
              >
                {app_bars.map((app_bar, index) => {
                  if (app_bar.title === Label.APP_BAR_LABEL.PRODUCTS) {
                    return (
                      <React.Fragment key={index}>
                        <BasicButton
                          sx={{
                            color: "#333333",
                          }}
                          label={app_bar.title}
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          onClick={handleClick}
                        />
                        <Menu
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem
                            onClick={() => {
                              handleClose();
                            }}
                          >
                            <a href={"/#/construction"} style={linkStyle}>
                              Construction
                            </a>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClose();
                            }}
                          >
                            <a href={"/#/renovation"} style={linkStyle}>
                              Renovation
                            </a>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClose();
                            }}
                          >
                            <a href={"/#/customise"} style={linkStyle}>
                              Customise
                            </a>
                          </MenuItem>
                        </Menu>
                      </React.Fragment>
                    );
                  } else if (app_bar.title === Label.APP_BAR_LABEL.HOME) {
                    return (
                      <BasicButton
                        key={index}
                        sx={{
                          color: "#333333",
                        }}
                        label={app_bar.title}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClickHome}
                      />
                    );
                  } else {
                    return (
                      <BasicButton
                        key={index}
                        sx={{
                          color: "#333333",
                        }}
                        label={app_bar.title}
                        onClick={(e) => scrollToHref(e, app_bar.location)}
                      />
                    );
                  }
                })}
              </Stack>
              <DrawerComponent handleToggle={handleToggle} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
