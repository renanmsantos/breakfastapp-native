import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Product from '~/components/Product';

import { Container, Form, FormInput, Title, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Products() {
  return (
    <Background>
      <Container>
        <Title>Produtos</Title>
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

Products.navigationOptions = {
  tabBarLabel: 'Produtos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="free-breakfast" size={20} color={tintColor} />
  ),
};
