// src/screens/OrdersScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Appbar, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const orders = [
  {
    id: '1',
    restaurant: 'Pizzaria Napoli',
    status: 'Entregue',
    statusIcon: 'check-circle',
    statusColor: '#4CAF50',
    image: require('../../assets/img/pizza.webp'), // Imagem local
  },
  {
    id: '2',
    restaurant: 'Sushi Yama',
    status: 'Em preparação',
    statusIcon: 'autorenew',
    statusColor: '#FF9800',
    image: require('../../assets/img/suchi.jpg'), // Imagem local
  },
  {
    id: '3',
    restaurant: 'Churrascaria Gaúcha',
    status: 'A caminho',
    statusIcon: 'local-shipping',
    statusColor: '#2196F3',
     image: require('../../assets/img/hamburguer.jpg'),  // URL
  },
    {
    id: '3',
    restaurant: 'açai',
    status: 'A caminho',
    statusIcon: 'local-shipping',
    statusColor: '#2196F3',
     image: require('../../assets/img/acai.jpg'),  // URL
  },
    {
    id: '3',
    restaurant: 'salgado',
    status: 'A caminho',
    statusIcon: 'local-shipping',
    statusColor: '#2196F3',
     image: require('../../assets/img/casaSalgado.png'),  // URL
  },
  // Adicione mais itens conforme necessário
];

const OrderItem = ({ restaurant, status, statusIcon, statusColor, image, imageUrl }) => {
  // Escolhe a fonte da imagem
  const imageSource = image ? image : { uri: imageUrl };

  return (
    <Card style={styles.orderCard}>
      <Card.Content style={styles.orderContent}>
        <Image source={imageSource} style={styles.orderImage} />
        <View style={styles.orderDetails}>
          <Title style={styles.restaurantName}>{restaurant}</Title>
          <View style={styles.statusContainer}>
            <Icon name={statusIcon} size={20} color={statusColor} />
            <Paragraph style={{ ...styles.orderStatus, color: statusColor }}>{status}</Paragraph>
          </View>
        </View>
        <Icon name="chevron-right" size={30} color="#ccc" />
      </Card.Content>
    </Card>
  );
};

const OrdersScreen = ({ goBack }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Meus Pedidos" titleStyle={styles.headerTitle} />
      </Appbar.Header>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OrderItem
            restaurant={item.restaurant}
            status={item.status}
            statusIcon={item.statusIcon}
            statusColor={item.statusColor}
            image={item.image} // Passa a imagem local ou null
            imageUrl={item.imageUrl} // Passa a URL da imagem ou undefined
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#ff4d4d',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  orderCard: {
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  orderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  orderDetails: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderStatus: {
    fontSize: 14,
    marginLeft: 5,
  },
});

export default OrdersScreen;

