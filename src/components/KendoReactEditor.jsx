import "@progress/kendo-theme-material/dist/all.css";
import { Editor, EditorTools } from "@progress/kendo-react-editor";

const {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignRight,
  AlignCenter,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  Link,
  Unlink,
  InsertImage,
} = EditorTools;

const editorStyles = `
    .k-content {
      font-size: 24px;
      color: #92400E;
    }
`;

const content = "";

const onMount = event => {
  const iframeDocument = event.dom.ownerDocument;
  const style = iframeDocument.createElement("style");
  style.appendChild(iframeDocument.createTextNode(editorStyles));
  iframeDocument.head.appendChild(style);
};

const KendoReactEditor = props => {
  return (
    <div>
      <h2>Kendo React Editor</h2>
      <Editor
        tools={[
          [Bold, Italic, Underline],
          [Undo, Redo],
          [Link, Unlink],
          [AlignLeft, AlignCenter, AlignRight],
          [OrderedList, UnorderedList, Indent, Outdent, InsertImage],
        ]}
        contentStyle={{ height: 320 }}
        defaultContent={content}
      />
    </div>
  );
};

export default KendoReactEditor;
