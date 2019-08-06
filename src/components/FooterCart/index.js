import React from 'react';

import { Container, TotalText, TotalPriceText, Left } from './styles';

import { formatPrice } from '~/util/format';

export default function FooterCart({ value }) {
  return (
    <Container>
      <Left>
        <TotalText>Valor Total</TotalText>
        <TotalPriceText>{formatPrice(value)}</TotalPriceText>
      </Left>
    </Container>
  );
}
