import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { useAppSelector } from "@src/store/hooks";
import { selectThemeMode, ThemeMode } from "@src/store/slices/theme";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export const AppLightTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    // Add custom colors here if needed
  },
  fonts: {
    ...DefaultTheme.fonts,
  },
};

export const AppDarkTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    // Add custom colors here if needed
  },
  fonts: {
    ...DarkTheme.fonts,
  },
};

export const useThemeManager = () => {
  const scheme = useColorScheme();
  const themeMode = useAppSelector(selectThemeMode);
  const [appTheme, setAppTheme] = useState<Theme>(
    scheme === "dark" ? AppDarkTheme : AppLightTheme,
  );

  const getTheme = (value: ThemeMode) => {
    switch (value) {
      case "light":
        return AppLightTheme;
      case "dark":
        return AppDarkTheme;
      default:
        return scheme === "dark" ? AppDarkTheme : AppLightTheme;
    }
  };

  useEffect(() => {
    setAppTheme(getTheme(themeMode.value));
  }, [themeMode, scheme]);

  return { appTheme };
};
