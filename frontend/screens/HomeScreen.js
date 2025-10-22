import React, { useState } from 'react';
import {View, Text, TouchableOpacity, ScrollView, ImageBackground, Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import { styles } from '../constants/styles';

const HomeScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const categories = [
  { name: 'Winter', screen: 'Winter', image: require('../assets/images/winter_category.jpg') },
  { name: 'Summer', screen: 'Summer', image: require('../assets/images/summer_category.jpg') },
  { name: 'Perfumes', screen: 'Perfumes', image: require('../assets/images/perfumes_category.jpg') },
  { name: 'Sale', screen: 'Sale', image: require('../assets/images/sale_category.jpg') },
];

  const navigateTo = (screen) => {
    setMenuVisible(false); // Close menu first
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={[styles.container, styles.homeContainer]}>
      <AppHeader
        title="Royal Elegance"
        navigation={navigation}
        showMenuButton={true} // Show menu button on home screen
        onMenuPress={() => setMenuVisible(true)}
      />

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: styles.contentContainer.paddingBottom }}>
        <Text style={styles.welcomeText}>Experience Royal Elegance</Text>
        <View style={styles.categoryGrid}> 
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.name}
              style={styles.categoryCard}
              onPress={() => navigation.navigate(cat.screen)}
            >
              <ImageBackground source={cat.image} style={styles.categoryImage}>
                <View style={styles.categoryOverlay} /> 
                <Text style={styles.categoryText}>{cat.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Menu Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.menuContainer}
          activeOpacity={1}
          onPressOut={() => setMenuVisible(false)} // Close when tapping outside
        >
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Menu</Text>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo('Winter')}
            >
              <Text style={styles.menuItemText}>Winter Collection</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo('Summer')}
            >
              <Text style={styles.menuItemText}>Summer Collection</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo('Perfumes')}
            >
              <Text style={styles.menuItemText}>Perfumes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo('Sale')}
            >
              <Text style={styles.menuItemText}>Sale</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setMenuVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;