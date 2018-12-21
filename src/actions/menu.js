import request from '../utils/request.js'

export const GET_ALL_MENU = 'GET_ALL_MENU'
export const GET_ALL_MENU_SUCCESS = 'GET_ALL_MENU_SUCCESS'

export function getAllMenu() {
	return {
		type: GET_ALL_MENU,
		payload: {
			promise: request({
				url: '/menu/list',
				type: 'GET',
				data: {}
			})
		}
	}
}