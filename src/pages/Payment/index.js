import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import Background from '~/components/Background';

export default function Payment() {
  return <Background />;
}

Payment.navigationOptions = ({ navigation }) => ({
  title: 'Pagamento',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
