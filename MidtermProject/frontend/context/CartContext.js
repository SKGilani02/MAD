import React, { createContext, useState, useContext } from 'react';

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add an item to the cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If item already exists, increase quantity
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Otherwise, add new item with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove an item from the cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Adjust item quantity
  const adjustQuantity = (productId, amount) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + amount) } // Ensure quantity doesn't go below 0
            : item
        )
        .filter(item => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, adjustQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);