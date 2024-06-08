import { useState } from "react";

function App() {
  const [color, setColor] = useState("#DAD3BE");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-4 py-2">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-5 py-2 rounded-full shadow-md"
              style={{ backgroundColor: "red", color: "black" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-5 py-2 rounded-full shadow-md"
              style={{ backgroundColor: "blue", color: "white" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-5 py-2 rounded-full shadow-md"
              style={{ backgroundColor: "green", color: "white" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-5 py-2 rounded-full shadow-md"
              style={{ backgroundColor: "purple", color: "white" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-5 py-2 rounded-full shadow-md"
              style={{ backgroundColor: "yellow", color: "black" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-5 py-2 rounded-full shadow-md"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
