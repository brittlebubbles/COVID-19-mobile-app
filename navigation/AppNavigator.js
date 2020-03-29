import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import CountryScreen from "../screens/CountryScreen";
import GlobalScreen from "../screens/GlobalScreen";

const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator({
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: "Home",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-home" size={24} color={tintColor} />
          )
        }
      },
      Country: {
        screen: CountryScreen,
        navigationOptions: {
          tabBarLabel: "Country",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-flag" size={24} color={tintColor} />
          )
        }
      },
      Global: {
        screen: GlobalScreen,
        navigationOptions: {
          tabBarLabel: "Global",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="md-globe" size={24} color={tintColor} />
          )
        }
      }
    })
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(
  createSwitchNavigator({
    App: AppContainer
  })
);
