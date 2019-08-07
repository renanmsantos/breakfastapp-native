import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TitleText, Title } from './styles';

import { formatPrice } from '~/util/format';

export default function TotalInformation({ value }) {
  return (
    <Container>
      <Title>
        <Icon name="attach-money" size={35} color="#333" />
        <TitleText>Total: {formatPrice(value)}</TitleText>
      </Title>
    </Container>
  );
}
