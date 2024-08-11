import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Banner from './src/components/Banner';
import Categories from './src/components/Categories';
import RestaurantList from './src/components/RestaurantList';
import Footer from './src/components/Footer';


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Banner />
        <Categories />
        <RestaurantList />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
