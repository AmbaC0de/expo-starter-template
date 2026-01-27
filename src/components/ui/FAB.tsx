import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

interface FABProps {
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  style?: ViewStyle;
}

const FAB = ({ onPress, icon = "add", style }: FABProps) => {
  const { colors } = useTheme();

  return (
    <BorderlessButton
      style={[styles.container, { backgroundColor: colors.primary }, style]}
      onPress={onPress}
      activeOpacity={1}
    >
      <View style={[{ backgroundColor: colors.primary }, styles.content]}>
        <Ionicons name={icon} size={26} color={colors.white} />
      </View>
    </BorderlessButton>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 25,
    right: 24,
    // width: 56,
    // height: 56,
    // borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    zIndex: 999,
  },
  content: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FAB;
