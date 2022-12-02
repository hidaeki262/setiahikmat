import * as React from "react";
import { HoverComponent, Text } from "../../components";

export const Title = ({ title }) => {
  return (
    <HoverComponent width="280px">
      <Text isBold isTitle>
        {title}
      </Text>
    </HoverComponent>
  );
};
