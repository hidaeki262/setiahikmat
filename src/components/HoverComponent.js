import * as React from "react";

export default function HoverComponent({ children }) {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <>
      <div
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        {children}
      </div>
      <div
        style={{
          marginLeft: "30px",
          width: isHovering ? "314px" : "0px",
          height: "7px",
          backgroundColor: "#A12814",
          transition: "width 1s",
        }}
      />
    </>
  );
}
