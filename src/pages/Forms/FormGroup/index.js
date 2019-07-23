import React, { useRef } from 'react';

import Background from '~/components/Background';
import NewInvite from '~/components/NewInvite';
import Subtitle from '~/components/Subtitle';

import {
  Container,
  Form,
  Title,
  FormInput,
  SubmitButton,
  Link,
  LinkText,
} from './styles';

export default function FormGroup({ navigation }) {
  const nomeEmpresaRef = useRef();

  return (
    <Background>
      <Container>
        <Title>Criar novo grupo</Title>

        <Form>
          <FormInput
            icon="description"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o nome do grupo"
            returnKeyType="next"
            onSubmitEditing={() => nomeEmpresaRef.current.focus()}
          />
          <FormInput
            icon="business"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o nome da empresa"
            returnKeyType="next"
            ref={nomeEmpresaRef}
            onSubmitEditing={() => {}}
          />

          <Subtitle>Convidar amigos</Subtitle>
          <NewInvite />

          <SubmitButton onPress={() => {}}>Criar</SubmitButton>
        </Form>
        <Link onPress={() => navigation.navigate('Groups')}>
          <LinkText>Voltar</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
