import React, { Component } from 'react'
import { parseTime } from '../utils'

class TimeLine extends Component {
	render() {
		const { total, list, type } = this.props
		return (
			<div className="timeline">
			  <span className="archive-move-on"></span>
			  <span className="archive-page-counter">
			      <span>一共有 {total} 篇文章</span>
			  </span>
		    <div className="collection-title">
		      <h2>
		        <span>{type}</span>
		      </h2>
		    </div>
			  {
			  	list.map((item => (
			  		<article className="posts-collapse" key={item.id}>
					    <header>
					      <h2>
					        <a href={`/article/${item.id}`}>
					          <span>{item.title}</span>
					        </a>
					      </h2>
					      <div className="post-meta">
					        { parseTime(item.publishTime, '{m}-{d}') }
					      </div>
					    </header>
					  </article>
		  		)))
			  }
			</div>
		)
	}
}

export default TimeLine
