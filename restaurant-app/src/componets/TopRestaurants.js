import React from 'react'
import { Link } from 'react-router-dom'

function TopRestaurants({restaurants}) {
  
  return (
    <div>
      {restaurants.map(restaurant => {
        if(restaurant.reservations.length >=1 && restaurant.reservations[0] !== null){
          return(
            <div className='topRestaurants'>
              <Link exact to={`/restaurants/${restaurant.id}`}>
              <h3>{restaurant.name}</h3>
              </Link>
              </div>
          )
        }
      })}
    </div>
  )
}

export default TopRestaurants