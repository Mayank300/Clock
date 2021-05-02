import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "react-native-elements";
import Clock from "../screens/Clock";
import StopWatch from "../screens/StopWatch";
import { AddButton } from "./AddButton";

export const BottomTab = createBottomTabNavigator(
  {
    Clock: {
      screen: Clock,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon size={35} color={tintColor} name="clock" type="feather" />
        ),
        tabBarLabel: "Clock",
      },
    },
    Adding: {
      screen: () => null,
      navigationOptions: () => ({
        tabBarIcon: <AddButton />,
      }),
    },
    StopWatch: {
      screen: StopWatch,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon size={35} color={tintColor} name="watch" type="feather" />
        ),
        tabBarLabel: "Stop Watch",
      },
    },
  },
  {
    initialRouteName: "Clock",
    shifting: true,

    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#F8F8F8",
      inactiveTintColor: "#586589",
      style: {
        backgroundColor: "#171F33",
      },
    },
  }
);
