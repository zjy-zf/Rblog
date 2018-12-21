import request from '../utils/request.js'
import { param } from '../utils'

export const TECH_GET_ARTICLE = 'TECH_GET_ARTICLE'
export const TECH_GET_ARTICLE_PENDING = 'TECH_GET_ARTICLE_PENDING'
export const TECH_GET_ARTICLE_SUCCESS = 'TECH_GET_ARTICLE_SUCCESS'

export function getTechArticle(data) {
	return {
		type: TECH_GET_ARTICLE,
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

