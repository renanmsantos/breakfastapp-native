import React from 'react';
import { useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  removeProductCartRequest,
  plusQuantityProduct,
  minusQuantityProduct,
} from '~/store/modules/cart/actions';

import { formatPrice } from '~/util/format';

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

  function handlePlusQuantityProduct() {
    dispatch(plusQuantityProduct(product));
  }

  function handleMinusQuantityProduct() {
    dispatch(minusQuantityProduct(product));
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
          <Partner>{product.partner}</Partner>
          <Price>{formatPrice(product.price)}</Price>
        </Info>
      </Left>
      <TouchableOpacity onPress={handleRemoveProduct}>
        <Icon name="remove-shopping-cart" size={25} color="#FF5F49" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMinusQuantityProduct}>
        <Icon name="remove-circle-outline" size={20} color="#000" />
      </TouchableOpacity>
      <CounterText>{product.quantity}</CounterText>
      <TouchableOpacity onPress={handlePlusQuantityProduct}>
        <Icon name="add-circle-outline" size={20} color="#000" />
      </TouchableOpacity>
    </Container>
  );
}
