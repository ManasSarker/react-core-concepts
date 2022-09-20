import { useState } from "react";
import "./App.css";

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => console.log(data));

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
  // const increaseNumber = () => setCount(count + 1);

  function Counter() {
    const [count, setCount] = useState(33);

    const increaseNumber = () => setCount(count + 1);
    const decreaseNumber = () => setCount(count - 1);
    return (
      <div className="person">
        <h1>{count}</h1>
        <button onClick={increaseNumber}>Add number</button>
        <button onClick={decreaseNumber}>Decrease NUmber</button>
      </div>
    );
  }
}

export default App;
