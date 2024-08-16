import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Appbar, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const orders = [
  {
    id: '1',
    restaurant: 'Pizzaria Napoli',
    status: 'Entregue',
    statusIcon: 'check-circle',
    statusColor: '#4CAF50',
    image: require('../../assets/img/pizza.webp'),
  },
  {
    id: '2',
    restaurant: 'Sushi Yama',
    status: 'Em preparação',
    statusIcon: 'autorenew',
    statusColor: '#FF9800',
    image: require('../../assets/img/suchi.jpg'),
  },
  {
    id: '3',
    restaurant: 'Churrascaria Gaúcha',
    status: 'A caminho',
    statusIcon: 'local-shipping',
    statusColor: '#2196F3',
    image: require('../../assets/img/hamburguer.jpg'),
  },
  {
    id: '4',
    restaurant: 'Açaí da Tarde',
    status: 'A caminho',
    statusIcon: 'local-shipping',
    statusColor: '#2196F3',
    image: require('../../assets/img/acai.jpg'),
  },
  {
    id: '6',
    restaurant: 'Salgados Gourmet',
    status: 'A caminho',
    statusIcon: 'local-shipping',
    statusColor: '#2196F3',
    image: require('../../assets/img/casaSalgado.png'),
  },
  {
    id: '7',
    restaurant: 'Salgados Gourmet',
    status: 'A caminho',
    statusIcon: 'local-shipping',
    statusColor: '#2196F3',
    image: require('../../assets/img/casaSalgado.png'),
  },
  {
    id: '8',
    restaurant: 'Salgados Gourmet',
    status: 'A caminho',
    statusIcon: 'local-shipping',
    statusColor: '#2196F3',
    image: require('../../assets/img/casaSalgado.png'),
  },
  {
    id: '9',
    restaurant: 'Salgados Gourmet',
    status: 'A caminho',
    statusIcon: 'local-shipping',
    statusColor: '#2196F3',
    image: require('../../assets/img/casaSalgado.png'),
  },
  {
    id: '10',
    restaurant: 'Salgados Gourmet',
    status: 'A caminho',
    statusIcon: 'local-shipping',
    statusColor: '#2196F3',
    image: require('../../assets/img/casaSalgado.png'),
  },
];

const OrderItem = ({ restaurant, status, statusIcon, statusColor, image }) => (
  <Card style={styles.orderCard}>
    <Card.Content style={styles.orderContent}>
      <Image source={image} style={styles.orderImage} />
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
            image={item.image}
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
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#ff4d4d',
  },
  headerTitle: {
    fontSize: 22,
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
    backgroundColor: '#fff',
    elevation: 4,
  },
  orderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  orderDetails: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  orderStatus: {
    fontSize: 14,
    marginLeft: 5,
  },
});

export default OrdersScreen;
