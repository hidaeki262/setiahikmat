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
  ...props
}) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color={color}
        onClick={onClick}
        variant="text"
        href={href}
        {...props}
      >
        {label}
      </Button>
    </ThemeProvider>
  );
}
