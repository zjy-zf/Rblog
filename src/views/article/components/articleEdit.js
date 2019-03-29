import React, {
  Component
} from 'react'
import RichEditor from '../../../components/RichEditor/index.js'
import './articleEdit.scss'
import MyInput from '../../../components/MyInput/index.js'
import MySelect from '../../../components/MySelect/index.js'
import {
  getCategoryList
} from '../../../actions/category.js'
import {
  connect
} from 'react-redux'
import {
  bindActionCreators
} from 'redux'

class ArticleEdit extends Component {
  constructor(props) {
    super(props);
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleValidate = this.handleValidate.bind(this)
  }

  handleContentChange(content) {
    this.setState({
      content
    })
  }

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
  }

  handleValidate(name, valid) {
    this.setState({
      valid
    })
  }

  handleSubmit(type) {
    if (type === '1') {
      console.log(this.state)
    } else if (type === '2') {
      console.log(this.state)
    }
  }

  componentWillMount() {
    this.props.actions.getCategoryList()
  }

  render() {
    const {
      categorySelect,
      articleEdit
    } = this.props
    console.log(articleEdit)
    return (
      <div className="article-edit">
        <div className="article-toolbar">
          <button type="button" onClick={() => this.handleSubmit('1')}>发布</button>
          <button type="button" onClick={() => this.handleSubmit('2')}>草稿</button>
        </div>
        <div className="form-main row">
        { articleEdit.form.map((v, index) => (
          <div className="form-item col-sm-6 col-xs-12" key={index}>
            <MyInput
              type={v.type}
              placeholder={v.placeholder}
              value={v.value}
              handleInputChange={this.handleChange}
              rules={v.rules} />
          </div>
        )) }
        </div>
        <RichEditor handleContentChange={this.handleContentChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    category,
    article
  } = state
  return {
    categorySelect: category.categorySelect,
    articleEdit: article.edit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      getCategoryList
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit)
