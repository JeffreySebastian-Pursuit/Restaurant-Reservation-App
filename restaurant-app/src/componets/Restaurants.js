import axios from 'axios';
import {useState, useEffect} from 'react';
import RestaurantCard from './RestaurantCard';
import NavBar from '../navbar/NavBar';

function Restaurants ({restaurants, loading}) {
 
  const [searchByRestaurant, setSearchByRestaurant] = useState ('');


  console.log (restaurants);
  return (
      <div>
<NavBar  setSearchByRestaurant={setSearchByRestaurant}/>
    <div className='main'>
      { !loading && restaurants
        .filter (restaurant => {
            const restaurantName = restaurant?.name;
            const restaurantCuisine =  restaurant?.cuisine
            if (searchByRestaurant === '') {
                return restaurant;
            } else if (
                restaurantName.toLowerCase ().includes(searchByRestaurant) || restaurantCuisine.toLowerCase ().includes(searchByRestaurant) 
                ) {
                    return restaurant;
                }
            })
            
            .map (restaurant => {
                return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
            })}
        {loading && <div>loading</div>}

    </div>
 </div>
  )
}

export default Restaurants;
