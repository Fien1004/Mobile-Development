import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import ProductCard from "../components/ProductCards";
import { Picker } from "@react-native-picker/picker";


// Mapping van categorie-ID's naar leesbare namen
const categoriesNames = {
  "": "Alle Categoriën",
  "6843fee0e4e81444ee1ddacd": "POP! PINS",
  "67c419efaae04b2cda7e2d58": "POP!",
  "67c4181f02b65c00eb6a98e3": "Star Wars",
  "67c4175470acacede45d45cf": "Movies",
  "67c416b33ac97fdfe9ee2854": "Music",
  "67c416206cdcf41ed2adf12e": "Disney",
  "684402a11405ebdb01d4ddba": "COMING SOON",
};

const ComingSoon = ({ navigation }) => {
  const [products, setProducts] = useState([]); // Alle opgehaalde producten
  const [searchQuery, setSearchQuery] = useState("");// Zoekterm van gebruiker
  const [sortOption, setSortOption] = useState("price-asc"); // Huidige sorteermethode

  // Data ophalen van de Webflow API bij het laden van het component
  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/67a5bf80f1c432d67c07e9b3/products", {
      headers: {
        Authorization:
          "Bearer 860bc419412a33bc1995b980032083d3f799b13c20b24a3273fdfc3809f1cffe",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("API error: " + response.status);
        return response.json();
      })
      .then((data) =>
        // Producten mappen naar een bruikbaar formaat
        setProducts(
            data.items.map((item) => ({
              id: item.product.id,
              title: item.product.fieldData.name,
              subtitle: item.product.fieldData.description,
              price: (item.skus[0]?.fieldData.price.value || 0) / 100,
              image: { uri: item.skus[0]?.fieldData["main-image"]?.url },
              category:
                categoriesNames[item.product.fieldData.category?.[0]] || "Onbekend",
            }))
          )
      )
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Filteren en sorteren van producten
  const filteredProducts = products
    .filter(
      (p) =>
        p.category === "COMING SOON" && // Alleen producten met de categorie "COMING SOON" weergeven
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) // Zoekterm toepassen op titel
    )
    .sort((a, b) => {
      // Sorteer op geselecteerde optie
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name-asc") return a.title.localeCompare(b.title);
      if (sortOption === "name-desc") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Coming Soon</Text>
      
      {/* Zoekveld */}
      <TextInput
        style={styles.searchInput}
        placeholder="Zoeken..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Sorteeropties */}
      <Picker
        selectedValue={sortOption}
        onValueChange={(value) => setSortOption(value)}
        style={styles.picker}
      >
        <Picker.Item label="Prijs: Laag naar Hoog" value="price-asc" />
        <Picker.Item label="Prijs: Hoog naar Laag" value="price-desc" />
        <Picker.Item label="Naam: A-Z" value="name-asc" />
        <Picker.Item label="Naam: Z-A" value="name-desc" />
      </Picker>

      {/* Lijst met producten */}
      <ScrollView>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
            onPress={() => navigation.navigate("ProductDetails", { product })}
          />
        ))}
      </ScrollView>

      <StatusBar style="auto" />
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
  searchInput: {
    width: "90%",
    height: 40,
    marginVertical: 20,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  picker: {
    width: "90%",
    height: 60,
  },
});

export default ComingSoon;
