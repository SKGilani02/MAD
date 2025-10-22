import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import ProductCard from '../components/ProductCard'; 
import { styles } from '../constants/styles';
import { PRODUCTS } from '../constants/Products';

const SaleScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Sale Items" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.productGrid}>
        {PRODUCTS.sale.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SaleScreen;