import React, {
  Component
} from 'react'
import './navigation.scss'
import {
  getAllMenu
} from '../../../actions/menu.js'
import {
  logOut
} from '../../../actions/login.js'
import {
  connect
} from 'react-redux'
import {
  bindActionCreators
} from 'redux'
import {
  Link
} from 'react-router-dom'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.menuRef = React.createRef()
    this.inputRef = React.createRef()
    this.state = {
      searchActive: false
    }
    this.showSearch = this.showSearch.bind(this);
    this.hideSearch = this.hideSearch.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    const {
      actions
    } = this.props;
    actions.getAllMenu();
  }

  handleShowMenu(flag) {
    const menuDom = this.menuRef.current
    if (flag) {
      menuDom.className = 'site-navigation'
      return
    }
    if (menuDom.className.indexOf('active') > 0) {
      menuDom.className = 'site-navigation'
    } else {
      menuDom.className = 'site-navigation active'
    }
  }

  showSearch() {
    this.inputRef.current.focus();
    this.setState({
      searchActive: true
    })
  }

  handleLogout() {
    this.props.actions.logOut()
  }

  hideSearch() {
    this.setState({
      searchActive: false
    })
  }

  componentDidUpdate() {
    let links = document.querySelectorAll('.nav-item');
    for (let link of links) {

      let childrenLink = link.querySelector('ul');
      link.addEventListener('mouseenter', () => {
        if (childrenLink) {
          childrenLink.className = "nav-menu--dropdown active";
        }
      })
      link.addEventListener('mouseleave', () => {
        if (childrenLink) {
          childrenLink.className = "nav-menu--dropdown";
        }
      })
    }
  }

  componentWillUnmount() {
    // const links = document.querySelectorAll('.nav-item');
    // for (let link of links) {
    //   link.removeEventListener('mouseenter')
    //   link.removeEventListener('mouseleave')
    // }
  }

  render() {
    const {
      menu,
      loginStatus
    } = this.props
    let searchClassName = "header-search"
    if (this.state.searchActive) {
      searchClassName = "header-search in"
    } else {
      searchClassName = "header-search"
    }
    let userDom
    if (loginStatus) {
      userDom = (
        <li className="nav-item">
          个人中心
          <ul className="nav-menu--dropdown">
            <li>
              <Link to="/article/edit" onClick={() => this.handleShowMenu()}>投稿</Link>
            </li>
            <li>
              <a href="javascript:void(0)" onClick={this.handleLogout}>退出</a>
            </li>
          </ul>
        </li>

      )
    } else {
      userDom = (
        <li className="nav-item" >
          <Link to="/login" onClick={() => this.handleShowMenu()}>登陆/注册</Link>
        </li>
      )
    }
    return (
      <div className="header-wrap">
        <header>
          <div className="site-brand">
            <div className="site-title">
              <Link to="/" onClick={() => this.handleShowMenu(true)}>真的很有意思</Link>
            </div>
          </div>
          <nav className="site-navigation" ref={this.menuRef}>
            <ul className="nav-menu">
              { menu && menu.map((item => (
                  <li className="nav-item" key={item.id}>
                    <Link to={ item.treePath } onClick={() => this.handleShowMenu()}>{ item.menuName }</Link>
                  </li>
                ))) }
              { userDom }
              <li className="nav-item" >
                <span onMouseOver={this.showSearch} onMouseOut={this.hideSearch} className={searchClassName}>
                  <input ref={this.inputRef} onBlur={this.hideSearch} className="inner-search-input" placeholder="搜索..." type="text"/>
                  <em className="iconfont icon-search"></em>
                </span>
              </li>
            </ul>
          </nav>
          <i className="iconfont icon-menu" onClick={() => this.handleShowMenu()}></i>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    menu,
    login
  } = state;
  return {
    menu: menu.items,
    loginStatus: login.loginStatus
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getAllMenu,
      logOut
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
