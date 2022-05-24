import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ItemCard from '../../components/ItemCard/ItemCard';
import "./Mangos.scss";
function Mangos() {
    // Declare a new state variable, which we'll call "mangos"
    const [mangoSellers, setMangoSellers] = useState(null);

    useEffect(() => {
        // Update the document title using the browser API
        axios.get("http://localhost:8080/mangos")
            .then((result) => (setMangoSellers(result.data)))
    }, [] )
  
    return (
      <div>
        {mangoSellers ?
        <section className='mangoPage'>
            <Link to='/'>home</Link>
            <h1>we have mangos</h1>
            <ul className='grid'>
            {mangoSellers.map((seller) => {
                return <ItemCard key={seller.productId} id={seller.productId} name={seller.first} image={seller.productImg}/>
                })
            }
            </ul>
        </section>
        :<p>loading...</p>}
      </div>
    );
}

export default Mangos;