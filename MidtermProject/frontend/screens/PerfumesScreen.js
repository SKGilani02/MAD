import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants/Products';
import { styles } from '../constants/styles';

const PerfumesScreen = ({ navigation }) => {
  const subCategories = [{name: 'Men', key: 'perfumes_men'}, {name: 'Women', key: 'perfumes_women'}];
  const [activeSub, setActiveSub] = useState(subCategories[0].key);
  const products = PRODUCTS[activeSub] || [];

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Perfumes" navigation={navigation} />
      <View style={styles.subCategoryContainer}>
        {subCategories.map(sub => (
          <TouchableOpacity
            key={sub.key}
            style={[styles.subCategoryButton, activeSub === sub.key && styles.activeSubCategory]}
            onPress={() => setActiveSub(sub.key)}
          >
            <Text style={[styles.subCategoryText, activeSub === sub.key && styles.activeSubCategoryText]}>{sub.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView>
        <View style={styles.productGrid}>
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerfumesScreen;


