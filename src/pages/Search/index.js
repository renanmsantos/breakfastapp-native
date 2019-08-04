import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Product from '~/components/Product';
import HeaderCart from '~/components/HeaderCart';
import HeaderAddress from '~/components/HeaderAddress';

import { useSelector } from 'react-redux';

import { Container, Form, FormInput, List } from './styles';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Search({ navigation }) {
  const addresses = useSelector(state => state.user.addresses);
  let address = [];
  if (addresses.length > 0) {
    address = addresses[0];
  }

  return (
    <Background>
      <Container>
        <HeaderCart navigation={navigation} />
        <HeaderAddress navigation={navigation} address={address} />
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
          renderItem={({ item }) => (
            <Product navigation={navigation} data={item} />
          )}
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
