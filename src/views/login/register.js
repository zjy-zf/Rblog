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
      password: '',
      passwordAgain: '',
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
              <h1>注册</h1>
            </div>
            <div className="auth-form-body">
              <label htmlFor="login_field">用户名：</label>
              <input type="text" name="login" id="login_field" onChange={this.handleChange.bind(this, 'userName')} className="form-control input-block"/>
              <label htmlFor="password">密码：</label>
              <input type="password" name="password" id="password" onChange={this.handleChange.bind(this, 'password')} className="form-control input-block"/>
              <label htmlFor="password">确认密码：</label>
              <input type="password" name="passwordAgain" id="passwordAgain" onChange={this.handleChange.bind(this, 'passwordAgain')} className="form-control input-block"/>
              <input type="submit" className="btn btn-block btn-primary" onClick={this.handleSubmit.bind(this)}/>
            </div>
          </form>
          <p className="create-account-callout">
            <Link to="/login">已有账号，去登陆</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default Login