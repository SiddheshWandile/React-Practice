import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addCount = () => {
    // counter = counter + 1;
    if(counter > 19){
      console.log("This is the Limit of Counter")
    }
    else{
      setCounter(counter+1);
    }
  };

  const removeCount = () => {
    if(counter <= 0){
      console.log("This is the Limit");
    }
    else{
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Hello Im a React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addCount}>Add Counter</button>
      <button onClick={removeCount}>Remove Counter</button>
    </>
  );
}

export default App;
