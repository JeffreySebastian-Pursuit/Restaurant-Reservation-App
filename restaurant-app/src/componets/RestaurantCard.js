import {Link} from 'react-router-dom';
import {randomImg} from '../helpers/randomImage';
import '../styles/RestaurantCard.css';

function RestaurantCard({restaurant}) {
  return (
    <div className="container">
      <div className='card'>


      <div className="box">
        <div className='content'>

        <Link exact to={`/restaurants/${restaurant.id}`}>
          <img src={randomImg} alt="pic" className='pic'/>
          <h1 className='title'>{restaurant.name}</h1>
          <p>{restaurant.cuisine}</p>
          <p>Price: {restaurant.price}</p>
        </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
