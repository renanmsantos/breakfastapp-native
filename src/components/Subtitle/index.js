import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text, Line } from './styles';

export default function Subtitle({ children }) {
  return (
    <Container>
      <Line />
      <Text>{ children }</Text>
    </Container>
  );
}

Subtitle.propTypes = {
  children: PropTypes.string.isRequired
};

