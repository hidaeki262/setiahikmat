import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  // add subsequent properties for more colors
  palette: {
    primary: {
      // black
      main: "#000",
    },
  },
});

export default function BasicButton({
  label,
  href,
  color = "primary",
  onClick,
  variant = "text",
  sx,
  ...props
}) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{
          font: "normal normal 600 20px/27px Open Sans",
          ...sx,
        }}
        color={color}
        onClick={onClick}
        variant={variant}
        href={href}
        {...props}
      >
        {label}
      </Button>
    </ThemeProvider>
  );
}
