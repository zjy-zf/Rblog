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

  LOGOUT,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,

  FEG_LOGOUT,
} from '.././actions/login'
import { message } from 'antd'

import {
  setCookie,
  delCookie
} from '../utils/index.js'

const initialState = {
  userInfo: [],
  loginStatus: false,
  registryStatus: false,
};

export default function menu(state = initialState, action = {}) {
  switch (action.type) {

    //用户登陆成功
    case USER_LOGIN_SUCCESS:
      message.success("登录成功！")
      return Object.assign({}, state, {
        loginStatus: true
      })

      //用户注册成功
    case USER_REGISTRY_SUCCESS:
      return Object.assign({}, state, {
        registryStatus: true
      })

    case GET_USER_SUCCESS:
      setCookie("token", action.payload.data.id)
      return Object.assign({}, state, {
        userInfo: action.payload.data,
        loginStatus: true
      })

    case GET_USER_ERROR:
      delCookie("token")
      return Object.assign({}, state, {
        userInfo: {},
        loginStatus: false
      })

      //前端登出
    case FEG_LOGOUT:
      return Object.assign({}, state, {
        userInfo: {},
        loginStatus: false
      })

      //用户登出
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        userInfo: {},
        loginStatus: false
      })

    default:
      return state;
  }
}
