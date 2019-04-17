import request from '../utils/request.js'
import { param } from '../utils'

export const GET_ARTICLE = 'GET_ARTICLE'
export const GET_ARTICLE_PENDING = 'GET_ARTICLE_PENDING'
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS'
export const GET_ARTICLE_DETAIL = 'GET_ARTICLE_DETAIL'
export const GET_ARTICLE_DETAIL_SUCCESS = 'GET_ARTICLE_DETAIL_SUCCESS'

export function getArticle(data) {
	return {
		type: GET_ARTICLE,
		meta: data,
		payload: {
			promise: request({
				url: '/article/list',
				type: 'POST',
				data: param(data)
			})
		}
	}
}

export function getAeticleDetail(data) {
	return {
		type: GET_ARTICLE_DETAIL,
		meta: data,
		payload: {
			promise: request({
				url: `/article/detail/${data.id}`,
				type: 'GET'
			})
		}
	}
}
