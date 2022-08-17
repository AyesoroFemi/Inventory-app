import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabsNavigator } from "./src/screens/ButtomTabs.navigator";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
