import React from 'react';
import { useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { removeProductCartRequest } from '~/store/modules/cart/actions';

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

export default function CartProduct({ product }) {
  const dispatch = useDispatch();

  function handleRemoveProduct() {
    dispatch(removeProductCartRequest(product));
  }

  return (
    <Container>
      <Left>
        <Image
          source={{
            uri: product.urlImage,
          }}
        />
        <Info>
          <Name>{product.name}</Name>
          <Partner>{product.partner.name}</Partner>
          <Price>R$ {product.price}</Price>
        </Info>
      </Left>
      <TouchableOpacity onPress={handleRemoveProduct}>
        <Icon name="remove-shopping-cart" size={25} color="#FF5F49" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="remove-circle-outline" size={20} color="#000" />
      </TouchableOpacity>
      <CounterText>{product.quantity}</CounterText>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="add-circle-outline" size={20} color="#000" />
      </TouchableOpacity>
    </Container>
  );
}
