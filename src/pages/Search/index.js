import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import AddressHeader from '~/components/AddressHeader';
import Background from '~/components/Background';
import Product from '~/components/Product';
import HeaderCart from '~/components/HeaderCart';

import { Container, Form, FormInput, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Search() {
  return (
    <Background>
      <Container>
        <HeaderCart />
        <AddressHeader />
        <Form>
          <FormInput
            icon="search"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="O que está procurando hoje?"
          />
        </Form>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Product data={item} />}
        />
      </Container>
    </Background>
  );
}

Search.navigationOptions = {
  tabBarLabel: 'Busca',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={20} color={tintColor} />
  ),
};
