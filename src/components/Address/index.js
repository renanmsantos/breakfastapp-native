import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Left, AddressText, Box } from './styles';

export default function Address({ type, navigation }) {
  return (
    <Container>
      <Left>
        <AddressText>Rua Joana da Silva dos, 102 </AddressText>
      </Left>
      {type === 'edit' ? (
        <Box>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="mode-edit" size={25} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="cancel" size={25} color="#FF5F49" />
          </TouchableOpacity>
        </Box>
      ) : (
        <TouchableOpacity onPress={() => {}}>
          <Icon name="check-box-outline-blank" size={25} color="#333" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
