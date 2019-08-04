import React from 'react';

import { Container, List, Title, Form, SignLink, SignLinkText } from './styles';

import { useSelector } from 'react-redux';

import Background from '~/components/Background';
import Address from '~/components/Address';

export default function ChooseAddress({ navigation }) {
  const addresses = useSelector(state => state.user.addresses);

  return (
    <Background>
      <Container>
        <Title>Escolha o endereço de entrega</Title>
        <Form>
          <List
            data={addresses}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Address type={'select'} address={item} />
            )}
          />
        </Form>
        <SignLink onPress={() => navigation.navigate('Search')}>
          <SignLinkText>Voltar</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
