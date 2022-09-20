import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserInfo></UserInfo>
    </div>
  );

  function UserInfo() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);

    return (
      <div>
        {users.map((user) => (
          <User name={user.name}></User>
        ))}
      </div>
    );
  }

  function User(props) {
    return (
      <div>
        <h1>Your name is {props.name}</h1>
      </div>
    );
  }
}

export default App;
