import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TotalText, TotalPriceText, Left } from './styles';

export default function FooterCart() {
  return (
    <Container>
      <Left>
        <TotalText>Valor Total</TotalText>
        <TotalPriceText>R$ 234,00</TotalPriceText>
      </Left>
    </Container>
  );
}
