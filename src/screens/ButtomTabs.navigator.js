import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Search from "./Search";
import Shopping from "./Shopping";
import Inventory from "./Inventory";
import Menu from "./Menu";
import {
  CollectionIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/solid";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <HomeIcon color={color} size={size} />;
          }
          if (route.name === "Search") {
            return <SearchIcon color={color} size={size} />;
          }
          if (route.name === "Shopping") {
            return <ShoppingBagIcon color={color} size={size} />;
          }
          if (route.name === "Menu") {
            return <MenuIcon color={color} size={size} />;
          }
          if (route.name === "Inventory") {
            return <CollectionIcon color={color} size={size} />;
          }
          return null;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <BottomTabs.Screen name="Search" component={Search} />
      <BottomTabs.Screen name="Shopping" component={Shopping} />
      <BottomTabs.Screen name="Inventory" component={Inventory} />
      <BottomTabs.Screen name="Menu" component={Menu} />
    </BottomTabs.Navigator>
  );
};
