import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TitleText, Title, List, Form } from './styles';

import ItemProduct from '~/components/ItemProduct';

export default function PaymentInformation({ products }) {
  return (
    <Container>
      <Title>
        <Icon name="shopping-cart" size={35} color="#333" />
        <TitleText>Informações do pedido</TitleText>
      </Title>
      <Form>
        <List
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ItemProduct product={item} />}
        />
      </Form>
    </Container>
  );
}
