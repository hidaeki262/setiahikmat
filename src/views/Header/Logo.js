import { Box } from "@mui/material";
import * as React from "react";

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
        width: 200,
        cursor: "pointer",
      }}
      alt="Company logo"
      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      onClick={onNavigate}
    />
  );
};
