import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // TODO: Update Header page
  return (
    <Box
      sx={{
        height: 150,
        backgroundColor: "lightblue",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container>
          <Grid xs={2}>
            <Button href="#logo">{"LOGO"}</Button>
          </Grid>
          <Grid xs={10}>
            <Grid container flexDirection={"row-reverse"}>
              <Stack
                sx={{
                  mr: 2,
                  display: {
                    sm: "block",
                    xs: "none",
                  },
                }}
                direction="row"
                spacing={5}
              >
                <Button href="#home">{"Home"}</Button>
                <Button href="#about">{"About"}</Button>
                <Button href="#contact">{"Contact"}</Button>
              </Stack>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleClick}
                sx={{
                  mr: 2,
                  display: {
                    xs: "block",
                    sm: "none",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>{"Home"}</MenuItem>
                <MenuItem onClick={handleClose}>{"About"}</MenuItem>
                <MenuItem onClick={handleClose}>{"Contact"}</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
