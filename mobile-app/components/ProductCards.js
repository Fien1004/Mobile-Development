import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const ProductCards = () => {
  return (
    <View style={styles.card}>
        <Image
            source={require('../images/stitch.jpeg')}
            style={styles.image}
        />
        <Text style={styles.description}>Pop!</Text>
        <Text style={styles.title}>Hula Stitch - Lilo & Stitch</Text>
        <Text style={styles.price}>€22,95</Text>
        <View style={styles.buttonContainer}>
            <Button title="Add to cart" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 250,
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
        width: 130,
        height: 130,
        borderRadius: 10,
    },
    description: {
        color: 'gray',
        fontSize: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 20,
        overflow: "hidden",
      },
    });

export default ProductCards;