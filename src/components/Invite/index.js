import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, EmailInvitedText, StatusText } from './styles';

export default function Invite() {
  return (
    <Container>
      <Left>
        <EmailInvitedText>teste@teste.com.br</EmailInvitedText>
      </Left>
      <Left>
        <StatusText>Realizado</StatusText>
        <Icon name="check" size={20} color="#00bc58" />
      </Left>
    </Container>
  );
}
