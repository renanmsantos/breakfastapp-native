import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native';

import Background from '~/components/Background';

export default function ChoosePayment() {
  return (
    <Background />
  );
}

ChoosePayment.navigationOptions = ({ navigation }) => ({
  title: 'Como eu vou pagar?',
  headerLeft: () => (
    <TouchableOpacity onPress={ () => navigation.navigate('Search') }>
      <Icon name="chevron-left" size={20} color="#fff"/>
    </TouchableOpacity>
  ),
});
