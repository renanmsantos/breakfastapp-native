import { takeLatest, put, all, call } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '~/services/api';

import { productRequestSuccess } from '~/store/modules/product/actions';

export function* productRequest() {
  try {
    const response = yield call(api.get, 'products');
    yield put(productRequestSuccess(response.data));
  } catch (err) {
    //Alert.alert('Falha!', 'Falha ao buscar os produtos.');
  }
}

export default all([takeLatest('@product/PRODUCT_REQUEST', productRequest)]);
