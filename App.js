import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Home />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
