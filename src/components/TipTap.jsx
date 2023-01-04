import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import style from "./TipTap.module.scss";

const TipTap = props => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello from TipTap Rich Text Editor!</p>",
  });
  return (
    <div className={style.tiptapContainer}>
      <h2>TipTap</h2>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTap;
