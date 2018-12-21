import request from '../utils/request.js'
import { param } from '../utils'

export const ESS_GET_ARTICLE = 'ESS_GET_ARTICLE'
export const ESS_GET_ARTICLE_PENDING = 'ESS_GET_ARTICLE_PENDING'
export const ESS_GET_ARTICLE_SUCCESS = 'ESS_GET_ARTICLE_SUCCESS'

export function getEssaysArticle(data) {
	return {
		type: ESS_GET_ARTICLE,
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

