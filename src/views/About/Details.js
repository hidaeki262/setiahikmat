import { Text } from "../../components";

export const Details = ({ content, ...props }) => {
  return (
    <>
      <h1 style={{ color: "#707070" }}>{content.companyName}</h1>
      <Text isBold isContent {...props}>
        {content.about}
      </Text>
    </>
  );
};
