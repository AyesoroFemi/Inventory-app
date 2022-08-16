import React from "react";
import { Pressable, View, StyleSheet } from "react-native";

export const CustomButton = ({ children }) => {
  return (
    <View>
      <Pressable>
        <Text>{children}</Text>
      </Pressable>
    </View>
  );
};

// const styles = StyleSheet.create({
//   borderWidth: 4,
//   borderColor: "red",
// });
