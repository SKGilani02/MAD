import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../constants/styles';
import { useCart } from '../context/CartContext';

const AppHeader = ({ title, navigation, showMenuButton, onMenuPress }) => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Determine if a back button should be shown (if navigation can go back AND we are not forcing the menu button)
  const showBackButton = navigation.canGoBack() && !showMenuButton;

  return (
    <View style={styles.header}>
      {/* Left side: Back button or Menu button */}
      <View style={styles.headerLeft}>
        {showBackButton ? (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIcon}>
            <Text style={styles.backButton}>‹</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onMenuPress} style={styles.headerIcon}>
            <Text style={styles.menuButton}>☰</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Center: Title */}
      <Text style={[styles.headerTitle, !showBackButton && { textAlign: 'center' }]}>
        {title}
      </Text>

      {/* Right side: Cart icon */}
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.headerIcon}>
          <Text style={styles.menuButton}>🛒</Text>
          {cartItemCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;