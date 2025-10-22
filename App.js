import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './frontend/navigation/MainStackNavigator';
import { CartProvider } from './frontend/context/CartContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <CartProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </CartProvider>
    </SafeAreaProvider>
  );
}