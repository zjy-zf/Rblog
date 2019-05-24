import React, { Component } from 'react'
// import { getRealPath } from '../utils'
import Valine from 'valine'

class Comment extends Component {
	constructor(props) {
		super(props)
		this.comments = React.createRef()
	}

	componentDidMount() {
    new Valine({
      el: "#vcomments",
      appId: "vQMyzbyEM9RLj6VA7raYDiPy-gzGzoHsz",
      appKey: "mWuN5I07WOtbllW27wE02OD7",
      notify: false,
      verify: false,
      avatar: "robohash",
      placeholder: "填写评论"
    })
	}

	render() {
		return (
			<div>
				<div className="comment-title">
					<i className="iconfont icon-footprint"></i> 留下足迹 <i className="iconfont icon-footprint"></i>
				</div>
				<div id="vcomments" ref={this.comments}></div>
			</div>
		)
	}
}

export default Comment
