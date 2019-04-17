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
import { Row, Col, Form, Input, Select, message } from 'antd'
import { request } from '../../../utils/request'
import { param } from '../../../utils'
const Option = Select.Option
const { TextArea } = Input

class ArticleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      loading: false
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
  }

  handleValidate(name, valid) {
    this.setState({
      valid
    })
  }

  handleSubmit(type) {
    const { validateFields } = this.props.form
    const _this = this
    validateFields((errors, values) => {
      if (errors && errors.length > 0) {
        return
      } else {
        _this.setState({
          loading: true
        })
        let data = Object.assign({}, values, { content: _this.state.content, articleStatus: type })
        request({
          url: '/article/add',
          type: 'POST',
          data: param(data)
        }).then(res => {
          message.success('发布成功')
          _this.setState({
            loading: false
          })
        }).catch(error => {
          message.success(error.msg)
          _this.setState({
            loading: false
          })
        })
      }
    })
  }

  componentWillMount() {
    this.props.actions.getCategoryList()
  }

  render() {
    const {
      categorySelect,
      articleEdit
    } = this.props

    const colProps = {
      xs: 12
    }

    const { getFieldDecorator } = this.props.form

    return (
      <div className="article-edit">
        <div className="article-toolbar">
          <button type="button" disabled={this.state.loading} onClick={() => this.handleSubmit('1')}>发布</button>
          <button type="button" disabled={this.state.loading} onClick={() => this.handleSubmit('0')}>草稿</button>
        </div>
        <Form>
          <Row gutter={24}>
            <Col {...colProps}>
              <Form.Item label="标题" required>
              {getFieldDecorator('title', {
                rules: [{
                  required: true, message: '请填写标题',
                }],
              })(
                <Input />
              )}
              </Form.Item>
            </Col>
            <Col {...colProps}>
              <Form.Item label="标签" required>
              {getFieldDecorator('tags', {
                rules: [{
                  required: true, message: '请填写标签，多标签采用逗号分隔',
                }],
              })(
                <Input />
              )}
              </Form.Item>
            </Col>
            <Col {...colProps}>
              <Form.Item label="分类" required>
                {getFieldDecorator('categoryId', {
                  rules: [{
                    required: true, message: '请选择分类',
                  }],
                })(
                  <Select>
                    {
                      categorySelect.map(item => <Option key={item.id} value={item.id}>{item.cname}</Option>)
                    }
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col {...colProps}>
              <Form.Item label="展现方式" required>
                {getFieldDecorator('showMode', {
                  rules: [{
                    required: true, message: '请选择展现方式',
                  }],
                })(
                  <Select>
                    <Option value="1">公开</Option>
                    <Option value="2">私有</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="摘要" required>
                {getFieldDecorator('email', {
                  rules: [{
                    required: true, message: '请填写摘要',
                  }],
                })(
                  <TextArea></TextArea>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'article_edit' })(ArticleEdit))
