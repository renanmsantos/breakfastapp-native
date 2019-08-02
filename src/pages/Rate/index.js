import React from 'react';

import {
  Container,
  Title,
  Form,
  OrderDate,
  PartnerList,
  PartnerName,
  PartnerContent,
  ProductList,
  CancelButton,
  SignLink,
  SignLinkText,
} from './styles';

import Background from '~/components/Background';

const dataPartner = [1, 2, 3];

export default function Rate({ navigation }) {
  return (
    <Background>
      <Container>
        <Title>Avaliar pedido #12321</Title>
        <Form>
          <OrderDate>Data do pedido: 02/02/2019 11:22</OrderDate>
        </Form>
        <PartnerList
          data={dataPartner}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <PartnerContent>
              <PartnerName>Produtor Casa da Joana</PartnerName>
              <ProductList />
            </PartnerContent>
          )}
        />
        <SignLink onPress={() => navigation.navigate('Orders')}>
          <SignLinkText>Voltar</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
