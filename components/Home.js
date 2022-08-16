import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Card from "./Card";
import { PlusIcon } from "react-native-heroicons/solid";
import AddItem from "./AddItem";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const addItemHandler = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView>
      <View style={styles.InputContainer}>
        <Text style={styles.TextInvent}>Inventory</Text>
        <View style={styles.InputIcon}>
          <TouchableOpacity onPress={addItemHandler}>
            <PlusIcon size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      {modalVisible && <AddItem visible={modalVisible} />}
      <View style={styles.Container}>
        <Card
          imgUrl="https://images.pexels.com/photos/1497307/pexels-photo-1497307.jpeg?auto=compress&cs=tinysrgb&w=800"
          title="Cartier Ring"
          amount="$5780"
        />
        <Card
          imgUrl="https://images.pexels.com/photos/5380900/pexels-photo-5380900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Cartier Ring"
          amount="$5780"
        />
        <Card
          imgUrl="https://images.pexels.com/photos/5380900/pexels-photo-5380900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Cartier Ring"
          amount="$5780"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: "#f3f4f6",
    borderWidth: 2,
    borderColor: "brown",
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  InputContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextInvent: {
    fontSize: 32,
    fontWeight: "600",
  },
  InputIcon: {
    borderColor: "blue",
    borderWidth: 4,
    backgroundColor: "blue",
    borderRadius: "50%",
    padding: 2,
  },
});
