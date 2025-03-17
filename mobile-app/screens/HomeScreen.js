import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProductCard from "../components/ProductCards";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/67a5bf80f1c432d67c07e9b3/products", {
      headers: {
        Authorization:
          "Bearer 860bc419412a33bc1995b980032083d3f799b13c20b24a3273fdfc3809f1cffe",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: item.product.fieldData.name,
            price: (item.skus[0]?.fieldData.price.value || 0) / 100,
            image: { uri: item.skus[0]?.fieldData["main-image"]?.url },
          }))
        )
      )
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Funko</Text>
      <ScrollView>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            subtitle={product.subtitle} // Geef subtitle door
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomeScreen;