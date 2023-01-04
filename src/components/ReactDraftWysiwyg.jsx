import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ReactDraftWysiwyg = props => {
  const [editorState, setEditorState] = useState("");

  return (
    <div>
      <h2> React Draft Wysiwyg</h2>
      <Editor editorState={editorState} onEditorStateChange={setEditorState} />;
    </div>
  );
};

export default ReactDraftWysiwyg;
