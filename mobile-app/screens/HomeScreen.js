import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import ProductCard from "../components/ProductCards";



const categoriesNames = {
  "": "Alle Categoriën",
  "67c419efaae04b2cda7e2d58": "POP!",
  "67c4181f02b65c00eb6a98e3": "Star Wars",
  "67c4175470acacede45d45cf": "Movies",
  "67c416b33ac97fdfe9ee2854": "Music",
  "67c416206cdcf41ed2adf12e": "Disney",
};

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

    const onPress = () => {
      navigation.navigate("ProductsPage");
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FUNKO</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Zoeken..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>PRODUCTEN</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  searchInput: {
    width: "90%",
    height: 40,
    marginVertical: 20,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
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

export default HomeScreen;
