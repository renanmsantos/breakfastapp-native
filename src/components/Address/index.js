import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Left, AddressText } from './styles';

import { removeAddressRequest } from '~/store/modules/user/actions';

export default function Address({ address, type }) {
  const dispatch = useDispatch();

  const userId = useSelector(state => state.user.id);

  const { street, number, id, cep } = address;

  function removeAddress() {
    dispatch(removeAddressRequest(userId, id));
  }

  return (
    <Container>
      <Left>
        <AddressText>
          {street}, {number} - {cep}
        </AddressText>
      </Left>
      {type === 'edit' ? (
        <TouchableOpacity onPress={removeAddress}>
          <Icon name="cancel" size={25} color="#FF5F49" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Icon name="check-box-outline-blank" size={25} color="#333" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
