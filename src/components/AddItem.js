import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { CameraIcon } from "react-native-heroicons/solid";
import InputItem from "./InputItem";
import SelectInput from "./SelectInput";

const AddItem = (props) => {
  const [nameValue, setNameValue] = useState("");
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [description, setDescription] = useState("");

  const nameInputHandler = (enteredName) => {
    setNameValue(enteredName);
  };

  const valueHandler = (enteredValue) => {
    setValue(enteredValue);
  };

  const selectHandler = (enteredSelect) => {
    setSelectValue(enteredSelect);
  };

  const DesHandler = (enteredText) => {
    setDescription(enteredText);
  };

  return (
    <ScrollView>
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
                value: nameValue,
              }}
            />
            <InputItem
              label="Value"
              textInputConfig={{
                keyboardType: "decimal-pad",
                placeholder: "700",
                value: value,
                onChangeText: valueHandler,
              }}
            />
            <SelectInput onSelect={selectHandler} value={selectValue} />
            <InputItem
              label="Description"
              textInputConfig={{
                placeholder: "Optional",
                multiline: true,
                value: description,
                onChangeText: DesHandler,
              }}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
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
    borderRadius: 50,
  },
  CameraInput: {
    alignItems: "center",
    justifyContent: "center",
  },
});
