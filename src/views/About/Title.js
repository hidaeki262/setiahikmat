import * as React from "react";
import { Typography } from "@mui/material";
import { HoverComponent } from "../../components";

export const Title = ({ title }) => {
  return (
    <HoverComponent width="280px">
      <Typography
        sx={{
          font: "normal normal 600 48px/65px Open Sans",
        }}
        color={"#A12814"}
      >
        {title}
      </Typography>
    </HoverComponent>
  );
};
