import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import AddressInformation from '~/components/AddressInformation';
import PaymentInformation from '~/components/PaymentInformation';

import { Container, SubmitButton } from './styles';

export default function Payment({ navigation }) {
  const products = useSelector(state => state.cart.products);
  const addresses = useSelector(state => state.user.addresses);

  return (
    <Background>
      <Background>
        <Container>
          <AddressInformation addresses={addresses} />
          <PaymentInformation products={products} />
        </Container>
        {products && products.length > 0 && (
          <SubmitButton onPress={() => navigation.navigate('Payment')}>
            Realizar pedido
          </SubmitButton>
        )}
      </Background>
    </Background>
  );
}

Payment.navigationOptions = ({ navigation }) => ({
  title: 'Pagamento',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
