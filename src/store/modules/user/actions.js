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
      cpf,
      cellphone,
      email,
      password,
    },
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
