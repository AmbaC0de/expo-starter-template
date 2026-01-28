import React, { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

type IconContainerProps = PropsWithChildren<{
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  rippleColor?: string;
}>;

const IconButton = ({
  children,
  onPress,
  style,
  disabled,
  rippleColor,
  contentStyle,
}: IconContainerProps) => {
  return (
    <BorderlessButton
      onPress={onPress}
      style={[styles.container, style]}
      enabled={!disabled}
      rippleColor={rippleColor}
    >
      <View style={[styles.content, contentStyle]}>{children}</View>
    </BorderlessButton>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: 8,
    borderRadius: 24,
  },
});

export default IconButton;
