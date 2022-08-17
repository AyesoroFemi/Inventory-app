import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { CameraIcon } from "react-native-heroicons/solid";
import InputItem from "./InputItem";

const AddItem = (props) => {
  const nameInputHandler = () => {};

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.wrapper}>
        <View style={styles.Container}>
          <View>
            <TouchableOpacity onPress={props.onCancel}>
              <Text style={styles.ContainerText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.ContainerText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.CameraContainer}>
          <TouchableOpacity style={styles.CameraInput}>
            <CameraIcon size={48} color="blue" />
            <Text style={styles.ContainerText}>Add photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputForm}>
          <InputItem
            label="Name"
            textInputConfig={{
              keyboardType: "default",
              placeholder: "Bracelet",
              onChangeText: nameInputHandler,
            }}
          />
          <InputItem
            label="Value"
            textInputConfig={{
              keyboardType: "decimal-pad",
              placeholder: 700,
              onChangeText: nameInputHandler,
            }}
          />
          <InputItem
            label="Description"
            textInputConfig={{
              placeholder: "Optional",
              multiline: true,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#e5e7eb",
    flex: 1,
  },
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  ContainerText: {
    fontSize: 16,
    fontWeight: "600",
  },
  inputForm: {
    marginTop: 16,
  },
  CameraContainer: {
    marginTop: 50,
    backgroundColor: "#f1f5f9",
    borderStyle: "dashed",
    borderColor: "#ccc",
    borderWidth: 2,
    marginHorizontal: 120,
    paddingVertical: 32,
    borderRadius: "50%",
  },
  CameraInput: {
    alignItems: "center",
    justifyContent: "center",
  },
});
