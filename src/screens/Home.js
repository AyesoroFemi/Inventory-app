import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Card from "../components/Card";
import { PlusIcon } from "react-native-heroicons/solid";
import AddItem from "../components/AddItem";

const data = [
  {
    id: 1,
    photo:
      "https://images.pexels.com/photos/1497307/pexels-photo-1497307.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Cartier Ring",
    purchasePrice: "$5780",
    description: "",
    category: "",
  },
  {
    id: 2,
    photo:
      "https://images.pexels.com/photos/5380900/pexels-photo-5380900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Lou.Yetu necklace",
    purchasePrice: "$60",
    description: "",
    category: "",
  },
  {
    id: 3,
    photo:
      "https://images.pexels.com/photos/11678215/pexels-photo-11678215.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Chanel pearl bracelet",
    purchasePrice: "$2000",
    description: "",
    category: "",
  },
  {
    id: 4,
    photo:
      "https://images.pexels.com/photos/11678215/pexels-photo-11678215.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Chanel pearl bracelet",
    purchasePrice: "$2000",
    description: "",
    category: "",
  },
  {
    id: 5,
    photo:
      "https://images.pexels.com/photos/11678215/pexels-photo-11678215.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Chanel pearl bracelet",
    purchasePrice: "$2000",
    description: "",
    category: "",
  },
  {
    id: 6,
    photo:
      "https://images.pexels.com/photos/11678215/pexels-photo-11678215.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Chanel pearl bracelet",
    purchasePrice: "$2000",
    description: "",
    category: "",
  },
];

const renderItem = ({ item }) => (
  <Card
    photo={item.photo}
    name={item.name}
    purchasePrice={item.purchasePrice}
  />
);

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const addItemHandler = () => {
    setModalVisible(true);
  };

  const cancelItemHandler = () => {
    setModalVisible(false);
  };

  return (
    <>
      <StatusBar style="dark" />
        <SafeAreaView style={{marginTop: 16}}> 
          <View style={styles.InputContainer}>
            <Text style={styles.TextInvent}>Inventory</Text>
            <View style={styles.InputIcon}>
              <TouchableOpacity onPress={addItemHandler}>
                <PlusIcon size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          {modalVisible && (
            <AddItem visible={modalVisible} onCancel={cancelItemHandler} />
          )}
          <View style={styles.Container}>
            <FlatList
              numColumns={2}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    marginTop: 24,
    backgroundColor: "#f3f4f6",
    padding: 8,
    marginBottom: 100,
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
    borderRadius: 50,
    padding: 2,
  },
});
