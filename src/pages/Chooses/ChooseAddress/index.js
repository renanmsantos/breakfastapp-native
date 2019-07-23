import React from 'react';

import { Container, List, Title, Link, LinkText } from './styles';

import Background from '~/components/Background';
import Address from '~/components/Address';

export default function ChooseAddress({ navigation }) {
  return (
    <Background>
      <Container>
        <Title>Escolha o endereço de entrega</Title>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Address data={item} />}
        />
        <Link onPress={() => navigation.navigate('App')}>
          <LinkText>Voltar</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
