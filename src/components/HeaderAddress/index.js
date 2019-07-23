import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Text, Left } from './styles';

export default function HeaderAddress({ navigation }) {
  return (
    <Container>
      <Left>
        <Icon name="home" size={35} color="#333" />
        <Text>Endereço: Rua João da Silva, 165</Text>
      </Left>
      <TouchableOpacity onPress={() => navigation.navigate('ChooseAddress')}>
        <Icon name="swap-horiz" size={30} color="#333" />
      </TouchableOpacity>
    </Container>
  );
}
