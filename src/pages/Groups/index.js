import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function Groups() {
  return <Background />;
}

Groups.navigationOptions = {
  tabBarLabel: 'Grupos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="group" size={20} color={tintColor} />
  ),
};
