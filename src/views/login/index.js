import React, {
  Component
} from 'react'
import './login.scss'
import {
  Link,
  withRouter
} from 'react-router-dom'
import {
  userLogin
} from '../../actions/login.js'
import {
  connect
} from 'react-redux'
import {
  bindActionCreators
} from 'redux'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAccount: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    const {
      actions
    } = this.props;
    actions.userLogin(this.state)
  }
  componentWillReceiveProps(newProps) {
    const {
      oldLoginStatus
    } = this.props
    const newLoginStatus = newProps.loginStatus
    if (newLoginStatus !== oldLoginStatus && newLoginStatus) {
      this.props.history.replace("/")
    }
  }

  componentWillMount() {
    if (this.props.loginStatus) {
      this.props.history.goBack()
    }
  }

  render() {
    return (
      <div className="container">
				<div className="login-container">
          <form action="" id="login">
            <div className="auth-form-header">
              <h1>登陆</h1>
            </div>
            <div className="auth-form-body search-menu">
              <label htmlFor="userAccount">用户名：</label>
              <input type="text" name="userAccount" value={this.state.userAccount} id="userAccount" autoComplete="off" onChange={this.handleChange.bind(this, 'userAccount')} className="form-control input-block"/>
              <label htmlFor="password">密码：</label>
              <input type="password" name="password" value={this.state.password} id="password" autoComplete="off" onChange={this.handleChange.bind(this, 'password')} className="form-control input-block"/>
              <input type="submit" className="btn btn-block btn-primary" onClick={this.handleSubmit.bind(this)}/>
            </div>
          </form>
          <p className="create-account-callout">
            <Link to="/register">注册新的账号</Link>
          </p>
        </div>
			</div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    login
  } = state
  return {
    loginStatus: login.loginStatus
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      userLogin
    }, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));