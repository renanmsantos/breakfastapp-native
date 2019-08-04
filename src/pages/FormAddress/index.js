import React, { useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Background from '~/components/Background';

import { addAddressRequest } from '~/store/modules/user/actions';

import {
  Container,
  Form,
  Title,
  FormInput,
  SubmitButton,
  Link,
  LinkText,
} from './styles';

export default function FormAddress({ navigation }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);

  const streetRef = useRef();
  const numberRef = useRef();
  const districtRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  function handleSubmit() {
    dispatch(
      addAddressRequest(userId, cep, street, number, district, city, state)
    );
  }

  return (
    <Background>
      <Container>
        <Title>Novo endereço</Title>

        <Form>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="CEP"
            keyboardType="phone-pad"
            value={cep}
            onChangeText={setCep}
            returnKeyType="next"
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Endereço"
            value={street}
            onChangeText={setStreet}
            returnKeyType="next"
            ref={streetRef}
            onSubmitEditing={() => numberRef.current.focus()}
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholder="Número"
            returnKeyType="next"
            value={number}
            onChangeText={setNumber}
            ref={numberRef}
            onSubmitEditing={() => districtRef.current.focus()}
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Bairro"
            returnKeyType="next"
            value={district}
            onChangeText={setDistrict}
            ref={districtRef}
            onSubmitEditing={() => cityRef.current.focus()}
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Cidade"
            returnKeyType="next"
            value={city}
            onChangeText={setCity}
            ref={cityRef}
            onSubmitEditing={() => stateRef.current.focus()}
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Estado"
            value={state}
            onChangeText={setState}
            returnKeyType="next"
            ref={stateRef}
          />
          <SubmitButton onPress={handleSubmit}>Salvar</SubmitButton>
        </Form>
        <Link onPress={() => navigation.navigate('Profile')}>
          <LinkText>Voltar</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
