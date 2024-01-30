//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [counter, setCounter] = useState(0);

  const [pageNumber, setPageNumber] = useState(1);

  const [users, setUsers] = useState([]);

  const getUsers = async (pageNumber) => {
    
    const data = await fetch(`https://api.randomuser.me/?page=${pageNumber}`);
    console.log(data);
    const json = await data.json();
    console.log(json);
    const newUser = json.results[0];
    setUsers([...users, newUser]);   
    setPageNumber(pageNumber+1);
  }
  

  useEffect(()=>{
    getUsers();
    setPageNumber(pageNumber+1)
    }, 
  []);


  return (
    <div>
      <h1>Hello Code SandBox!</h1>
      <h2>Start Editing to see some Magic Happens!</h2>
      <h2>Counter</h2>
      <h2>{counter}</h2>
      <button className="btn" onClick={() => setCounter(counter+1)}>Increase</button>
      <button className="btn" onClick={() => setCounter(counter-1)}>Decrease</button>

      <div >
      <h2 >Users Information</h2>
        <button className="btn" onClick={()=>{getUsers()}}>Get User</button>
        {users.map(user => (
          <div key={user.id.value}>
          <img src={user.picture.large} alt={user.id.name}></img>
          <p className="user"> {user.name.title} {user.name.first} {user.name.last}</p>
          <p className="user"> {user.cell} </p>
          <p className="user"> {user.email} </p>
          <p className="user"> {user.location.city} {user.location.state}, {user.location.country}</p>

          </div>
         ))}
        
      </div>
    </div>
  );
}

export default App;
