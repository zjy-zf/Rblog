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
  ContentState
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

class RichEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
    this.onEditorStateChange = this.onEditorStateChange.bind(this)
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

  render() {
    const {
      editorState
    } = this.state;
    return (<Editor
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
        toolbar={{
          image: { uploadCallback: function(file){ console.log(file) } }
        }}
      />)
  }
}

export default RichEditor