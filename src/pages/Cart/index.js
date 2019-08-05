import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';

import Background from '~/components/Background';
import CartProduct from '~/components/CartProduct';
import FooterCart from '~/components/FooterCart';

import { Container, List, SubmitButton, EmptyCartText } from './styles';

export default function Cart({ navigation }) {
  const products = useSelector(state => state.cart.products);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  return (
    <Background>
      <Container>
        {products && products.length == 0 ? (
          <EmptyCartText>Seu carrinho está vazio.</EmptyCartText>
        ) : (
          <List
            data={products}
            keyExtractor={item => String(item.name)}
            renderItem={({ item }) => <CartProduct product={item} />}
          />
        )}
      </Container>
      {products && products.length > 0 && (
        <SubmitButton onPress={() => navigation.navigate('Payment')}>
          Comprar
        </SubmitButton>
      )}
      {products && products.length > 0 && <FooterCart value={totalPrice} />}
    </Background>
  );
}

Cart.navigationOptions = ({ navigation }) => ({
  title: 'Carrinho',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
