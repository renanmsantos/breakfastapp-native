import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import AddressInformation from '~/components/AddressInformation';
import PaymentInformation from '~/components/PaymentInformation';
import TotalInformation from '~/components/TotalInformation';

import { Container } from './styles';

export default function OrderDetails({ navigation }) {
  const totalPrice = useSelector(state => state.order.orderDetail.totalPrice);
  const address = useSelector(
    state => state.order.orderDetail.delivery.address
  );
  const products = useSelector(state => state.order.orderDetailProducts);

  return (
    <Background>
      <Background>
        <Container>
          <AddressInformation addresses={address} />
          <PaymentInformation products={products} />
          <TotalInformation value={totalPrice} />
        </Container>
      </Background>
    </Background>
  );
}

OrderDetails.navigationOptions = ({ navigation }) => ({
  title: 'Detalhe do pedido',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
