import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const restaurants = [
  { name: 'Pizzaria Italia', image: require('../../assets/img/pizza.webp'), rating: 4.5 },
  { name: 'Hamburgueria Gourmet', image: require('../../assets/img/hamburguer.jpg'), rating: 4.7 },
  { name: 'Tudão lanches', image: require('../../assets/img/tudao.webp'), rating: 4.8 },
  { name: 'Açai do zulu', image: require('../../assets/img/acai.jpg'), rating: 4.9 },
  { name: 'Salgadinhos da ana', image: require('../../assets/img/salgadinho.jpeg'), rating: 5.0 },
  { name: 'Casa do Salgado', image: require('../../assets/img/casaSalgado.png'), rating: 3.8 },
  { name: 'Geladinho', image: require('../../assets/img/gelado.jpg'), rating: 4.5 },
  { name: 'Chaumas', image: require('../../assets/img/chaumas.webp'), rating: 4.7 },
];

export default function RestaurantList() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Restaurantes</Text>
      <View style={styles.grid}>
        {restaurants.map((restaurant, index) => (
          <View key={index} style={styles.item}>
            <Image source={restaurant.image} style={styles.image} />
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.rating}>Nota: {restaurant.rating}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '48%',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    marginVertical: 5,
  },
  rating: {
    fontSize: 14,
    color: '#777',
  },
});
