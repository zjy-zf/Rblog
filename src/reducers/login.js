import {
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_REGISTRY_PENDING,
  USER_REGISTRY_SUCCESS,
  USER_REGISTRY_ERROR,
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from '.././actions/login';

const initialState = {
  userInfo: [],
  loginStatus: false
};

export default function menu(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return Object.assign({}, initialState, {
        loginStatus: true
      });
    default:
      return state;
  }
}