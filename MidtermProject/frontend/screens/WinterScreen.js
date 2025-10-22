import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import ProductCard from '../components/ProductCard'; 
import { styles } from '../constants/styles';
import { PRODUCTS } from '../constants/Products';

const WinterScreen = ({ navigation }) => {
  const subCategories = [
    { name: 'Pret', key: 'winter_pret' },
    { name: 'Unstitched', key: 'winter_unstitched' },
  ];
  const [activeSub, setActiveSub] = useState(subCategories[0].key);

  const products = PRODUCTS[activeSub] || [];

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Winter Collection" navigation={navigation} />
      <View style={styles.subCategoryContainer}>
        {subCategories.map(sub => (
          <TouchableOpacity
            key={sub.key}
            style={[
              styles.subCategoryButton,
              activeSub === sub.key && styles.activeSubCategory,
            ]}
            onPress={() => setActiveSub(sub.key)}
          >
            <Text
              style={[
                styles.subCategoryText,
                activeSub === sub.key && styles.activeSubCategoryText,
              ]}
            >
              {sub.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.productGrid}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WinterScreen;