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
    <Icon name="event-note" size={20} color={tintColor} />
  ),
};
