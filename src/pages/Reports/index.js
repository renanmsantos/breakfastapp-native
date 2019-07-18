import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Reports() {
  return <Background />;
}

Reports.navigationOptions = {
  tabBarLabel: 'Relatórios',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="description" size={20} color={tintColor} />
  ),
};
