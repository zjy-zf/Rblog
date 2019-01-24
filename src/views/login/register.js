import React, {
  Component
} from 'react'
import './login.scss'
import {
  Link
} from 'react-router-dom'
import {
  registry
} from '../../actions/login.js'
import {
  connect
} from 'react-redux'
import {
  bindActionCreators
} from 'redux'

class Registry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: '',
      userAccount: '',
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
    event.preventDefault();
    const {
      actions
    } = this.props
    actions.registry(this.state)
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
              <label htmlFor="nickName">昵称：</label>
              <input type="text" name="nickName" value={this.state.nickName} id="nickName" autoComplete="off" onChange={this.handleChange.bind(this, 'nickName')} className="form-control input-block"/>
              <label htmlFor="userAccount">用户名：</label>
              <input type="text" name="userAccount" value={this.state.userAccount} id="userAccount" autoComplete="off" onChange={this.handleChange.bind(this, 'userAccount')} className="form-control input-block"/>
              <label htmlFor="password">密码：</label>
              <input type="password" name="password" value={this.state.password} id="password" autoComplete="off" onChange={this.handleChange.bind(this, 'password')} className="form-control input-block"/>
              <label htmlFor="password">确认密码：</label>
              <input type="password" name="passwordAgain" id="passwordAgain" autoComplete="off" onChange={this.handleChange.bind(this, 'passwordAgain')} className="form-control input-block"/>
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

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      registry
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registry)