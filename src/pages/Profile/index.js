import React, { useRef, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';

import Background from '~/components/Background';
import Subtitle from '~/components/Subtitle';
import Address from '~/components/Address';

import { updateUserRequest } from '~/store/modules/user/actions';

import {
  Container,
  Title,
  Form,
  FormInput,
  Separator,
  List,
  NewButton,
} from './styles';

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user);
  const addresses = useSelector(state => state.user.addresses);

  const lastnameRef = useRef();
  const emailRef = useRef();
  const cpfRef = useRef();
  const cellphoneRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [id] = useState(profile.id);
  const [name, setName] = useState(profile.name);
  const [cpf] = useState(profile.cpf);
  const [email] = useState(profile.email);
  const [lastName, setLastName] = useState(profile.lastName);
  const [cellphone, setCellphone] = useState(profile.cellphone);
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setConfirmPassword('');
    setPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(updateUserRequest(id, name, lastName, password, cellphone));
  }

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
            ref={lastnameRef}
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
            ref={lastnameRef}
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
            editable={false}
            value={cpf}
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            editable={false}
            value={email}
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
          />
          <Separator />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha atual"
            ref={oldPasswordRef}
            value={oldPassword}
            onChangeText={setOldPassword}
            returnKeyType="send"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua nova senha"
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            returnKeyType="send"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme sua senha"
            ref={confirmPasswordRef}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            returnKeyType="send"
          />
          <NewButton onPress={handleSubmit}>Atualizar</NewButton>
        </Form>
        <Subtitle>Endereços</Subtitle>
        <List
          data={addresses}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Address address={item} type={'edit'} />}
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
