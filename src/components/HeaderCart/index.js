import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import IconBadge from 'react-native-icon-badge';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Left, Info, Name } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function HeaderCart({ navigation }) {
  const { name, lastName } = useSelector(state => state.user);
  const { products } = useSelector(state => state.cart);
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
        <IconBadge
          MainElement={<Icon name="shopping-cart" size={35} color="#fff" />}
          BadgeElement={
            <Name style={{ color: '#FFFFFF' }}>{products.length}</Name>
          }
          IconBadgeStyle={{
            fontSize: 0,
            width: 20,
            height: 20,
            backgroundColor: '#f2be21',
          }}
          Hidden={products.length == 0}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout}>
        <Icon name="power-settings-new" size={30} color="#fff" />
      </TouchableOpacity>
    </Container>
  );
}
