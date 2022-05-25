import React, { useState, useEffect } from 'react';
import logo from '../../assets/takes2.png';
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
            <Link to='/'><img className="mangoPage__logo" src={logo} alt="logo"/></Link>
            <ul className='mangoPage__grid'>
            {mangoSellers.map((seller) => {
                return <ItemCard key={seller.productId} id={seller.productId} image={seller.productImg} location={seller.itemLocation} type={seller.itemType}/>
                })
            }
            </ul>
        </section>
        :<p>loading...</p>}
      </div>
    );
}

export default Mangos;