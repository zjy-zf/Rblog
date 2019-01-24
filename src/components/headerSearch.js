import React, {
  Component
} from 'react'

class HearderSearch extends Component {
  render() {
    return (
      <div className="header-search">
        <form action="" className="header-search-form">
          <label htmlFor="searchFilter" className="form-control header-search-label">
            <input type="text" autoComplate="off" name="searchFilter" id="searchFilter" className="header-search-input"/>
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" className="header-search-key-slash">
          </label>
        </form>
      </div>
    )
  }
}

export default HearderSearch