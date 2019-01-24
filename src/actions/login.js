import request from '../utils/request.js'
import {
  param
} from '../utils'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'

export const USER_REGISTRY = 'USER_REGISTRY'
export const USER_REGISTRY_PENDING = 'USER_REGISTRY_PENDING'
export const USER_REGISTRY_SUCCESS = 'USER_REGISTRY_SUCCESS'
export const USER_REGISTRY_ERROR = 'USER_REGISTRY_ERROR'

export const GET_USER = 'GET_USER'
export const GET_USER_PENDING = 'GET_USER_PENDING'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'

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

export function getUserInfo(data) {
  return {
    type: GET_USER,
    payload: {
      promise: request({
        url: '/getUserInfo',
        type: 'POST'
      })
    }
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