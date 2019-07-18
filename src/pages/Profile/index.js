import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, Title } from './styles';

export default function Profile() {
  return (
    <Background>
      <Container>
        <Title>Perfil</Title>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-box" size={20} color={tintColor} />
  ),
};
