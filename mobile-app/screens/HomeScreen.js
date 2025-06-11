import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const GoProducts = () => {
    navigation.navigate("Products");
  };

  const GoComingSoon = () => {
    navigation.navigate("ComingSoon");
  };

  const GoBlogs = () => {
    navigation.navigate("Blogs");
  };

  return (
  <View style={styles.buttonContainer}>
    <Image
      source={require("../images/Funko.svg.png")}
      style={styles.logo}
    />

    <TextInput
      style={styles.searchInput}
      placeholder="Zoeken..."
      value={searchQuery}
      onChangeText={setSearchQuery}
    />

    <TouchableOpacity style={styles.button} onPress={GoProducts}>
      <Image source={require("../images/SabrinaCarpenter.png")} style={styles.buttonImage} />
      <Text style={styles.buttonText}>POP!</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={GoComingSoon}>
      <Image source={require("../images/ComingSoonCasper.png")} style={styles.buttonImage} />
      <Text style={styles.buttonText}>COMING SOON</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={GoBlogs}>
      <Image source={require("../images/Pop_Logo.png")} style={styles.buttonImage} />
      <Text style={styles.buttonText}>BLOGS</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 310,
    height: 110,
    marginBottom: 5,
    marginTop: 20,
  },
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
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: '#dbdbdb',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 10,
    alignItems: 'center',
    width: 160,
  },
  buttonImage: {
    width: 155,
    height: 150, 
    marginBottom: 5,
    resizeMode: 'contain', 
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
