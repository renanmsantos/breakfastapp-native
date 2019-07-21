import React, { useRef } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import NewInvite from '~/components/NewInvite';
import Invite from '~/components/Invite';
import Subtitle from '~/components/Subtitle';

import {
  Container,
  Title,
  Form,
  FormInput,
  DescriptionText,
  SubmitButton,
  WithoutGroup,
  GroupAdmin,
  List,
} from './styles';

const data = [1, 2, 3, 4, 5];

export default function Groups({ navigation }) {
  const nomeEmpresaRef = useRef();
  const isAdmin = true;
  const hasGroup = true;
  return (
    <Background>
      <Container>
        <Title>Grupos</Title>

        {!isAdmin ? (
          !hasGroup ? (
            <WithoutGroup>
              <DescriptionText>
                Você ainda não possui ou participa de um grupo. Desejar criar
                um?
              </DescriptionText>
              <SubmitButton onPress={() => navigation.navigate('FormGroup')}>
                Criar novo grupo
              </SubmitButton>
            </WithoutGroup>
          ) : (
            <WithoutGroup>
              <DescriptionText>Você está no grupo: XXXX.</DescriptionText>
              <SubmitButton onPress={() => {}}>Sair do grupo</SubmitButton>
            </WithoutGroup>
          )
        ) : (
          <GroupAdmin>
            <DescriptionText>Você é o administrador do grupo.</DescriptionText>

            <Form>
              <FormInput
                icon="description"
                autoCorrect={false}
                autoCapitalize="none"
                value="Grupo dos amigos"
                returnKeyType="next"
                onSubmitEditing={() => nomeEmpresaRef.current.focus()}
              />
              <FormInput
                icon="business"
                autoCorrect={false}
                autoCapitalize="none"
                value="GFT Enterprise"
                returnKeyType="next"
                ref={nomeEmpresaRef}
                onSubmitEditing={() => {}}
              />
              <SubmitButton onPress={() => {}}>Editar</SubmitButton>
            </Form>

            <Subtitle>Últimos convites</Subtitle>
            <List
              data={data}
              keyExtractor={item => String(item)}
              renderItem={({ item }) => <Invite data={item} />}
            />

            <Subtitle>Novos convites</Subtitle>
            <NewInvite />
          </GroupAdmin>
        )}
      </Container>
    </Background>
  );
}

Groups.navigationOptions = {
  tabBarLabel: 'Grupos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="group" size={20} color={tintColor} />
  ),
};
