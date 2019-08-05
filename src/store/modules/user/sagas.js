import { all, put, takeLatest, call } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import {
  updateUserSuccess,
  removeAddressSuccess,
  addAddressSuccess,
} from './actions';

export function* createUser({ payload }) {
  try {
    const { name, lastName, email, password, cpf, cellphone } = payload;

    yield call(api.post, 'customers', {
      name,
      lastName,
      email,
      password,
      cpf,
      cellphone,
    });
    Alert.alert('Sucesso!', 'Seu usuário foi cadastrado com sucesso.');
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro na cadastro de um usuário.'
    );
  }
}

export function* updateUser({ payload }) {
  try {
    yield call(api.put, 'customers', payload);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso.');
    yield put(updateUserSuccess(payload));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do seu perfil.'
    );
  }
}

export function* removeAddressUser({ payload }) {
  try {
    const { userId, addressId } = payload;
    const response = yield call(
      api.delete,
      'customers/' + userId + '/address/' + addressId
    );
    yield put(removeAddressSuccess(response.data.addresses));
  } catch (err) {
    Alert.alert(
      'Falha na removação',
      'Houve um erro ao remover este endereço.'
    );
  }
}

export function* addAddressUser({ payload }) {
  try {
    const { userId, cep, street, number, district, city, state } = payload;

    const response = yield call(api.put, 'customers/' + userId + '/address', {
      userId,
      cep,
      street,
      number,
      district,
      city,
      state,
    });
    Alert.alert('Sucesso!', 'O endereço foi salvo com sucesso.');
    yield put(addAddressSuccess(response.data.addresses));
  } catch (err) {
    Alert.alert('Falha no cadastro', 'Houve um erro no cadastro do endereço.');
  }
}

export default all([
  takeLatest('@user/CREATE_USER_REQUEST', createUser),
  takeLatest('@user/UPDATE_USER_REQUEST', updateUser),
  takeLatest('@user/REMOVE_ADDRESS_REQUEST', removeAddressUser),
  takeLatest('@user/ADD_ADDRESS_REQUEST', addAddressUser),
]);
