import React from 'react';

import { useDispatch } from 'react-redux';

import {
  Container,
  Left,
  Info,
  OrderId,
  Status,
  Price,
  Description,
} from './styles';

import { orderInfoRequest } from '~/store/modules/order/actions';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { formatPrice } from '~/util/format';

import { format } from 'date-fns';

export default function Order({ navigation, order }) {
  const dispatch = useDispatch();

  function handleOrderDetails() {
    dispatch(orderInfoRequest(order));
    navigation.navigate('OrderDetails');
  }

  return (
    <TouchableOpacity onPress={handleOrderDetails}>
      <Container>
        <Left>
          <Info>
            <OrderId>PEDIDO #{order.id}</OrderId>
            <Price>Total: {formatPrice(order.totalPrice)}</Price>
            <Description>
              Data do pedido: {format(order.createdAt, 'DD/MM/YYYY HH:mm')}
            </Description>
          </Info>
        </Left>
        <Status>{order.purchaseOrderStatus}</Status>
      </Container>
    </TouchableOpacity>
  );
}
