import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';

import { Container, Left, Image, Info, Name, Partner, Price } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { addProductCartRequest } from '~/store/modules/cart/actions';

import { formatPrice } from '~/util/format';

export default function Product({ navigation, product }) {
  const dispatch = useDispatch();

  function handleAddCart() {
    const { id, name, price, partner, urlImage } = product;
    const newProduct = {
      id,
      name,
      urlImage,
      price,
      quantity: 1,
      partner: partner.name,
    };
    dispatch(addProductCartRequest(newProduct));
    navigation.navigate('Cart');
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
          <Price>{formatPrice(product.price)}</Price>
        </Info>
      </Left>
      <TouchableOpacity onPress={handleAddCart}>
        <Icon name="add-shopping-cart" size={30} color="#000" />
      </TouchableOpacity>
    </Container>
  );
}
