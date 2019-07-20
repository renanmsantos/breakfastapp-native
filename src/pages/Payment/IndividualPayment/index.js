import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native';

import Background from '~/components/Background';

export default function IndividualPayment() {
  return (
    <Background />
  );
}

IndividualPayment.navigationOptions = ({ navigation }) => ({
  title: 'Realizar pagamento sozinho',
  headerLeft: () => (
    <TouchableOpacity onPress={ () => navigation.navigate('Search') }>
      <Icon name="chevron-left" size={20} color="#fff"/>
    </TouchableOpacity>
  ),
});
