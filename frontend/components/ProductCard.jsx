import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../constants/styles';
import { useCart } from '../context/CartContext'; // Import the cart hook

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Get the addToCart function

  return (
    <View style={styles.productCard}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>${product.price}</Text>
        {product.originalPrice && (
          <Text style={styles.originalPrice}>${product.originalPrice}</Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => addToCart(product)} // Add product to cart on press
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;