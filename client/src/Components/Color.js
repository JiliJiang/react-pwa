import React, {useContext} from 'react';
import {userContext} from '../context'

export default function Color() {

  const {value, setValue} = useContext(userContext);
  

  return (
    <div style={{color: value}}>
    <h2>Setting Up a Global Color</h2>
  
    <div>
      <h4>Please input a global color for all pages: </h4>
      <br/>
      <br/>
        <input type="text" 
        placeholder="color"
        onChange = {(e)=>{setValue (e.target.value)}
        }/>
              
    </div>


    
  
    

    </div>
  )
}
