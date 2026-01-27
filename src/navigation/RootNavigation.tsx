import { ThemeProvider } from "@react-navigation/native";
import Sheets from "@src/components/bottom-sheets/sheets";
import { useThemeManager } from "@src/theme/themeManager";
import React from "react";
import { SheetProvider } from "react-native-actions-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from ".";
import * as SplashScreen from "expo-splash-screen";
import { createURL } from "expo-linking";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

const prefix = createURL("/");

const RootNavigation = () => {
  const { appTheme } = useThemeManager();

  return (
    <ThemeProvider value={appTheme}>
      <SafeAreaProvider>
        <StatusBar style={appTheme.dark ? "light" : "dark"} />
        <SheetProvider>
          <Sheets />
          <Navigation
            theme={appTheme}
            linking={{
              enabled: "auto",
              prefixes: [prefix],
            }}
          />
        </SheetProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default RootNavigation;
