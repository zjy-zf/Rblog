import React, { Component } from 'react'
import TimeLine from '../../components/timeline.js'
import Pagination from '../../components/pagination.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getResArticle } from '../../actions/resources.js'

class Resources extends Component {

	componentWillMount() {
		const { actions, query } = this.props
		console.log(actions)
		actions.getResArticle(Object.assign({}, query, {
			pageNo: 1
		}))
	}

	handleChangePage(pageNo) {
  	const { actions, query } = this.props;
    actions.getResArticle(Object.assign({}, query, {
    	pageNo
    }));
  }

	render() {
		const { total, query, articleList } = this.props
		return (
			<div className="container">
				<TimeLine total={total} list={articleList} type="资源共享"/>
				<Pagination total={total} pageNo={query.pageNo} pageSize={query.pageSize} handleChangePage={(pageNo => this.handleChangePage(pageNo))}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  const { resources } = state;
  return {
    articleList: resources.list,
    query: resources.query,
    total: resources.total
  };
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ getResArticle }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
