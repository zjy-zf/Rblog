import request from '../utils/request.js'
// import {
//   param
// } from '../utils'

export const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST'
export const GET_CATEGORY_LIST_PENDING = 'GET_CATEGORY_LIST_PENDING'
export const GET_CATEGORY_LIST_SUCCESS = 'GET_CATEGORY_LIST_SUCCESS'
export const GET_CATEGORY_LIST_ERROR = 'GET_CATEGORY_LIST_ERROR'

export function getCategoryList(data) {
  return {
    type: GET_CATEGORY_LIST,
    meta: data,
    payload: {
      promise: request({
        url: '/category/list',
        type: 'GET',
        data: data
      })
    }
  }
}
