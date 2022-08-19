import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { View, Text, StyleSheet } from "react-native";
import { ChevronDownIcon } from "react-native-heroicons/solid";

const SelectInput = ({ onSelect, value }) => {
  const shopping = ["Art", "Electronics", "Jewelry", "Musical Instrument"];

  const dropdownStyles = {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 2,
    width: "90%",
  };

  return (
    <View>
      <Text style={styles.dropdownText}>Category</Text>
      <SelectDropdown
        value={value}
        onChangeText={onSelect}
        dropdownStyle={{
          backgroundColor: "#fff",
          textAlign: "left",
          height: 150,
        }}
        buttonStyle={dropdownStyles}
        rowStyle={{}}
        rowTextStyle={{ textAlign: "left", height: 30 }}
        defaultButtonText="Select a Category..."
        buttonTextStyle={{ color: "#00000", textAlign: "left" }}
        data={shopping}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        renderDropdownIcon={(selectedItem, index) => {
          return <ChevronDownIcon />;
        }}
      />
    </View>
  );
};

export default SelectInput;

const styles = StyleSheet.create({
  dropdownText: {
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 2,
    marginHorizontal: 16,
  },
});
