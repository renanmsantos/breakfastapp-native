import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native';

import Background from '~/components/Background';

export default function Cart() {
  return (
    <Background />
  );
}

Cart.navigationOptions = ({ navigation }) => ({
  title: 'Carrinho',
  headerLeft: () => (
    <TouchableOpacity onPress={ () => navigation.navigate('Search') }>
      <Icon name="chevron-left" size={20} color="#fff"/>
    </TouchableOpacity>
  ),
});
