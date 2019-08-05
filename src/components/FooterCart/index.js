import React from 'react';

import { Container, TotalText, TotalPriceText, Left } from './styles';

export default function FooterCart({ value }) {
  return (
    <Container>
      <Left>
        <TotalText>Valor Total</TotalText>
        <TotalPriceText>R$ {value}</TotalPriceText>
      </Left>
    </Container>
  );
}
