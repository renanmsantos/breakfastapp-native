import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'login', { email, password });
    const { token, customer } = response.data;

    api.defaults.headers.Authorization = token;

    yield put(signInSuccess(token, customer.user));
  } catch (err) {
    Alert.alert('Falha ao fazer o login', 'Por favor, tente novamente.');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
