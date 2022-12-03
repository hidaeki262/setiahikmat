import * as React from "react";
import { Box } from "@mui/material";
import { construction_worker } from "../../assets";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Image = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm")); // sm onwards

  return (
    <Box
      component="img"
      sx={{
        height: matches ? 350 : 200, // xs: 300 sm: 350
        boxShadow: "0px 3px 6px #00000029",
      }}
      alt="Construction Worker"
      src={construction_worker}
    />
  );
};
