import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Banner() {
  return (
    <View style={styles.banner}>
      <Image
        source={{ uri: 'https://via.placeholder.com/800x200' }} // Placeholder para o banner
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
