import { useMemo } from "react";
import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

const initialValue = [
  {
    type: "paragraph",
    children: [
      {
        text: "Hello Slate Editor",
      },
    ],
  },
];

const SlateEditor = props => {
  const editor = useMemo(() => withReact(createEditor()), []);
  return (
    <div>
      <h2> Slate </h2>
      <Slate editor={editor} value={initialValue}>
        <Editable
          style={{
            border: "1px solid grey",
            padding: "0.25rem",
          }}
        />
      </Slate>
    </div>
  );
};

export default SlateEditor;
