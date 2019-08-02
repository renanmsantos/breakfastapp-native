import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, Form, FormInput, List } from './styles';

import Background from '~/components/Background';
import Order from '~/components/Order';

const data = [1, 2, 3, 4, 5];

export default function Orders({ navigation }) {
  return (
    <Background>
      <Container>
        <Title>Meus pedidos</Title>
        <Form>
          <FormInput
            icon="search"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Procure seu pedido aqui..."
          />
        </Form>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <Order navigation={navigation} data={item} />
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
