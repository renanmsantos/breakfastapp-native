import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title } from './styles';

import Background from '~/components/Background';

export default function Orders() {
  return (
    <Background>
      <Container>
        <Title>Meus pedidos</Title>
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
