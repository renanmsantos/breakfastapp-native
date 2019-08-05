import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Product from '~/components/Product';
import HeaderCart from '~/components/HeaderCart';
import HeaderAddress from '~/components/HeaderAddress';

import api from '~/services/api';

import { Container, Form, FormInput, List } from './styles';

export default function Search({ navigation }) {
  const addresses = useSelector(state => state.user.addresses);

  const [products, setProducts] = useState([]);
  const [productsBackup, setProductsBackup] = useState([]);

  let address = [];
  if (addresses && addresses.length > 0) {
    address = addresses[0];
  }

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      setProducts(response.data);
      setProductsBackup(response.data);
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
        <HeaderAddress navigation={navigation} address={address} />
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
