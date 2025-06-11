import React, { createContext, useState } from 'react';

// Maak de context aan
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Voeg een product toe aan het winkelmandje
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Als het product al in het mandje zit, verhoog de hoeveelheid
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Voeg nieuw product toe
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Verwijder een product uit het winkelmandje
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  // Leeg het winkelmandje (optioneel)
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
