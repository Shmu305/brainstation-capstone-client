import "./ItemCard.scss";
import {Link} from 'react-router-dom';

function ItemCard({id, image, location, type}){
    return(
        <div className="products">
            <Link to={`/listing/${id}`}>
                <li className="products__card">
                    <p className="products__text">{type}</p>
                    <img className="products__card--image" src={image} alt="placeholder"/>
                    <p className="products__text">{location}</p>
                </li>
            </Link>
        </div>
    )
}

export default ItemCard;