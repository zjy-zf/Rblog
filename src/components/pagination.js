import React, { Component } from 'react'
// import { connect } from 'react-redux'

class Pagination extends Component {

	handleNext(e) {
		e.preventDefault()
		const { handleChangePage, pageNo } = this.props
		handleChangePage(pageNo + 1)
	}

	handlePrev(e) {
		e.preventDefault()
		const { handleChangePage, pageNo } = this.props
		handleChangePage(pageNo - 1)
	}

	render() {
		const { pageNo, pageSize, total } = this.props
		let prevBtn, nextBtn
		if (pageNo > 1) {
			prevBtn = (<a href="javascript:void(0);" onClick={(e) => this.handlePrev(e)}>上一页</a>)
		}
		if (pageNo*pageSize < total) {
			nextBtn = (<a href="javascript:void(0);" onClick={(e) => this.handleNext(e)}>下一页</a>)
		}

		return (
			<nav className="page-navigation">
	      {prevBtn} {nextBtn}
	  	</nav>
		)
	}
}

export default Pagination
