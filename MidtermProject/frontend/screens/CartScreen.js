import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import { useCart } from '../context/CartContext';
import { styles } from '../constants/styles';

const CartScreen = ({ navigation }) => {
  const { cartItems, adjustQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
        <View style={styles.quantityControl}>
          <TouchableOpacity onPress={() => adjustQuantity(item.id, -1)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => adjustQuantity(item.id, 1)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeItemButton}>
        <Text style={styles.removeItemText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="My Cart" navigation={navigation} />
      {cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty.</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{ padding: 16 }}
          />
          <View style={styles.cartTotalContainer}>
            <Text style={styles.cartTotalText}>Total:</Text>
            <Text style={styles.cartTotalPrice}>${total.toFixed(2)}</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;