import React, { Component } from 'react'
import TimeLine from '../../components/timeline.js'
import Pagination from '../../components/pagination.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getEssaysArticle } from '../../actions/essays.js'

class Essays extends Component {

	componentWillMount() {
		const { actions, query } = this.props
		console.log(actions)
		actions.getEssaysArticle(Object.assign({}, query, {
			pageNo: 1
		}))
	}

	handleChangePage(pageNo) {
  	const { actions, query } = this.props;
    actions.getEssaysArticle(Object.assign({}, query, {
    	pageNo
    }));
  }

	render() {
		const { total, query, articleList } = this.props
		return (
			<div className="container">
				<TimeLine total={total} list={articleList} type="生活笔记"/>
				<Pagination total={total} pageNo={query.pageNo} pageSize={query.pageSize} handleChangePage={(pageNo => this.handleChangePage(pageNo))}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  const { essays } = state;
  return {
    articleList: essays.list,
    query: essays.query,
    total: essays.total
  };
};

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ getEssaysArticle }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Essays);
