import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image } from 'react-native';


const ProductDetails = ({route})=>{
  const { title, subtitle, price, image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>€{price}</Text>

      <StatusBar style="auto" />
    </View>
  );
} 

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
});


export default ProductDetails;