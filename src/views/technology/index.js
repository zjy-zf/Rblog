import React, { Component } from 'react'
import TimeLine from '../../components/timeline.js'
import Pagination from '../../components/pagination.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTechArticle } from '../../actions/technology.js'

class Technology extends Component {

	componentWillMount() {
		const { actions, query } = this.props
		console.log(actions)
		actions.getTechArticle(Object.assign({}, query, {
			pageNo: 1
		}))
	}

	handleChangePage(pageNo) {
  	const { actions, query } = this.props;
    actions.getTechArticle(Object.assign({}, query, {
    	pageNo
    }));
  }

	render() {
		const { total, query, articleList } = this.props
		return (
			<div className="container">
				<TimeLine total={total} list={articleList} type="技术杂谈"/>
				<Pagination total={total} pageNo={query.pageNo} pageSize={query.pageSize} handleChangePage={(pageNo => this.handleChangePage(pageNo))}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  const { technology } = state;
  return {
    articleList: technology.list,
    query: technology.query,
    total: technology.total
  };
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ getTechArticle }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Technology);
