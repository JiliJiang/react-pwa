import React, {useContext} from 'react';
import {userContext} from '../context';

export default function Home (){
  const {value} = useContext(userContext);
  return(
      <div style={{color: value}}>
        <p  className="welcome">~ Welcome to my REACT Learning Page! Please click a link above~</p>
      </div>
  )
}