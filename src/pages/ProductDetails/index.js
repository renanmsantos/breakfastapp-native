import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import ProductInfo from '~/components/ProductInfo';

import { Container } from './styles';

export default function ProductDetails() {
  const productDetail = useSelector(state => state.product.productDetail);

  return (
    <Background>
      <Background>
        <Container>
          <ProductInfo product={productDetail} />
        </Container>
      </Background>
    </Background>
  );
}

ProductDetails.navigationOptions = ({ navigation }) => ({
  title: 'Detalhe do produto',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
