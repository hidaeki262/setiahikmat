import { Text } from "../../components";

export const Details = ({ content, ...props }) => {
  return (
    <Text isBold isContent {...props}>
      {content}
    </Text>
  );
};
