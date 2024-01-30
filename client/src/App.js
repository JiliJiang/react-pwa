//import logo from './logo.svg';
//import React from 'react';
//import Home from './Components/Home';
import React, {useState} from "react";
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {userContext} from "./context";

import './style.css';

import {Lesson1, Color, Home, Form} from './components';

export default function App(){

  const [value, setValue]= useState(null);
 

  return(
    <Router>

        <div className= "nav" >

          <div className= "nav"><Link to="/home">Home</Link></div>
          <div className= "nav"><Link to="/color">Set Color</Link></div>
          <div className= "nav"><Link to="/lesson1">Lesson1</Link></div>
          <div className= "nav"><Link to="/form">Image</Link></div>
          
        </div>
        
        
        
        <userContext.Provider value={{value, setValue}}>
        <Switch>

                        
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/color">
              <Color/>
            </Route>
            <Route path="/lesson1">
              <Lesson1/>
            </Route>
            <Route path="/form">
              <Form/>
            </Route>
            
        </Switch>
        </userContext.Provider>
        
  </Router>
    
  )
}