import axios from 'axios';
import './CreateListing.scss';
import logo from '../../assets/takes2.png';
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import placeholder from '../../assets/placeholderImage.jpg';

function CreateListing () {
  const [selectedImage, setSelectedImage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault()
    const type = event.target.species.value;
    const data = new FormData();
    data.append('file', selectedImage);
    console.log(data);
    axios.post('http://localhost:8080/upload', data)
      .then((res) => {
        axios.post('http://localhost:8080/createlisting', {
          sessionId : sessionStorage.getItem('id'),  
          image: selectedImage.name,
          species: type  
        }).then((result)=>{
            window.location = '/mangos';
        })
      });
  }
  return (
    <section className='listingPage'>
      <Link to='/'><img className="mangoPage__logo" src={logo} alt="logo"/></Link>
    <section className='listing'>
    <form onSubmit={submitHandler}>
      {selectedImage ?
        <div>
            <img className='listing__image' alt="not found" width={"500px"} height={"350px"} src={URL.createObjectURL(selectedImage)} />
            <br />
            <button className="listing__button" onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      :<img src={placeholder} width={"500px"} alt="placeholder"/>}
      <br />
     
      <br /> 
      <label for="upload-photo"></label>
      <input id="upload-photo"
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
        <input className="listing__input" type="text" placeholder="Species" name="species"/>
      <button className="listing__button" type="submit">Create New Listing</button>
    </form>
    </section></section>
  );
};

export default CreateListing;