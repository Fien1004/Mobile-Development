import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProductCards = ({ title, subtitle, image, price, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>€{price}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
  },
  subtitle: {
    color: 'gray',
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#dbdbdb',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductCards;