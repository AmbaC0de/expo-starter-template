import { useTheme } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ViewStyle, DimensionValue, StyleProp } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface SkeletonItemProps {
  width?: DimensionValue;
  height?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  borderRadius?: number;
}

export const SkeletonItem = ({
  width = "100%",
  height = 16,
  color,
  style,
  borderRadius = 4,
}: SkeletonItemProps) => {
  const { colors } = useTheme();
  const defaultColor = color ?? colors.card;
  const opacity = useSharedValue(0.3);

  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.7, { duration: 800 }),
        withTiming(0.3, { duration: 800 }),
      ),
      -1,
      false,
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        {
          width,
          height,
          backgroundColor: defaultColor,
          borderRadius,
        },
        animatedStyle,
        style,
      ]}
    />
  );
};
