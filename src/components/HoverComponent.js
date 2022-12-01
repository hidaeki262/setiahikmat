import * as React from "react";
import Slide from "@mui/material/Slide";
import { Grid } from "@mui/material";

export default function HoverComponent({ children, width = "300px" }) {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <>
      <Grid
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        {children}
      </Grid>

      <Slide direction="right" in={isHovering}>
        <Grid
          sx={{
            marginLeft: "30px",
            width: isHovering ? width : "0px",
            height: "7px",
            borderRadius: "1px",
            backgroundColor: "#FECCBC",
          }}
        />
      </Slide>
    </>
  );
}
