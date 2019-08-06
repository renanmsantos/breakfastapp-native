import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Text, Left } from './styles';

export default function HeaderAddress({ navigation, address, isChangeable }) {
  let result = 'Sem endereço';
  if (address.street) {
    result = `${address.street}, ${address.number}`;
  }

  return (
    <Container>
      <Left>
        <Icon name="home" size={35} color="#333" />
        <Text>Endereço: {result}</Text>
      </Left>
      {isChangeable && (
        <TouchableOpacity onPress={() => navigation.navigate('ChooseAddress')}>
          <Icon name="swap-horiz" size={30} color="#333" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
