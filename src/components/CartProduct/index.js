import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Container,
  Left,
  Image,
  Info,
  Name,
  Partner,
  Price,
  CounterText,
} from './styles';

export default function CartProduct({ navigation }) {
  return (
    <Container>
      <Left>
        <Image
          source={{
            uri: 'https://api.adorable.io/avatars/50/' + Math.random() + '.png',
          }}
        />
        <Info>
          <Name>Produto 1</Name>
          <Partner>Salgado da tia Ana</Partner>
          <Price>R$ 23,50</Price>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="remove-shopping-cart" size={25} color="#FF5F49" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="remove-circle-outline" size={20} color="#000" />
      </TouchableOpacity>
      <CounterText>2</CounterText>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="add-circle-outline" size={20} color="#000" />
      </TouchableOpacity>
    </Container>
  );
}
