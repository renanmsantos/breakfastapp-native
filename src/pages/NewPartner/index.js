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

export default function NewPartner({ navigation }) {
  const sobrenomeRef = useRef();
  const emailRef = useRef();
  const cnpjRef = useRef();
  const celularRef = useRef();
  const passwordRef = useRef();

  return (
    <Background>
      <Container>
        <Title>Novo parceiro</Title>

        <Form>
          <FormInput
            icon="business"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o nome da empresa"
            returnKeyType="next"
            onSubmitEditing={() => sobrenomeRef.current.focus()}
          />
          <FormInput
            icon="phone-android"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="phone-pad"
            placeholder="Digite o telefone de contato"
            returnKeyType="next"
            ref={celularRef}
            onSubmitEditing={() => cnpjRef.current.focus()}
          />
          <FormInput
            icon="account-box"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholder="Digite seu CNPJ"
            returnKeyType="next"
            ref={cnpjRef}
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
        <Link onPress={() => navigation.navigate('Choose')}>
          <LinkText>Voltar</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
