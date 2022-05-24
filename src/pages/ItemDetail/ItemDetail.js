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
        
            {currentItem?
            <>  
                <Link to='/'>home</Link>
                <h1>{currentItem.seller}</h1>
                <h1>{currentItem.product}</h1>
                {editClicked ?
                <form id="form1" onSubmit={onEditHandler}>
                    <input type="email" placeholder="email" name="email"></input>
                </form>
                :<h1>{currentItem.email}</h1>}
                <img src={currentItem.image} alt="image"/>
                {currentItem.sellerId == sessionStorage['id']?
                    <div>
                        {editClicked? 
                        <button onClick={onEditClick}>cancel changes</button>
                        :<button onClick={onEditClick}>edit listing</button>
                        }
                        <button onClick={onDeleteHandler}>delete item</button>
                        {editClicked?
                        <button form="form1">save changes</button>
                        :<div></div>}
                    </div>
                    : <div></div>
                }
            </>
            :<p>loading...</p>}    
        </div>



    )
}

export default ItemDetail;