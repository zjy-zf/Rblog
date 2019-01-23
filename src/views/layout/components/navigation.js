import React, {
  Component
} from 'react'
import './navigation.css'
import {
  getAllMenu
} from '../../../actions/menu.js'
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

  render() {
    const {
      menu
    } = this.props
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
                    <ul className="nav-menu--dropdown">
                        <li>
                          <a href="javascript:void(0);">首页1</a>
                        </li>
                    </ul>
                </li>
                ))) }
              <li className="nav-item" >
                <Link to="/login" onClick={() => this.handleShowMenu()}>登陆/注册</Link>
              </li>
              <li className="nav-item">
                <Link to="/edit" onClick={() => this.handleShowMenu()}>投稿</Link>
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
    menu
  } = state;
  return {
    menu: menu && menu.items
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getAllMenu
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);