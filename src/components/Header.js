import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({ onGoToOrders }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="home" size={25} color="#000" />
        <Text style={styles.iconText}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="search" size={25} color="#000" />
        <Text style={styles.iconText}>Busca</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={onGoToOrders}>
        <Icon name="receipt" size={25} color="#000" />
        <Text style={styles.iconText}>Pedidos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="person" size={25} color="#000" />
        <Text style={styles.iconText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 4, // Adiciona uma sombra (no Android)
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 40,
  },
  iconButton: {
    alignItems: 'center', // Centraliza o ícone e o texto
  },
  iconText: {
    fontSize: 12,
    color: '#000',
    marginTop: 4,
  },
});
