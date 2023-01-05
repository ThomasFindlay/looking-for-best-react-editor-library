import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import style from "./TipTap.module.scss";
import { Image } from "@tiptap/extension-image";
import { useCallback } from "react";

// Image.configure();

const TipTap = props => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: "<p>Hello from TipTap Rich Text Editor!</p>",
  });

  const addImage = useCallback(() => {
    const url = window.prompt("URL");
    if (!url) return;
    editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  const deleteImage = useCallback(() => {
    const node = editor.state.selection.node;
    if (!node || node.type.name !== "image") return;
    editor.commands.deleteSelection();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className={style.tiptapContainer}>
      <h2>TipTap</h2>
      <div className="k-display-flex k-gap-2">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          B
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          I
        </button>
        <button onClick={addImage}>Add Image</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTap;
