import "@progress/kendo-theme-material/dist/all.css";
import { Editor, EditorTools } from "@progress/kendo-react-editor";

const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  FontSize,
  FontName,
  FormatBlock,
  Link,
  Unlink,
  InsertImage,
  ViewHtml,
  InsertTable,
  AddRowBefore,
  AddRowAfter,
  AddColumnBefore,
  AddColumnAfter,
  DeleteRow,
  DeleteColumn,
  DeleteTable,
  MergeCells,
  SplitCell,
} = EditorTools;

const content = "Hello from Kendo React Editor";

const KendoReactEditor = props => {
  return (
    <div>
      <h2>Kendo React Editor</h2>
      <Editor
        tools={[
          [Bold, Italic, Underline, Strikethrough],
          [Subscript, Superscript],
          [AlignLeft, AlignCenter, AlignRight, AlignJustify],
          [Indent, Outdent],
          [OrderedList, UnorderedList],
          FontSize,
          FontName,
          FormatBlock,
          [Undo, Redo],
          [Link, Unlink, InsertImage, ViewHtml],
          [InsertTable],
          [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
          [DeleteRow, DeleteColumn, DeleteTable],
          [MergeCells, SplitCell],
        ]}
        contentStyle={{ height: 320 }}
        defaultContent={content}
      />
    </div>
  );
};

export default KendoReactEditor;
