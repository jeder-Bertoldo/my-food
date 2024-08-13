import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function OrdersScreen({ goBack }) {
  return (
    <View style={styles.container}>
      <Text>Meus Pedidos</Text>
      <Button 
        title="Voltar para Home" 
        onPress={goBack} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
