import React, {
  Component
} from 'react'
import './index.scss'

class MyInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      valid: true
    }
    this.handleValidate = this.handleValidate.bind(this)
    this.errorCallback = this.errorCallback.bind(this)
  }
  handleChange(e) {
    e.persist();
    const {
      rules
    } = this.props
    this.props.handleInputChange(e)
    this.handleValidate(e.target.value, rules)
  }

  handleValidate(value, rules) {
    if (rules && rules.length > 0) {
      for (var i = 0; i < rules.length; i++) {
        if (rules[i].required && (!value || value.length === 0)) {
          this.errorCallback(rules[i].message)
          return
        }
        if (rules[i].validate && !rules[i].validate.test(value)) {
          this.errorCallback(rules[i].message)
          return
        }
        this.setState({
          error: '',
          valid: true
        })
      }
    }
  }

  errorCallback(message) {
    this.setState({
      error: message,
      valid: false
    })
  }

  render() {
    const {
      type,
      value,
      name,
      placeholder
    } = this.props
    let className, hasError, render;
    if (this.state.valid) {
      className = "blog-input"
    } else {
      className = "blog-input has-error"
      hasError = (<span className="text-danger">{this.state.error}</span>)
    }
    if (type === 'text' || type === 'password') {
      render = (
        <div className={className}>
          <input type={type} placeholder={placeholder} name={name} value={value} onChange={(e) => this.handleChange(e)}/>
          {hasError}
        </div>
      )
    } else if (type === 'select') {
      render = (
        <div className={className}>
          <select placeholder={placeholder} name={name} value={value} onChange={(e) => this.handleChange(e)}>
            { this.props.children }
          </select>
          {hasError}
        </div>
      )
    }
    return (render)
  }
}

export default MyInput
