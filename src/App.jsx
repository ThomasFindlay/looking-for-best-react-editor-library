import "./App.css";
import KendoReactEditor from "./components/KendoReactEditor";
import Slate from "./components/Slate";
import SlateWithImage from "./components/slate/SlateWithImage";
import TipTap from "./components/TipTap";
import Quill from "./components/Quill";

function App() {
  return (
    <div className="App">
      <h1>React Editors</h1>

      <div
        style={{
          width: 700,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <Slate />
        <SlateWithImage />
        <TipTap />
        <Quill />
        <KendoReactEditor />
      </div>
    </div>
  );
}

export default App;
