import { Typography } from "@mui/material";

export default function Text({ children, sx, ...props }) {
  return (
    <Typography
      sx={{
        font: "normal normal 600 20px/27px Open Sans",
        ...sx,
      }}
      color={"#333333"}
      {...props}
    >
      {children}
    </Typography>
  );
}
