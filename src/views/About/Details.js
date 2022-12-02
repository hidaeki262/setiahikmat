import { Typography } from "@mui/material";

export const Details = ({ content, ...props }) => {
  return (
    <Typography
      sx={{
        font: "normal normal 600 20px/27px Open Sans",
      }}
      color={"#707070"}
      {...props}
    >
      {content}
    </Typography>
  );
};
