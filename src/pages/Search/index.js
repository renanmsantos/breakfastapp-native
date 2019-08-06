import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Product from '~/components/Product';
import HeaderCart from '~/components/HeaderCart';
import HeaderAddress from '~/components/HeaderAddress';

import { productRequest } from '~/store/modules/product/actions';

import { Container, Form, FormInput, List } from './styles';

export default function Search({ navigation }) {
  const dispatch = useDispatch();
  const addresses = useSelector(state => state.user.addresses);
  const products = useSelector(state => state.product.products);

  const [productsBackup, setProductsBackup] = useState([]);

  let address = [];
  if (addresses && addresses.length > 0) {
    address = addresses[0];
  }

  useEffect(() => {
    async function loadProducts() {
      dispatch(productRequest());
      setProductsBackup(products);
    }
    loadProducts();
  }, []);

  function setSearchText(event) {
    searchText = event.nativeEvent.text;
    data = productsBackup;
    searchText = searchText.trim().toLowerCase();
    data = data.filter(item => {
      return item.name.toLowerCase().match(searchText);
    });
    setProducts(data);
  }

  return (
    <Background>
      <Container>
        <HeaderCart navigation={navigation} />
        <HeaderAddress
          navigation={navigation}
          address={address}
          isChangeable={true}
        />
        <Form>
          <FormInput
            icon="search"
            onChange={setSearchText.bind(this)}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="O que está procurando hoje?"
          />
        </Form>
        <List
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Product navigation={navigation} product={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Search.navigationOptions = {
  tabBarLabel: 'Busca',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={20} color={tintColor} />
  ),
};
