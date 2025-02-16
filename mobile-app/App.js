import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProductCards from './components/ProductCards';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Dit is een component!</Text>
      <ScrollView>
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
