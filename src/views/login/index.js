import React, {
  Component
} from 'react'
import './login.scss'
import {
  Link
} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
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
    console.log(event, this.state)
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
				<div className="login-container">
          <form action="" id="login">
            <div className="auth-form-header">
              <h1>登陆</h1>
            </div>
            <div className="auth-form-body">
              <label htmlFor="login_field">用户名：</label>
              <input type="text" name="login" id="login_field" autoComplete="off" onChange={this.handleChange.bind(this, 'userName')} className="form-control input-block"/>
              <label htmlFor="password">密码：</label>
              <input type="password" name="password" id="password" autoComplete="off" onChange={this.handleChange.bind(this, 'password')} className="form-control input-block"/>
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

export default Login