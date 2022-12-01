import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input({ variant = "outlined", ...props }) {
  // TODO: Update Input design
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "100%" },
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #00000029",
        borderRadius: "8px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" variant={variant} {...props} />
    </Box>
  );
}
