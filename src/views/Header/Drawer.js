import * as React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Label, PageHref } from "../../constants";

const options = [
  {
    title: Label.APP_BAR_LABEL.HOME,
    location: PageHref.PAGE_HREF.HOME,
    id: PageHref.PAGE_ID.HOME,
  },
  {
    title: Label.APP_BAR_LABEL.ABOUT,
    location: PageHref.PAGE_HREF.ABOUT,
    id: PageHref.PAGE_ID.ABOUT,
  },
  {
    title: Label.APP_BAR_LABEL.PRODUCTS,
    location: PageHref.PAGE_HREF.PRODUCTS,
    id: PageHref.PAGE_ID.PRODUCTS,
  },
  {
    title: Label.APP_BAR_LABEL.CONTACT,
    location: PageHref.PAGE_HREF.CONTACT,
    id: PageHref.PAGE_ID.CONTACT,
  },
];

export default function Drawer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const windowLocationHRef = `#${window.location.href.split("#")[1]}`;
  const [selectedIndex, setSelectedIndex] = React.useState(
    options.findIndex((option) => option.location === windowLocationHRef)
  );

  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index, location) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    // do something when path changes ...
    setSelectedIndex(
      options.findIndex((option) => option.location === windowLocationHRef)
    );
  }, [windowLocationHRef]);

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
        <MenuRoundedIcon />
      </IconButton>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            href={option.location}
            key={index}
            selected={index === selectedIndex}
            onClick={(event) =>
              handleMenuItemClick(event, index, option.location)
            }
          >
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
