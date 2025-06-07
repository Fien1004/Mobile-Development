import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen.js';
import ProductsPage from './screens/ProductsPage.js';
import ProductDetails from './screens/ProductDetails.js';
import ComingSoonPage from './screens/ComingSoonPage.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductsPage" component={ProductsPage} />
        <Stack.Screen name="ComingSoonPage" component={ComingSoonPage} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
