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

export default function FormAddress({ navigation }) {
  const streetRef = useRef();
  const numberRef = useRef();
  const districtRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();

  return (
    <Background>
      <Container>
        <Title>Novo endereço</Title>

        <Form>
          <FormInput
            icon="search"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Tem o CEP? Vamos procurar."
            returnKeyType="next"
            onSubmitEditing={() => streetRef.current.focus()}
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Endereço"
            returnKeyType="next"
            ref={streetRef}
            onSubmitEditing={() => numberRef.current.focus()}
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="phone-pad"
            placeholder="Número"
            returnKeyType="next"
            ref={numberRef}
            onSubmitEditing={() => districtRef.current.focus()}
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholder="Bairro"
            returnKeyType="next"
            ref={districtRef}
            onSubmitEditing={() => cityRef.current.focus()}
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholder="Cidade"
            returnKeyType="next"
            ref={cityRef}
            onSubmitEditing={() => stateRef.current.focus()}
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholder="Estado"
            returnKeyType="next"
            ref={stateRef}
          />
          <SubmitButton onPress={() => {}}>Salvar</SubmitButton>
        </Form>
        <Link onPress={() => navigation.navigate('Profile')}>
          <LinkText>Voltar</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
