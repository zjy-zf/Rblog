const request = (config) => {
	const {
		url,
		data,
		type,
		contentType
	} = config
	return new Promise((resolve, reject) => {
		let options = {}
		if (type.toLowerCase() === 'get') {
			options = {
				method: type,
				headers: new Headers({
					'Content-Type': contentType || 'application/x-www-form-urlencoded'
				})
			}
		} else {
			options = {
				method: type,
				body: data,
				headers: new Headers({
					'Content-Type': contentType || 'application/x-www-form-urlencoded'
				})
			}
		}
		fetch(url, options).then(response => {
			if (response.ok) {
				return response.json()
			}
		}).then(json => {
			if (json.code === '00') { //成功
				resolve(json)
			} else {
				reject('error')
			}
			console.log(json)
		}).catch(error => {
			reject(error)
			console.log(error)
		})
	})
}

export default request