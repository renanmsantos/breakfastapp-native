import React, { useRef } from 'react';

import Background from '~/components/Background';

import {
  Container,
  Form,
  Title,
  FormInput,
  SubmitButton,
  Link,
  LinkText,
} from './styles';

export default function NewGroup({ navigation }) {
  const sobrenomeRef = useRef();
  const emailRef = useRef();
  const cpfRef = useRef();
  const celularRef = useRef();
  const passwordRef = useRef();

  return (
    <Background>
      <Container>
        <Title>Criar novo grupo</Title>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome"
            returnKeyType="next"
            onSubmitEditing={() => sobrenomeRef.current.focus()}
          />
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu sobrenome"
            returnKeyType="next"
            ref={sobrenomeRef}
            onSubmitEditing={() => celularRef.current.focus()}
          />
          <FormInput
            icon="phone-android"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="phone-pad"
            placeholder="Digite seu celular"
            returnKeyType="next"
            ref={celularRef}
            onSubmitEditing={() => cpfRef.current.focus()}
          />
          <FormInput
            icon="account-box"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholder="Digite seu CPF"
            returnKeyType="next"
            ref={cpfRef}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />

          <SubmitButton onPress={() => {}}>Salvar</SubmitButton>
        </Form>
        <Link onPress={() => navigation.navigate('App')}>
          <LinkText>Voltar</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
