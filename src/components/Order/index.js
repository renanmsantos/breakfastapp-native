import React from 'react';

import {
  Container,
  Left,
  Info,
  OrderId,
  Description,
  Price,
  Test,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Order({ navigation }) {
  return (
    <Container>
      <Left>
        <Info>
          <OrderId>PEDIDO #12313</OrderId>
          <Description>Summary description</Description>
          <Price>R$ 23,50</Price>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Test>Avaliar</Test>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Test>Cancelar</Test>
      </TouchableOpacity>
    </Container>
  );
}
