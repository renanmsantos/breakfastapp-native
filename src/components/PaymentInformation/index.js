import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TitleText, Title, Text, Form } from './styles';

export default function PaymentInformation({ products }) {
  return (
    <Container>
      <Title>
        <Icon name="shopping-cart" size={35} color="#333" />
        <TitleText>Informações do pedido</TitleText>
      </Title>
      <Form>
        <Text>{products[0].name}</Text>
      </Form>
    </Container>
  );
}
