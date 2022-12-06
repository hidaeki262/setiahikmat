import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input({
  variant = "outlined",
  value,
  onChange,
  ...props
}) {
  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

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
      <TextField
        onChange={handleChange}
        value={value}
        InputLabelProps={{
          sx: {
            font: "normal normal normal 16px/22px Open Sans",
          },
        }}
        InputProps={{
          sx: {
            font: "normal normal normal 16px/22px Open Sans",
          },
        }}
        id="standard-basic"
        variant={variant}
        {...props}
      />
    </Box>
  );
}
