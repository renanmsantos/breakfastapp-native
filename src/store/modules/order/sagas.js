import { all, takeLatest, call, put } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '~/services/api';

import {
  newOrderRequestSuccess,
  orderRequestSuccess,
} from '~/store/modules/order/actions';

export function* newOrderRequest({ payload }) {
  try {
    const { user, products, totalPrice } = payload;
    const customerId = user.id;
    console.tron.log(products[0]);
    const partnerId = products[0].partnerId;
    const addressId = user.addresses[0].id;

    toSendProducts = [];
    products.map(product => {
      toSendProducts.push({
        productId: product.id,
        quantity: product.quantity,
      });
    });

    yield call(api.post, 'orders', {
      customerId,
      partnerId,
      addressId,
      totalPrice,
      products: toSendProducts,
    });
    Alert.alert('Sucesso!', 'Pedido feito com sucesso.');
    yield put(newOrderRequestSuccess());
  } catch (err) {
    Alert.alert('Falha!', 'Houve uma falha na realização de um pedido.');
  }
}

export function* orderRequest({ payload }) {
  const { userId } = payload;
  try {
    const response = yield call(api.get, 'orders/customers/' + userId);
    yield put(orderRequestSuccess(response.data));
  } catch (err) {
    //Alert.alert('Falha!', 'Falha ao buscar os produtos.');
  }
}

export default all([
  takeLatest('@order/NEW_ORDER_REQUEST', newOrderRequest),
  takeLatest('@order/ORDER_REQUEST', orderRequest),
]);
