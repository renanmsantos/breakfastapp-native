import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Left, AddressText } from './styles';

export default function Address() {
  return (
    <Container>
      <Left>
        <AddressText>Rua Joana da Silva, 102 </AddressText>
      </Left>
      <Left>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="mode-edit" size={25} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Icon name="cancel" size={25} color="#FF5F49" />
        </TouchableOpacity>
      </Left>
    </Container>
  );
}
