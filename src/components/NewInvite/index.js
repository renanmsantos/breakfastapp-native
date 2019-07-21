import React from 'react';

import { Container, FormInput, SubmitButton } from './styles';

export default function NewInvite() {
  return (
    <Container>
      <FormInput
        icon="mail-outline"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite o e-mail para enviar o convite"
        returnKeyType="next"
        onSubmitEditing={() => {}}
      />

      <SubmitButton>Convidar amigo</SubmitButton>
    </Container>
  );
}
