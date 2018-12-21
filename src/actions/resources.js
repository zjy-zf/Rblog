import request from '../utils/request.js'
import { param } from '../utils'

export const RES_GET_ARTICLE = 'RES_GET_ARTICLE'
export const RES_GET_ARTICLE_PENDING = 'RES_GET_ARTICLE_PENDING'
export const RES_GET_ARTICLE_SUCCESS = 'RES_GET_ARTICLE_SUCCESS'

export function getResArticle(data) {
	return {
		type: RES_GET_ARTICLE,
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

