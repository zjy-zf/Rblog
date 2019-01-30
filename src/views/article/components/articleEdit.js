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
    this.state = {
      title: '', // 文章题目
      tags: '', //文章标签
      categoryId: '', //分类ID
      showMode: '', //展示方式(1：公开；2：私有)
      digest: '', // 文章摘要
      content: '', // 文章内容
    }
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
    this.setState({
      [name]: value
    })
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
      categorySelect
    } = this.props
    return (
      <div className="article-edit">
        <div className="article-toolbar">
          <button type="button" onClick={() => this.handleSubmit('1')}>发布</button>
          <button type="button" onClick={() => this.handleSubmit('2')}>草稿</button>
        </div>
        <div className="form-main row">
          <div className="form-item col-sm-6 col-xs-12">
            <MyInput 
              type="text" 
              placeholder="键入主题" 
              name="title"
              value={this.state.title} 
              handleInputChange={this.handleChange} 
              rules={[{required: true, message: '请键入标题'}]} />
          </div>
          <div className="form-item col-sm-6 col-xs-12">
            <MyInput 
              type="text" 
              placeholder="键入标签，多标签以英文逗号分隔" 
              name="tags"
              value={this.state.tags} 
              handleInputChange={this.handleChange} 
              rules={[{required: true, message: '请键入标签'}]} />
          </div>
          <div className="form-item col-sm-6 col-xs-12">
            <MySelect 
            placeholder="分类" 
            name="categoryId" 
            value={this.state.categoryId} 
            handleSelectChange={this.handleChange.bind(this)}
            rules={[{required: true, message: '请选择分类'}]}>
              <option value="" disabled>请选择分类</option>
              { categorySelect && categorySelect.map((item, index) => (<option key={index} value={item.id}>{item.cname}</option>)) }
            </MySelect>
          </div>
          <div className="form-item col-sm-6 col-xs-12">
            <MySelect 
              placeholder="展现方式" 
              name="showMode" 
              value={this.state.showMode}
              handleSelectChange={this.handleChange}
              rules={[{required: true, message: '请选择展现方式'}]}>
                <option value="" disabled>请选择展现方式</option>
                <option value="1">公开</option>
                <option value="2">私有</option>
            </MySelect>
          </div>
          <div className="form-item col-xs-12">
            <MyInput 
              type="text" 
              placeholder="摘要" 
              name="digest" 
              value={this.state.digest}
              handleInputChange={this.handleChange.bind(this)}
              rules={[{required: true, message: '请键入文章摘要'}]}/>
          </div>
        </div>
        <RichEditor handleContentChange={this.handleContentChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    category
  } = state
  return {
    categorySelect: category.categorySelect
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