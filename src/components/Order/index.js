import React from 'react';

import {
  Container,
  Left,
  Info,
  OrderId,
  Status,
  Price,
  Description,
} from './styles';

import { formatPrice } from '~/util/format';

export default function Order({ order }) {
  return (
    <Container>
      <Left>
        <Info>
          <OrderId>PEDIDO #{order.id}</OrderId>
          <Price>Total: {formatPrice(order.totalPrice)}</Price>
          <Description>Data do pedido: {order.createdAt}</Description>
        </Info>
      </Left>
      <Status>{order.purchaseOrderStatus}</Status>
    </Container>
  );
}
