import { useMemo } from "react";

import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import InsertImageButton, { withImages } from "./components/InsertImageButton";
import Element from "./components/slate-elements/Element";

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
  const editor = useMemo(() => withImages(withReact(createEditor())), []);
  return (
    <div>
      <h2> Slate With Image </h2>
      <Slate editor={editor} value={initialValue}>
        <div style={{ marginBottom: "1rem" }}>
          <InsertImageButton />
        </div>
        <Editable
          renderElement={props => <Element {...props} />}
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
