import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  name: null,
  lastName: null,
  email: null,
  cpf: null,
  cellphone: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.id = action.payload.user.id;
        draft.name = action.payload.user.name;
        draft.lastName = action.payload.user.lastName;
        draft.email = action.payload.user.email;
        draft.cpf = action.payload.user.cpf;
        draft.cellphone = action.payload.user.cellphone;
      });
    case '@user/UPDATE_USER_SUCCESS':
      return produce(state, draft => {
        draft.id = action.payload.user.id;
        draft.name = action.payload.user.name;
        draft.lastName = action.payload.user.lastName;
        draft.cellphone = action.payload.user.cellphone;
      });
    default:
      return state;
  }
}
