import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';

import Background from '~/components/Background';
import CartProduct from '~/components/CartProduct';
import FooterCart from '~/components/FooterCart';

import { Container, List, SubmitButton } from './styles';

const data = [1, 2, 3];

export default function Cart({ navigation }) {
  return (
    <Background>
      <Container>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <CartProduct data={item} />}
        />
      </Container>
      <SubmitButton onPress={() => navigation.navigate('Payment')}>
        Comprar
      </SubmitButton>
      <FooterCart />
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
