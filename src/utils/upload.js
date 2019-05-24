import { message } from 'antd'
export const upload = (config) => {
	const {
		url,
		data,
		type,
		// contentType
	} = config
	return new Promise((resolve, reject) => {
		let options = {}
		options = {
			method: type || 'POST',
			body: data
		}
		fetch(url, options).then(response => {
			if (response.ok) {
				return response.json()
			}
		}).then(json => {
			console.log(json)
			if (json.code === '00') { //成功
				resolve(json)
			} else {
				message.error(json.msg)
				reject('error')
			}
		}).catch(error => {
			message.error(error.message)
			reject(error)
		})
	})
}

export default upload
