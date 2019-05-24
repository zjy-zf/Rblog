import request from '../utils/request.js'
import {
  param
} from '../utils'

//用户登陆
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'

//用户注册
export const USER_REGISTRY = 'USER_REGISTRY'
export const USER_REGISTRY_PENDING = 'USER_REGISTRY_PENDING'
export const USER_REGISTRY_SUCCESS = 'USER_REGISTRY_SUCCESS'
export const USER_REGISTRY_ERROR = 'USER_REGISTRY_ERROR'

//获取用户信息
export const GET_USER = 'GET_USER'
export const GET_USER_PENDING = 'GET_USER_PENDING'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'

//用户登出
export const LOGOUT = 'LOGOUT'
export const LOGOUT_PENDING = 'LOGOUT_PENDING'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'

//前端登出
export const FEG_LOGOUT = 'FEG_LOGOUT'

export function userLogin(data) {
  return {
    type: USER_LOGIN,
    meta: data,
    payload: {
      promise: request({
        url: '/userLogin',
        type: 'POST',
        data: param(data)
      })
    }
  }
}

export function getUserInfo(token) {
  return {
    type: GET_USER,
    payload: {
      promise: request({
        url: '/user/getUserInfo',
        type: 'GET',
        data: token
      })
    }
  }
}

//后端登出
export function logOut() {
  return {
    type: LOGOUT,
    payload: {
      promise: request({
        url: '/userLogout',
        type: 'POST'
      })
    }
  }
}

//前端登出
export function fegLogOut() {
  return {
    type: FEG_LOGOUT
  }
}

export function registry(data) {
  return {
    type: USER_REGISTRY,
    meta: data,
    payload: {
      promise: request({
        url: '/registry',
        type: 'POST',
        data: param(data)
      })
    }
  }
}
