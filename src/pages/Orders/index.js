import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, Form, FormInput, List } from './styles';

import Background from '~/components/Background';
import Order from '~/components/Order';

import { orderRequest } from '~/store/modules/order/actions';

export default function Orders({ navigation }) {
  const dispatch = useDispatch();
  const ordersState = useSelector(state => state.order.orders);
  const userId = useSelector(state => state.user.id);

  const [ordersBackup, setOrdersBackup] = useState([]);
  const [orders, setOrders] = useState(ordersState);

  useEffect(() => {
    async function loadOrders() {
      dispatch(orderRequest(userId));
      setOrdersBackup(orders);
    }
    loadOrders();
  }, []);

  function setSearchText(event) {
    searchText = event.nativeEvent.text;
    data = ordersBackup;
    searchText = searchText.trim().toLowerCase();
    data = data.filter(item => {
      return item.purchaseOrderStatus.toLowerCase().match(searchText);
    });
    setOrders(data);
  }

  return (
    <Background>
      <Container>
        <Title>Meus pedidos</Title>
        <Form>
          <FormInput
            icon="search"
            onChange={setSearchText.bind(this)}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Procure seu pedido aqui..."
          />
        </Form>
        <List
          data={orders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Order navigation={navigation} order={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Orders.navigationOptions = {
  tabBarLabel: 'Meus pedidos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="playlist-add-check" size={20} color={tintColor} />
  ),
};
