import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {
  Container,
  Title,
  UsernameText,
  WithoutGroupText,
  SubmitButton,
} from './styles';

export default function Groups({ navigation }) {
  return (
    <Background>
      <Container>
        <Title>Grupos</Title>
        <UsernameText>Olá, Renan Moreira Santos.</UsernameText>
        <WithoutGroupText>
          Você ainda não possui ou participa de um grupo. Desejar criar um?
        </WithoutGroupText>
        <SubmitButton onPress={() => navigation.navigate('NewGroup')}>
          Criar novo grupo
        </SubmitButton>
      </Container>
    </Background>
  );
}

Groups.navigationOptions = {
  tabBarLabel: 'Grupos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="group" size={20} color={tintColor} />
  ),
};
