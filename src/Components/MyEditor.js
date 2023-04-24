import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './MyEditor.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor, EditorState, RichUtils} from 'draft-js';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.handleBeforeInput = this.handleBeforeInput.bind(this);
  }

  handleBeforeInput(chars, editorState) {
    switch (chars) {
      case "# ":
        const newEditorState = RichUtils.toggleBlockType(editorState, 'header-one');
        this.onChange(newEditorState);
        return 'handled';
      case "* ":
        const newEditorState1 = RichUtils.toggleInlineStyle(editorState, 'BOLD');
        this.onChange(newEditorState1);
        return 'handled';
      case "** ":
        const newEditorState2 = RichUtils.toggleInlineStyle(editorState, 'red');
        this.onChange(newEditorState2);
        return 'handled';
      case "*** ":
        const newEditorState3 = RichUtils.toggleInlineStyle(editorState, 'underline');
        this.onChange(newEditorState3);
        return 'handled';
      default:
        return 'not-handled';
    }
  }

  onChange = (editorState) => {
    this.setState({ editorState });
  }
  blockStyleFn = (contentBlock) => {
    const type = contentBlock.getType();
    switch (type) {
      case 'header-one':
        return 'header-one';
      default:
        return null;
    }
  }

  customStyleMap = {
    BOLD: {
      fontWeight: 'bold',
    },
    underline:{
      textDecoration: 'underline',
    }
  }

  render() {
    return (
      <div className='editor col-10'>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleBeforeInput={this.handleBeforeInput}
        />
      </div>
    );
  }
}

export default MyEditor;
