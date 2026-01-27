import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import RootNavigation from "./navigation/RootNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootNavigation />
      </GestureHandlerRootView>
    </Provider>
  );
}
