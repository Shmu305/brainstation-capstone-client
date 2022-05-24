import axios from 'axios';
import React, { useState } from "react";
import {Link} from 'react-router-dom';

function CreateListing () {
  const [selectedImage, setSelectedImage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault()
    const product = event.target.produce.value
    console.log(selectedImage);
    const data = new FormData();
    data.append('file', selectedImage);
    console.log(data);
    axios.post('http://localhost:8080/upload', data)
      .then((res) => {
        axios.post('http://localhost:8080/createlisting', {
          image: selectedImage.name,
          product: product  
        }).then((result)=>{
            window.location = '/mangos';
        })
      });
  }
  return (
    <form onSubmit={submitHandler}>
        <Link to='/'>home</Link>
      <h1>Create Listing</h1>
      {selectedImage && (
        <div>
            <img alt="not found" width={"500px"} src={URL.createObjectURL(selectedImage)} />
            <br />
            <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
        <input type="text" placeholder="mango or avacado?" name="produce"/>
      <button type="submit">create new listing</button>
    </form>
  );
};

export default CreateListing;