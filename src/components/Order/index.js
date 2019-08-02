import React from 'react';

import {
  Container,
  Left,
  Info,
  OrderId,
  Description,
  Status,
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
          <Status>Em andamento</Status>
          <Price>R$ 23,50</Price>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => navigation.navigate('Rate')}>
        <Test>Avaliar</Test>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Order')}>
        <Test>Cancelar</Test>
      </TouchableOpacity>
    </Container>
  );
}
