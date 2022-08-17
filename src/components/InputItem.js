import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const InputItem = ({ label, textInputConfig }) => {
  const inputStyles = [styles.Input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.multilineInput);
  }

  return (
    <View style={styles.InputContainer}>
      <Text style={styles.Label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default InputItem;

const styles = StyleSheet.create({
  InputContainer: {
    marginHorizontal: 16,
  },
  Label: {
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 2,
  },
  Input: {
    backgroundColor: "#Fff",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 12,
    borderRadius: 10,
    elevation: 10,
  },
  multilineInput: {
    minHeight: 150,
    textAlignVertical: "top",
  },
});
