import React from 'react';

import { Container, List, Title, Form, SignLink, SignLinkText } from './styles';

import Background from '~/components/Background';
import Address from '~/components/Address';

const data = [1, 2, 3, 4];

export default function ChooseAddress({ navigation }) {
  return (
    <Background>
      <Container>
        <Title>Escolha o endereço de entrega</Title>
        <Form>
          <List
            data={data}
            keyExtractor={item => String(item)}
            renderItem={({ item }) => <Address type={'select'} data={item} />}
          />
        </Form>
        <SignLink onPress={() => navigation.navigate('Search')}>
          <SignLinkText>Voltar</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
