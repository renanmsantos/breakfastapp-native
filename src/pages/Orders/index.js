import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Orders() {
  return <Background />;
}

Orders.navigationOptions = {
  tabBarLabel: 'Meus pedidos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-grocery-store" size={20} color={tintColor} />
  ),
};
