import React, {useContext, useState} from 'react';
import {userContext} from '../context'
//import React, { useState} from 'react';
import '../App.css';
const axios = require('axios').default;
//import axios from 'axios';

function Form () {
const {value, setValue} = useContext(userContext);
const [imageText, setImageText] = useState ('');
const [imageFile, setImageFile] = useState (null);
const [images, setImages] = useState([{}]);
    
const addImage = (e) =>{
    
        e.preventDefault();
        console.log("image added!");
        const data = new FormData();
        data.append("text", imageText);
        data.append("imageFile", imageFile)
      console.log(data)
        axios.post("http://localhost:3001/api/images", data).then(() => { 
            axios.get("http://localhost:3001/api/images").then((res)=>{
            console.log(res);
            const data= res.data;
            setImages(data);
        })
        });     
    }
        
return ( 

<div style={{color: value}}>
    <h1>Welcome to Image Page!</h1>
    <form>

        <label>Image Description: </label>
        
        <input type="text" placeholder="describe your image" onChange={(e)=>{
            setImageText(e.target.value);
            console.log('imageText', imageText);}}/>
        <br/>
        <br/>
        
        <label>Image File Upload : </label>
        
        <input type="file" placeholder="upload your image" onChange={
            e=>{
            //console.log(e);
            const imageFile= e.target.files[0];
            setImageFile(imageFile);
            console.log(imageFile)
            }}/>
        <br/>
        <br/>

        <button className="btn" onClick={addImage}> Click to add your image below </button>

    </form>  

    <div>
        
        <br/>
        <br/>
        {images.map(image => (
            <div key={image.id}>
            <h3>{image.text}</h3>
            <img src={image.imageFile} alt={image.text}></img>
            </div>))}
        
    </div>
 
</div>
)
}

export default Form