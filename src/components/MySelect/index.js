import React, {
  Component
} from 'react'
import './index.scss'

class MySelect extends Component {
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
    this.props.handleSelectChange(e)
    this.handleValidate(e.target.value, rules)
  }

  handleValidate(value, rules) {
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

  errorCallback(message) {
    this.setState({
      error: message,
      valid: false
    })
  }

  render() {
    const {
      value,
      name,
      placeholder,
      options
    } = this.props
    let className, hasError
    if (this.state.valid) {
      className = "blog-select"
    } else {
      className = "blog-select has-error"
      hasError = (<span className="text-danger">{this.state.error}</span>)
    }
    return (
      <div className={className}>
        <select placeholder={placeholder} name={name} value={value} onChange={(e) => this.handleChange(e)}>
          { this.props.children }
        </select>
        {hasError}
      </div>
    )
  }
}

export default MySelect
