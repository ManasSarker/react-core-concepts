import { useEffect, useState } from "react";
import "./App.css";

// fetch("https://restcountries.com/v3.1/all")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
  // const increaseNumber = () => setCount(count + 1);

  function Counter() {
    const [users, setUser] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUser(data));
    }, []);

    return (
      <div>
        <h1>Hello Manas , How Are you Today ?</h1>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </div>
    );
  }
}

export default App;

// const [count, setCount] = useState(33);

//     const increaseNumber = () => setCount(count + 1);
//     const decreaseNumber = () => setCount(count - 1);
