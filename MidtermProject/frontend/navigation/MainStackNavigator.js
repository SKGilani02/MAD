import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WinterScreen from '../screens/WinterScreen';
import SummerScreen from '../screens/SummerScreen';
import PerfumesScreen from '../screens/PerfumesScreen';
import SaleScreen from '../screens/SaleScreen';
import CartScreen from '../screens/CartScreen'; 

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Winter" component={WinterScreen} />
      <Stack.Screen name="Summer" component={SummerScreen} />
      <Stack.Screen name="Perfumes" component={PerfumesScreen} />
      <Stack.Screen name="Sale" component={SaleScreen} />
      <Stack.Screen name="Cart" component={CartScreen} /> 
    </Stack.Navigator>
  );
};

export default MainStackNavigator;