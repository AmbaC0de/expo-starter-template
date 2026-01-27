import React from "react";
import BottomActionSheet from "./BottomActionSheet";
import { Text } from "@react-navigation/elements";
import { useSheetPayload } from "react-native-actions-sheet";

const DefaultSheet = () => {
  const { title, message } = useSheetPayload("default-sheet");
  return (
    <BottomActionSheet id="default-sheet">
      <Text>{title}</Text>
      <Text>{message}</Text>
    </BottomActionSheet>
  );
};

export default DefaultSheet;
