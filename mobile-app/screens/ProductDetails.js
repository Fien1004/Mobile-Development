import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CartContext } from '../components/CartContext.js';

const ProductDetails = ({ route }) => {
  // Haal het product uit de route parameters
  const { product } = route.params;
  const { id, title, subtitle, price, image } = product;

  // Zorg ervoor dat prijs een getal is, standaard naar 0 als het niet lukt
  const parsedPrice = parseFloat(price) || 0;
  // State voor hoeveelheid en totale prijs
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(parsedPrice);

  // Haal de addToCart functie uit de CartContext
  const { addToCart } = useContext(CartContext);

  // Update de totale prijs wanneer de hoeveelheid verandert
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      setTotalPrice(newQuantity * parsedPrice);
      return newQuantity;
    });
  };

  // Verlaag het aantal producten (minimum 1) en update de totale prijs
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1;
        setTotalPrice(newQuantity * parsedPrice);
        return newQuantity;
      });
    }
  };

  // Voeg het product met de opgegeven hoeveelheid toe aan de winkelmand
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <View style={styles.container}>
      {/* Toon het productbeeld */}
      <Image source={image} style={styles.image} />

      {/* Toon de producttitel en prijs */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>€{totalPrice.toFixed(2)}</Text>

      {/* Toon de beschrijving van het product, scrollbaar als het lang is */}
      <ScrollView>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </ScrollView>

      {/* Toon de hoeveelheid en knoppen om deze te verhogen/verlagen */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity onPress={increaseQuantity}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Knop om het product toe te voegen aan de winkelmand */}
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
    marginBottom: 20,
  },
  subtitle: {
    color: 'gray',
    fontSize: 20,
  },
  price: {
    fontSize: 22,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  quantityText: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#dbdbdb',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductDetails;
