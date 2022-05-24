import "./ItemCard.scss";
import {Link} from 'react-router-dom';

function ItemCard({id, name, image}){
    return(
        <Link to={`/listing/${id}`}><li className="card">
            {name}
            <img className="card__image" src={image} alt="placeholder"/>
        </li></Link>
    )
}

export default ItemCard;