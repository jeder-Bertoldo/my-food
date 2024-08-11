import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>MyFood</Text>
      <View style={styles.nav}>
        <Text style={styles.navItem}>Início</Text>
        <Text style={styles.navItem}>Buscar</Text>
        <Text style={styles.navItem}>Pedidos</Text>
        <Text style={styles.navItem}>Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    padding: 30,
  },
  logo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  navItem: {
    color: '#fff',
    fontSize: 16,
  },
});
