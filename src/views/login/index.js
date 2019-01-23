import React, {
  Component
} from 'react'

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
              <h1>博客</h1>
            </div>
            <div className="auth-form-body">
              <label htmlFor="login_field">用户名：</label>
              <input type="text" name="login" id="login_field" onChange={this.handleChange.bind(this, 'userName')} className="form-control input-block" tabindex="1" autocapitalize="off" autocorrect="off" autofocus="autofocus"/>
              <label htmlFor="password">密码：</label>
              <input type="password" name="password" id="password" onChange={this.handleChange.bind(this, 'password')} className="form-control input-block" tabindex="2"/>
              <input type="submit" className="submit-btn" onClick={this.handleSubmit.bind(this)}/>
            </div>
          </form>
        </div>
			</div>
    )
  }
}

export default Login