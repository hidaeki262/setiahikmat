import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Text({
  children,
  sx,
  isBold = false,
  isTitle = false,
  isContent = false,
  ...props
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const webFontStyles = {
    title: "48px",
    normal: "16px",
    content: "20px",
  };

  const mobileFontStyles = {
    title: "18px",
    normal: "14px",
    content: "14px",
  };

  const fontStyles = matches ? webFontStyles : mobileFontStyles;

  const colorStyles = {
    content: "#707070",
    normal: "#333333",
    title: "#A12814",
  };

  const color = isTitle
    ? colorStyles.title
    : isContent
    ? colorStyles.content
    : colorStyles.normal;

  return (
    <Typography
      sx={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: isBold ? "600" : "normal",
        fontSize: isTitle
          ? fontStyles.title
          : isContent
          ? fontStyles.content
          : fontStyles.normal,
        fontFamily: "Open Sans",
        color: color,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
