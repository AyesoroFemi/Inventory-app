import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { CameraIcon } from "react-native-heroicons/solid";
import { CustomButton } from "./CustomButton";

const AddItem = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.Container}>
        {/* <CustomButton>Cancel</CustomButton>
        <CustomButton>Add</CustomButton> */}
        <Text>Hello world</Text>
      </View>
      <View>
        {/* <TouchableOpacity>
          <CameraIcon />
          <Text>Add photo</Text>
        </TouchableOpacity> */}
      </View>
    </Modal>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  Container: {
    borderWith: 2,
    borderColor: "brown",
  },
});
