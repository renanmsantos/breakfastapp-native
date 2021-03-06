export function createUserRequest(
  name,
  lastName,
  email,
  password,
  cpf,
  cellphone
) {
  return {
    type: '@user/CREATE_USER_REQUEST',
    payload: {
      name,
      lastName,
      email,
      password,
      cpf,
      cellphone,
    },
  };
}

export function removeAddressRequest(userId, addressId) {
  return {
    type: '@user/REMOVE_ADDRESS_REQUEST',
    payload: { userId, addressId },
  };
}

export function removeAddressSuccess(addresses) {
  return {
    type: '@user/REMOVE_ADDRESS_SUCCESS',
    payload: { addresses },
  };
}

export function addAddressRequest(
  userId,
  cep,
  street,
  number,
  district,
  city,
  state
) {
  return {
    type: '@user/ADD_ADDRESS_REQUEST',
    payload: { userId, cep, street, number, district, city, state },
  };
}

export function addAddressSuccess(addresses) {
  return {
    type: '@user/ADD_ADDRESS_SUCCESS',
    payload: { addresses },
  };
}

export function updateUserRequest(id, name, lastName, password, cellphone) {
  return {
    type: '@user/UPDATE_USER_REQUEST',
    payload: {
      id,
      name,
      lastName,
      cellphone,
      password,
    },
  };
}

export function updateUserSuccess(user) {
  return {
    type: '@user/UPDATE_USER_SUCCESS',
    payload: { user },
  };
}

export function updateUserFailure() {
  return {
    type: '@user/UPDATE_USER_FAILURE',
  };
}
