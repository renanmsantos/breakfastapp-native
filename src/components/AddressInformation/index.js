import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TitleText, Title, Text, Form } from './styles';

export default function AddressInformation({ addresses }) {
  let address = [];
  if (addresses && addresses.length > 0) {
    address = addresses[0];
  }
  return (
    <Container>
      <Title>
        <Icon name="home" size={35} color="#333" />
        <TitleText>Endereço de entrega</TitleText>
      </Title>
      <Form>
        <Text>
          {address.street} , {address.number}
        </Text>
        <Text>
          {address.district}, {address.city}
        </Text>
        <Text>{address.cep}</Text>
      </Form>
    </Container>
  );
}
