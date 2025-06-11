import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Text, TouchableOpacity } from 'react-native';

import HomeScreen from './screens/HomeScreen.js';
import ProductsPage from './screens/ProductsPage.js';
import ProductDetails from './screens/ProductDetails.js';
import ComingSoonPage from './screens/ComingSoonPage.js';
import BlogScreen from './screens/BlogScreen.js';
import BlogDetails from './screens/BlogDetails.js';
import CartScreen from './screens/CartScreen.js';
import {CartProvider} from './components/CartContext.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    //Door CartProvider rond je navigatie te zetten, kunnen alle schermen (ProductDetails, CartScreen, enz.) gebruik maken van useContext(CartContext) zonder foutmeldingen.
    <CartProvider> 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 20 }}>
                <Text style={{ fontSize: 24 }}>🛒</Text>
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen name="Products" component={ProductsPage}
            options={({ navigation }) => ({
            title: 'Products',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 20 }}>
                <Text style={{ fontSize: 24 }}>🛒</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="ComingSoon" component={ComingSoonPage}
          options={({ navigation }) => ({
            title: 'Coming Soon',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 20 }}>
                <Text style={{ fontSize: 24 }}>🛒</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="ProductDetails" component={ProductDetails}
            options={({ navigation }) => ({
            title: 'Product Details',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 20 }}>
                <Text style={{ fontSize: 24 }}>🛒</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Blogs" component={BlogScreen}
                  options={({ navigation }) => ({
            title: 'Blogs',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 20 }}>
                <Text style={{ fontSize: 24 }}>🛒</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="BlogDetails" component={BlogDetails}
                  options={({ navigation }) => ({
            title: 'Blog Details',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 20 }}>
                <Text style={{ fontSize: 24 }}>🛒</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="CartProvider" component={CartProvider} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}
