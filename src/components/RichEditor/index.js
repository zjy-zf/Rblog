import React, {
  Component
} from 'react'
import {
  Editor
} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.scss';
import {
  EditorState,
  convertToRaw,
  // ContentState
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import upload from '../../utils/upload.js'

class RichEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
    this.onEditorStateChange = this.onEditorStateChange.bind(this)
    this.uploadImageCallback = this.uploadImageCallback.bind(this)
  }

  onEditorStateChange(editorState) {
    const {
      handleContentChange
    } = this.props
    handleContentChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    this.setState({
      editorState
    })
  }

  uploadImageCallback(file) {
    let formData = new FormData()
    formData.append('file', file)
    return new Promise((resolve, reject) => {
      upload({
        url: '/image/upload',
        type: 'POST',
        data: formData
      }).then(res => {
        resolve({data: { link: (process.env.NODE_ENV === 'production'?'':'http://image.zhendehenyouyisi.com/')+res.data.filePath }})
      })
    })
  }

  render() {
    const {
      editorState
    } = this.state;
    return (<Editor
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
        toolbar={{
          image: { uploadCallback: this.uploadImageCallback }
        }}
      />)
  }
}

export default RichEditor
