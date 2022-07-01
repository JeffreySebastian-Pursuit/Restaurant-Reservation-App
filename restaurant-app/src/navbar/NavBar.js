import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Navbar.css'

function NavBar({setSearchByRestaurant}) {
  return (
    <div>

      <nav>
        <NavLink to="/">
          Home
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
  );
}

export default NavBar;
