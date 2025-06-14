import React, { useContext } from 'react';
import {
  View, Text,StyleSheet, FlatList, TouchableOpacity, Image, Alert,
} from 'react-native';
import { CartContext } from '../components/CartContext';

// Haal de winkelmanditems en functies uit de context
const CartScreen = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  // Bereken het totaalbedrag van de items in het mandje
  const total = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  // Functie om het winkelmandje te legen met een bevestigingsvenster
  const handleClearCart = () => {
    Alert.alert(
      'Winkelmandje leegmaken',
      'Weet je zeker dat je alles wilt verwijderen?',
      [
        { text: 'Annuleren', style: 'cancel' },
        { text: 'Ja, leegmaken', onPress: clearCart },
      ]
    );
  };

  // Weergave van elk individueel product in het mandje
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.quantity}>Aantal: {item.quantity}</Text>
        <Text style={styles.price}>€{(item.price * item.quantity).toFixed(2)}</Text>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <Text style={styles.remove}>Verwijderen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Hoofdweergave van het winkelmandje
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Winkelmandje</Text>

      {cartItems.length === 0 ? (
        // Toon bericht als het winkelmandje leeg is
        <Text style={styles.empty}>Je winkelmandje is leeg.</Text>
      ) : (
        <>
          {/* Toon de lijst van items in het winkelmandje */}
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />

          {/* Toon het totaalbedrag */}
          <Text style={styles.total}>Totaal: €{total}</Text>

          {/* Knop om het winkelmandje leeg te maken */}
          <TouchableOpacity style={styles.clearButton} onPress={handleClearCart}>
            <Text style={styles.clearButtonText}>Winkelmandje leegmaken</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  empty: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 50,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  remove: {
    color: '#d11a2a',
    marginTop: 5,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'right',
  },
  clearButton: {
    backgroundColor: '#d11a2a',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CartScreen;
