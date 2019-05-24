import React, {
	Component
} from 'react'
import {
	formatTime
} from '../utils'
import '../styles/css/github-markdown.css'
import {
	Link
} from 'react-router-dom'

class ArticleShow extends Component {
	render() {
		const {
			articleList
		} = this.props
		return (
			<div>
			{articleList.map((item => (
				<div className="post" key={ item.id }>
		    	<h1 className="article-title">
		    		<Link to={{ pathname: "/article/detail", search: `?articleId=${item.id}` }}>
              <span>{ item.title }</span>
            </Link>
			      <a href={`/article/${item.id}`}>

			      </a>
			    </h1>
			    <div className="article-top-meta pc-view">
			      <span>
			        发布时间 : { formatTime(item.publishTime) }
			      </span>
			    </div>
			    <div className="article-top-meta mobile-view">
			      <span>
			        发布 : { formatTime(item.publishTime) }
			      </span>
		        <span>
		        分类 :
		          <a>
		          </a>
		        </span>
		        <span>
		          浏览 : <span className="article-timer" data-identity="">{ item.clickHit }</span>
		        </span>
			    </div>
			    <div className="article-content">
			      <div className="markdown-body article-content--inner">
			      	<blockquote>
				      { item.digest }
				      </blockquote>
			      </div>
			    </div>
			    <div className="article-footer">
			      <div className="article-meta pull-left">
			        <span className="pc-view">
		            <i className="iconfont icon-tag"></i>分类:
		            <a href="">
		            { item.category }
		            </a>
		          </span>
			        <span>
		            <i className="iconfont icon-06tags"></i>标签:
	              <span className="span--tag">
	                <a href="">
	                { item.tags }
	                </a>
	              </span>
			        </span>
			      </div>
		        <div className="article-meta pull-right">
		          <span className="pc-view">
		            <i className="iconfont icon-view"></i>浏览:
		            <span className="article-timer" data-identity="">{ item.clickHit }</span>
		          </span>
		        </div>
			    </div>
			  </div>
			)))}
		</div>
		)
	}
}

export default ArticleShow
