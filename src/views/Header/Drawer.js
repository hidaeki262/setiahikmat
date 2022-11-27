import * as React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { PageHref } from "../../constants";

const options = [
  {
    title: "Home",
    location: PageHref.HOME,
  },
  {
    title: "About",
    location: PageHref.ABOUT,
  },
  {
    title: "Prodcuts",
    location: PageHref.PRODUCTS,
  },
  {
    title: "Contact",
    location: PageHref.CONTACT,
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
    window.location.href = location;
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
        }}
      >
        <MenuIcon />
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
