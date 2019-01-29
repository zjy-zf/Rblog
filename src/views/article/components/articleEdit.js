import React, {
  Component
} from 'react'
import RichEditor from '../../../components/RichEditor/index.js'
import './articleEdit.scss'
import MyInput from '../../../components/MyInput/index.js'

class ArticleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'draft',
      title: '', // 文章题目
      content: '', // 文章内容
      digest: '', // 文章摘要
      categoryId: '', //分类ID
      id: undefined,
      tags: '', //文章标签，自己填写，多个用','分隔
      showMode: '', //展示方式(1：公开；2：私有)
      articleStatus: '0', //文章状态(0：编辑中；1：已发布)
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

  render() {
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
              valid={this.state.valid}
              value={this.state.title} 
              handleValidate={this.handleValidate}
              handleInputChange={this.handleChange} 
              rules={[{required: true, message: '请键入标题'}]} />
          </div>
          <div className="form-item col-sm-6 col-xs-12">
            <MyInput 
              type="text" 
              placeholder="键入标签，多标签以英文逗号分隔" 
              name="tags"
              valid={this.state.valid}
              value={this.state.tags} 
              handleValidate={this.handleValidate}
              handleInputChange={this.handleChange} 
              rules={[{required: true, message: '请键入标签'}]} />
          </div>
          <div className="form-item col-sm-6 col-xs-12">
            <select name="" id="" placeholder="分类" name="categoryId" value={this.state.categoryId} onChange={this.handleChange.bind(this)}>
              <option value="" disabled>请选择分类</option>
              <option value="0">公开</option>
              <option value="0">私有</option>
              <option value="0">私有</option>
              <option value="0">私有</option>
              <option value="0">私有</option>
              <option value="0">私有</option>
              <option value="0">私有</option>
              <option value="0">私有</option>
            </select>
          </div>
          <div className="form-item col-sm-6 col-xs-12">
            <select name="" id="" placeholder="展现方式" name="showMode" value={this.state.showMode}  onChange={this.handleChange.bind(this)}>
              <option value="" disabled>请选择展现方式</option>
              <option value="1">公开</option>
              <option value="2">私有</option>
            </select>
          </div>
          <div className="form-item col-xs-12">
            <input type="text" placeholder="摘要" name="digest" value={this.state.digest}  onChange={this.handleChange.bind(this)}/>
          </div>
        </div>
        <RichEditor handleContentChange={this.handleContentChange}/>
      </div>
    )
  }
}

export default ArticleEdit