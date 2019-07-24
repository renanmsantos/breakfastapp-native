import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import { Container, CardPayment, ContentText } from './styles';

import Background from '~/components/Background';

export default function ChoosePayment({ navigation }) {
  return (
    <Background>
      <Container>
        <CardPayment onPress={() => navigation.navigate('IndividualPayment')}>
          <Icon name="person" size={90} color="#333" />
          <ContentText>Eu quero pagar tudo</ContentText>
        </CardPayment>
        <CardPayment onPress={() => navigation.navigate('GroupPayment')}>
          <Icon name="group" size={90} color="#333" />
          <ContentText>Dividir com meu grupo</ContentText>
        </CardPayment>
      </Container>
    </Background>
  );
}

ChoosePayment.navigationOptions = ({ navigation }) => ({
  title: 'Como deseja pagar?',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
