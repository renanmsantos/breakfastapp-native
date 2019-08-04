import { all, put, takeLatest, call } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '~/services/api';

import { updateUserSuccess } from './actions';

export function* createUser({ payload }) {
  try {
    const { name, lastName, email, password, cpf, cellphone } = payload;

    yield call(api.post, 'customers', {
      name,
      lastName,
      cpf,
      cellphone,
      email,
      password,
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

export default all([
  takeLatest('@user/CREATE_USER_REQUEST', createUser),
  takeLatest('@user/UPDATE_USER_REQUEST', updateUser),
]);
