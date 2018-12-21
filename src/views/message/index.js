import React, { Component } from 'react'
import Comment from '../../components/comment.js'

class Message extends Component {
	render() {
		return (
			<div className="container message-index">
				<Comment/>
			</div>
		)
	}
}

export default Message