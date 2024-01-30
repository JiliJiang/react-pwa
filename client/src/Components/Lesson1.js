import React, {useContext, useState} from 'react';
import {userContext} from '../context'

var sha256 = require('js-sha256');

export default function App() {

  const [name, setName] = useState("Jili");
  const [color, setColor] = useState("red");
  const {value} = useContext(userContext);

  const changeColor =(e)=>{
    const input = e.target.value;
    const hash = sha256(input);
    const newColor= "#"+hash.substring(0,6);
    console.log(newColor);
    setColor(newColor);
    setName(e.target.value);
  }

  return (
    <div style={{color: value}}>
      <h2>Lesson One</h2>
      <h4>Setting up a unique color for an input by hashing color from the input itself. </h4>

      <input type="text" placeholder="name" onChange={e=>{changeColor(e)}} />
      <h4>Hello, my name is:</h4>
      <h2 style={{color: color}}>{name}</h2>

    </div>
  );
}
