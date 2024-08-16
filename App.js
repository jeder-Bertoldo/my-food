import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import Banner from './src/components/Banner';
import Categories from './src/components/Categories';
import RestaurantList from './src/components/RestaurantList';
import Footer from './src/components/Footer';
import OrdersScreen from './src/screens/OrdersScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {currentScreen === 'Pedidos' ? (
          <OrdersScreen goBack={() => setCurrentScreen('Home')} />
        ) : (
          <ScrollView>
            <Header onGoToOrders={() => setCurrentScreen('Pedidos')} />
            <Banner />
            <Categories />
            <RestaurantList />
            <Footer />
          </ScrollView>
        )}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
