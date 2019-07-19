import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Left, Info, Name } from './styles';

export default function HeaderCart() {
  return (
    <Container>
      <Left>
        <Info>
          <Name>Olá, Renan Moreira Santos</Name>
        </Info>
      </Left>
      <TouchableOpacity>
        <Icon name="shopping-cart" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="power-settings-new" size={30} color="#fff" />
      </TouchableOpacity>
    </Container>
  );
}
