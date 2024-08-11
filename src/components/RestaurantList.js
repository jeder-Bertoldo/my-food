import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const restaurants = [
  { name: 'Pizzaria Italia', image: require('../../assets/img/icon.png'), rating: 4.5 },
  { name: 'Hamburgueria Gourmet', image: require('../../assets/img/icon.png'), rating: 4.7 },
  { name: 'Sushi Place', image: require('../../assets/img/icon.png'), rating: 4.8 },
];

export default function RestaurantList() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
