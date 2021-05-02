import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { BottomTab } from "./components/BottomTab";

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  BottomTab: { screen: BottomTab },
});

const AppContainer = createAppContainer(switchNavigator);
