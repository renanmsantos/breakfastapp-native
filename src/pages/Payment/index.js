import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import AddressInformation from '~/components/AddressInformation';
import PaymentInformation from '~/components/PaymentInformation';
import TotalInformation from '~/components/TotalInformation';

import { Container, SubmitButton } from './styles';

import { newOrderRequest } from '~/store/modules/order/actions';

export default function Payment({ navigation }) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const addresses = useSelector(state => state.user.addresses);
  const user = useSelector(state => state.user);

  function handleSubmit() {
    dispatch(newOrderRequest(user, products));
    navigation.navigate('Orders');
  }

  return (
    <Background>
      <Background>
        <Container>
          <AddressInformation addresses={addresses} />
          <PaymentInformation products={products} />
          <TotalInformation value={totalPrice} />
        </Container>
        {products && products.length > 0 && (
          <SubmitButton onPress={handleSubmit}>Realizar pedido</SubmitButton>
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
