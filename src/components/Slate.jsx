// Import the Slate editor factory.
import { useState } from "react";
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
  const [editor] = useState(() => withReact(createEditor()));
  return (
    <div>
      <h2> Slate </h2>
      <Slate editor={editor} value={initialValue}>
        <Editable />
      </Slate>
    </div>
  );
};

export default SlateEditor;
