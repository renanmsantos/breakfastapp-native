import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Left, Info, Name } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function HeaderCart({ navigation }) {
  const { name, lastName } = useSelector(state => state.user);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Left>
        <Info>
          <Name>
            Olá, {name} {lastName}
          </Name>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Icon name="power-settings-new" size={30} color="#fff" />
      </TouchableOpacity>
    </Container>
  );
}
