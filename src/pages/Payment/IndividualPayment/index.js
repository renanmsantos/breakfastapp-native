import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import Background from '~/components/Background';

export default function IndividualPayment() {
  return <Background />;
}

IndividualPayment.navigationOptions = ({ navigation }) => ({
  title: 'Pagamento individual',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
