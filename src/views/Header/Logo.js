import { Box } from "@mui/material";
import * as React from "react";
import { companyIcon } from "../../assets";

export const Logo = () => {
  const onNavigate = () => {
    const hostName = "http://setiahikmat.com/";
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
      src={companyIcon}
      onClick={onNavigate}
    />
  );
};
