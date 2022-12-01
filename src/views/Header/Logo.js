import { Box } from "@mui/material";
import * as React from "react";
import { companyNameLogo } from "../../assets";

export const Logo = () => {
  const onNavigate = () => {
    const hostName = "http://localhost:3000/";
    window.location.assign(hostName);
  };

  return (
    <Box
      component="img"
      sx={{
        height: 78,
        cursor: "pointer",
      }}
      alt="Company logo"
      src={companyNameLogo}
      onClick={onNavigate}
    />
  );
};
