import { all, put, takeLatest, call } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '~/services/api';

import { newOrderRequestSuccess } from './actions';

export function* newOrderRequest({ payload }) {
  try {
    const { user, products } = payload;
    const customerId = user.id;
    const partnerId = products[0].partnerId;
    const addressId = user.addresses[0].id;

    yield call(api.post, 'orders', {
      customerId,
      partnerId,
      addressId,
    });
  } catch (err) {}
}

export function* newOrderProductRequest({ payload }) {
  try {
    const { products } = payload;

    listProducts = [];
    products.map(product => {
      listProducts.push({
        productId: product.id,
        quantity: product.quantity,
      });
    });

    const returnedProducts = yield call(
      api.post,
      'orders/' + orderId + '/products',
      {
        listProducts,
      }
    );

    const order = {
      products: returnedProducts.data,
    };

    Alert.alert('Sucesso!', 'Seu pedido foi cadastrado com sucesso.');

    yield put(newOrderRequestSuccess(order));
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro na realização de um pedido.'
    );
  }
}

export default all([
  takeLatest('@order/ORDER_REQUEST', newOrderRequest),
  takeLatest('@order/ORDER_REQUEST', newOrderProductRequest),
]);
