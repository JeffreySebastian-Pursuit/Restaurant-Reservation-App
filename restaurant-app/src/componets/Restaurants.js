import axios from 'axios';
import {useState, useEffect} from 'react';
import RestaurantCard from './RestaurantCard';
import NavBar from '../navbar/NavBar';

function Restaurants () {
  const [restaurants, setRestaurants] = useState ([]);
  const [searchByRestaurant, setSearchByRestaurant] = useState ('');
  const [loading, setLoading] = useState(false);


  const getAllRestaurants = async () => {
    try {
      let url = 'https://jeffrey-takehome-api.herokuapp.com/api/restaurants';
      let res = await axios.get (`${url}`);
      setRestaurants(res.data.restaurants);
      setLoading(false)
    } catch (error) {}
  };

  useEffect (() => {
    getAllRestaurants ();
  }, []);

  console.log (restaurants);
  return (
      <div>
<NavBar  setSearchByRestaurant={setSearchByRestaurant}/>
    <div className='main'>
      { !loading && restaurants
        .filter (restaurant => {
            const restaurantName = restaurant?.name;
            if (searchByRestaurant === '') {
                return restaurant;
            } else if (
                restaurantName.toLowerCase ().includes(searchByRestaurant) 
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
