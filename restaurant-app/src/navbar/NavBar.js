import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navbar.css'

function NavBar({setSearchByRestaurant}) {
  return (
    <div>

<div>


      <nav>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/toprestaurants">
         Top Restaurant
        </NavLink>
        <NavLink to="/restaurants/new">
          Add Restaurant
        </NavLink>
        <input
        className='search'
        type="text"
        placeholder="Search by name"
        onChange={e => {
          setSearchByRestaurant (e.target.value);
          
        }}
        />

      </nav>

        </div>
    </div>
  );
}

export default NavBar;
