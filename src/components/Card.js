import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({imgUrl, title, amount }) => {
  return (
    <View style={styles.Container}>
      <Image style={styles.image} source={{ uri: imgUrl}} />
      <Text style={styles.CardText}>{title}</Text>
      <Text style={styles.CardAmount}>{amount}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  Container: {
    width: '45%',
    marginHorizontal: 8,
    marginTop: 8,
    marginBottom: 16,
    borderRadius: 12,
    elevation: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  CardText: {
    marginVertical: 10,
    fontWeight: "bold",
    marginHorizontal: 10,
    fontSize: 18,
  },
  CardAmount: {
    paddingTop: 16,
    paddingHorizontal: 10,
    paddingBottom: 16,
  },
});

