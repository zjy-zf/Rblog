import React, {
  Component
} from 'react'
import {
  getAeticleDetail
} from '../../../actions/article.js'
import {
  connect
} from 'react-redux'
import {
  bindActionCreators
} from 'redux'
import '../../../styles/css/github-markdown.css'
import '../../../styles/css/highlight.css'
import '../../../styles/css/prism.css'
import {
  parseTime,
  // getRealPath
} from '../../../utils'
import Comment from '../../../components/comment.js'

class ArticleDetail extends Component {

  componentWillMount() {
    const {
      actions,
      location
    } = this.props
    let params = new URLSearchParams(location.search);
    actions.getAeticleDetail({
      id: params.get("articleId")
    })
  }

  render() {
    const {
      article
    } = this.props
    return (
      <div className="container post-index">
      <div className="post">
        <h1 className="article-title">
          <span>{ article.title }</span>
        </h1>
        <div className="article-top-meta">
          <span>
            发布 :
            { parseTime(article.publishTime, '{y}-{m}-{d}') }
          </span>
            <span>
              分类 :
                <a>
                  { article.category }
                </a>
            </span>
            <span>
              浏览 : <span className="article-timer" data-identity="">{ article.clickHit }</span>
            </span>
        </div>
        <div className="article-content">
          <div className="markdown-body" dangerouslySetInnerHTML={{__html: article.content}}>
          </div>
        </div>
        <div className="copy-right">
          <div className="markdown-body">
            <blockquote>
            本文作者 : { article.userName }
            </blockquote>
          </div>
        </div>
        <div className="article-footer">
          <div className="article-meta pull-left">
            <span>
              <i className="iconfont icon-06tags"></i>标签:
              <span className="span--tag">
                <a>
                  {}
                </a>
              </span>
            </span>
          </div>
          <div className="article-meta pull-right">
          </div>
        </div>
      </div>
      <Comment/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    article
  } = state;
  return {
    article: article.detail
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getAeticleDetail
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
