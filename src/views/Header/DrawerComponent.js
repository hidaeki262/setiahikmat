import * as React from "react";
import { Drawer, Grid, IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Label, PageHref } from "../../constants";
import { BasicButton } from "../../components";
import CloseIcon from "@mui/icons-material/Close";

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
  {
    title: Label.APP_BAR_LABEL.ABOUT,
    location: PageHref.PAGE_HREF.ABOUT,
    id: PageHref.PAGE_ID.ABOUT,
  },
  {
    title: Label.APP_BAR_LABEL.CONTACT,
    location: PageHref.PAGE_HREF.CONTACT,
    id: PageHref.PAGE_ID.CONTACT,
  },
];

export default function DrawerComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleClickListItem}
        sx={{
          mr: 2,
          display: {
            xs: "block",
            md: "none",
          },
          color: "#D9593D",
        }}
      >
        <MenuRoundedIcon fontSize="large" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={handleClose}>
        <Grid container rowSpacing={1}>
          <Grid sx={{ textAlign: "end" }} xs={12} item>
            <CloseIcon
              sx={{ margin: 1, cursor: "pointer", color: "#D9593D" }}
              onClick={handleClose}
              fontSize="large"
            />
          </Grid>
          {options.map((option, index) => (
            <Grid xs={12} item>
              <BasicButton
                sx={{ color: "#707070", width: "100%" }}
                key={index}
                href={option.location}
                label={option.title}
                onClick={handleMenuItemClick}
              />
            </Grid>
          ))}
        </Grid>
      </Drawer>
    </>
  );
}
