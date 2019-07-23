import React from 'react';

import { Image } from 'react-native';

import {
  Container,
  Form,
  ChooseText,
  ChooseButton,
  Link,
  LinkText,
} from './styles';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

export default function ChooseUser({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <ChooseText>O que deseja fazer no nosso App?</ChooseText>
        <Form>
          <ChooseButton onPress={() => navigation.navigate('FormCustomer')}>
            Quero organizar meu café
          </ChooseButton>
          <ChooseButton onPress={() => navigation.navigate('FormPartner')}>
            Quero vender meus produtos
          </ChooseButton>
        </Form>
        <Link onPress={() => navigation.navigate('SignIn')}>
          <LinkText>Já tenho cadastro</LinkText>
        </Link>
      </Container>
    </Background>
  );
}