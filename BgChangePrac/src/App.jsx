import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-4 py-2">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-5 py-2 rounded-full shadow-lg"
              style={{ backgroundColor: "red", color: "white" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-5 py-2 rounded-full shadow-lg"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
