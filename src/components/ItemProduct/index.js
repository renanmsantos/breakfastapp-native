import React from 'react';

import {
  Container,
  Left,
  Info,
  Name,
  Partner,
  TotalText,
  Price,
} from './styles';

import { formatPrice } from '~/util/format';

export default function ItemProduct({ product }) {
  return (
    <Container>
      <Left>
        <Info>
          <Name>{product.name}</Name>
          <Partner>{product.partner.name}</Partner>
          <Price>
            {formatPrice(product.price)} x {product.quantity}
          </Price>
        </Info>
      </Left>
      <TotalText>{formatPrice(product.price * product.quantity)}</TotalText>
    </Container>
  );
}
