import { useState } from "react";
import "./App.css";
import ReactDraftWysiwyg from "./components/ReactDraftWysiwyg";
import KendoReactEditor from "./components/KendoReactEditor";
import Slate from "./components/Slate";
import SlateWithImage from "./components/SlateWithImage";
import TipTap from "./components/TipTap";
import Quill from "./components/Quill";
import Lexical from "./components/Lexical";

function App() {
  return (
    <div className="App">
      <h1>React Editors</h1>

      <div style={{}}>
        <div
          style={{
            width: 700,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <ReactDraftWysiwyg />
          <Slate />
          <SlateWithImage />
          <TipTap />
          <Quill />
          <Lexical />
          <KendoReactEditor />
        </div>
      </div>
    </div>
  );
}

export default App;
