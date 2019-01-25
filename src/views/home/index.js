import React, { Component } from 'react'
import { getArticle } from '../../actions/article.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleList from '../../components/articleList.js'
import Pagination from '../../components/pagination.js'

class Index extends Component {
	componentWillMount() {
    const { actions, query } = this.props;
    actions.getArticle(Object.assign({}, query, {
    	pageNo: 1
    }));
  }

  handleChangePage(pageNo) {
  	const { actions, query } = this.props;
    actions.getArticle(Object.assign({}, query, {
    	pageNo
    }));
  }

	render() {
		const { articleList, total, query } = this.props
		return (
				<div className="container home-index">
					<ArticleList articleList={ articleList }/>
					<Pagination total={total} pageNo={query.pageNo} pageSize={query.pageSize} handleChangePage={(pageNo) => this.handleChangePage(pageNo)}/>
				</div>
			)
	}
}

const mapStateToProps = (state) => {
  const { home } = state;
  return {
    articleList: home.list,
    query: home.query,
    total: home.total
  };
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ getArticle }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);