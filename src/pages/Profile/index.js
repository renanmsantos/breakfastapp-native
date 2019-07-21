import React, { useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Subtitle from '~/components/Subtitle';
import Address from '~/components/Address';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  Separator,
  List,
  NewButton,
} from './styles';

data = [1, 2, 3];

export default function Profile({ navigation }) {
  const sobrenomeRef = useRef();
  const emailRef = useRef();
  const cpfRef = useRef();
  const celularRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <Background>
      <Container>
        <Title>Perfil</Title>
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
            onSubmitEditing={() => oldPasswordRef.current.focus()}
          />
          <Separator />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digita sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua nova"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme sua senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />
          <SubmitButton onPress={() => {}}>Salvar</SubmitButton>
        </Form>
        <Subtitle>Endereços</Subtitle>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Address data={item} />}
        />
        <NewButton onPress={() => navigation.navigate('FormAddress')}>
          Novo endereço
        </NewButton>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-box" size={20} color={tintColor} />
  ),
};
