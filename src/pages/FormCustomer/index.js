import React, { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';

import Background from '~/components/Background';

import { createUserRequest } from '~/store/modules/user/actions';

import {
  Container,
  Form,
  Title,
  FormInput,
  SubmitButton,
  Link,
  LinkText,
} from './styles';

export default function FormCustomer({ navigation }) {
  const dispatch = useDispatch();

  const lastNameRef = useRef();
  const emailRef = useRef();
  const cpfRef = useRef();
  const cellphoneRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(
      createUserRequest(name, lastName, cellphone, cpf, email, password)
    );
  }

  return (
    <Background>
      <Container>
        <Title>Novo usuário</Title>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => lastNameRef.current.focus()}
          />
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu sobrenome"
            returnKeyType="next"
            value={lastName}
            onChangeText={setLastName}
            ref={lastNameRef}
            onSubmitEditing={() => cellphoneRef.current.focus()}
          />
          <FormInput
            icon="phone-android"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="phone-pad"
            placeholder="Digite seu celular"
            returnKeyType="next"
            value={cellphone}
            onChangeText={setCellphone}
            ref={cellphoneRef}
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
            value={cpf}
            onChangeText={setCpf}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />

          <SubmitButton onPress={handleSubmit}>Salvar</SubmitButton>
        </Form>
        <Link onPress={() => navigation.navigate('SignIn')}>
          <LinkText>Voltar</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
