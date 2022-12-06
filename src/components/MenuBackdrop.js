import * as React from "react";
import Box from "@mui/material/Box";
import { BasicButton } from "../components";
import { Backdrop, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Logo } from "../views/Header/Logo";

export default function MenuBackdrop(props) {
  const { handleClose, options, open } = props;
  return (
    <Backdrop
      sx={{
        backdropFilter: "blur(30px)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
      onClick={handleClose}
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
          {options.map((option, index) => (
            <Grid key={index} xs={12} item>
              <BasicButton
                sx={{ color: "#FFCCBC", width: "100%" }}
                key={index}
                label={option.title}
                onClick={(e) => handleClose(e, option.location)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Backdrop>
  );
}
