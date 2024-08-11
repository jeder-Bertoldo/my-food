import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const categories = ['Pizza', 'Hamburguer', 'Sushi', 'Bebidas', 'Saladas', 'Doces'];

export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </ScrollView>
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
  categoryItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
  },
});
