import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUser></LoadUser>
      <MyComponent brand="Apple" price="200000"></MyComponent>
      <MyComponent brand="Google" price="300000"></MyComponent>
      <MyComponent brand="Amazon" price="300000"></MyComponent>
    </div>
  );
}




function LoadUser() {
  const [users, setUsers] = useState([]);


  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))


  }, [])

  return (
    <div>
      <h1>Users loaded: {users.length}</h1>
      {
        users.map(user => <User>name ={user.username} phone= {user.phone}</User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <h2>UserName: {props.username} phone= {props.phone}</h2>




  );
}

function MyComponent(props) {
  const myStyle = {
    backgroundColor: 'red',
    margin: '10px',
    padding: '10px',
    border: '2px solid green',
    borderRadius: '10px'

  }
  return (
    <div style={myStyle}>
      <h3>Yoo yoo mama {props.brand}</h3>
      <p style={{ color: 'yellow' }}>I can write my own component</p>
    </div>
  );
}
export default App;
