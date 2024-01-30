import React, {useEffect, useState} from 'react';
import '../App.css';
const axios = require('axios');



function Home () {

const [images, setImages] = useState([]);

function getImage(){
    
  axios.get("https://httpbin.org/anything")
  .then(res => console.log("Get-res", res))
    
} ; 
 


useEffect(()=>{
  getImage();
  }, 
[]);


return (  
<>
  <h1> Hello Image Page!</h1>

  <ul>
          {images.map(image=>
          <li >
            {image.text}
            <br/>
            {image.imageFile}
          </li>
          )}         
  </ul>  

</>  
) 
}


export default Home;



/* <ul>
          {images.map(image=>
          <li >
            {image.text}
            {image.imageFile}
          </li>
          )}         
</ul>  */



//const [imageText, setImageText] = useState("");

/* const getImageText = async () => {
    
  const data = await fetch(`/api/images`);
  console.log(data);
  const json = await data.json();
  console.log(json);
    
} */

/* useEffect(()=>{
  getImageText();
  }, 
[]);
 */