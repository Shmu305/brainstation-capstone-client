import logo from '../../assets/takes2.png';
import background from '../../assets/mangoBackground.jpg';
import video from '../../assets/video.mp4';
import './ItemDetail.scss';
import React, { useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';

function ItemDetail(){
    
    // Declare a new state variable, which we'll call "mangos"
    const [currentItem, setCurrentItem] = useState(null);
    const [editClicked, setEditClicked] = useState(false);
    const params = useParams();
    useEffect(() => {
        // Update the document title using the browser API
        const idFromURL = params.id;
        axios.get(`http://localhost:8080/listing/${idFromURL}`)
            .then((result) => (setCurrentItem(result.data)))
    },[])

    const onDeleteHandler = () =>{
        const idFromURL = params.id;
        axios.delete(`http://localhost:8080/listing/${idFromURL}`)
            .then((result) =>{
                window.location = '/mangos';
            })
    }

    const onEditClick = () => {
        setEditClicked(!editClicked)
    }

    const onEditHandler = (e) => {
        e.preventDefault();
        const idFromURL = params.id;
        // console.log(idFromURL)
        // console.log(e.target.email.value)
        axios.put(`http://localhost:8080/listing/${idFromURL}`,
            {
                email: e.target.email.value
            }
        )
        .then((result) =>{
            window.location = `/listing/${idFromURL}`;
        })
    }

    return(
        <div className="details">
        
            {currentItem?<>
            <Link to='/'><img className="mangoPage__logo" src={logo} alt="logo"/></Link>
            <section className='detailPage'>  
                <div className='detailPage__info'>
                        <h1 className='detailPage__info--text'>Species: {currentItem.product}</h1>
                        <div className='detailPage__info--contact'>
                            <p className='detailPage__info--subText'>Location: {currentItem.itemLocation}</p>
                            <p className='detailPage__info--subText'>Contact: {currentItem.seller}</p>
                            {editClicked ?
                            <form id="detailPage__form1" onSubmit={onEditHandler}>
                                <input className='detailPage__form1--input' type="email" placeholder="Email" name="email"></input>
                            </form>
                            :<p className='detailPage__info--subText'>Email: {currentItem.email}</p>}
                        </div>
                </div>
                <img className='detailPage__image' src={currentItem.image} alt="image"/>

                {currentItem.sellerId == sessionStorage['id']?
                    <div className='detailPage__options'>
                        {editClicked? 
                        <button className="detailPage__options--button" onClick={onEditClick}>Cancel Changes</button>
                        :<button className="detailPage__options--button" onClick={onEditClick}>Edit Listing</button>
                        }
                        <button className="detailPage__options--button" onClick={onDeleteHandler}>Delete Item</button>
                        {editClicked?
                        <button className="detailPage__options--button" form="detailPage__form1">Save Changes</button>
                        :<div></div>}
                    </div>
                    : <div></div>
                }
                
            </section>
            </>
            :<p>loading...</p>}
            <video className="video" src={video} width="320" height="240" controls>
                    </video>    
        </div>



    )
}

export default ItemDetail;