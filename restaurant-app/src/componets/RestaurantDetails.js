import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {randomImg} from '../helpers/randomImage';
import moment from 'moment';
import '../styles/RestaurantDetails.css';

function RestaurantDetails () {
  const [restaurant, setRestaurant] = useState ({});
  const [reservations, setReservations] = useState ([]);
  const [loading, setLoading] = useState (false);
  const {id} = useParams ();
  let navigate = useNavigate ();
  const minDate = new Date ().toLocaleDateString ();
  const [newReservation, setNewReservation] = useState ({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    time: moment (minDate).format ('MM/DD/YYYY, hh:mm a'),
    numGuests: '',
    restaurantId: id,
  });

  useEffect (
    () => {
      const fetchRestaurant = async () => {
        try {
          let url =
            'https://jeffrey-takehome-api.herokuapp.com/api/restaurants';
          let res = await axios.get (`${url}/${id}`);
          // console.log (res.data);
          setRestaurant (res.data);
          setReservations (res.data.reservations);
          setLoading (false);
        } catch (error) {
          console.log (error);
        }
      };
      fetchRestaurant ();
    },
    [id]
  );

  const deleteRestaurant = async id => {
    try {
      let url = 'https://jeffrey-takehome-api.herokuapp.com/api/restaurants';
      let res = await axios.delete (`${url}/${id}`);
      setRestaurant (res.data);
    } catch (error) {
      console.log (error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteRestaurant (id);
      navigate ('/');
    } catch (error) {
      console.log (error);
    }
  };

  const createReservation = async reservation => {
    try {
      await axios.post (
        `https://jeffrey-takehome-api.herokuapp.com/api/reservations`,
        reservation
      );
      navigate (`/restaurants/${id}`);
    } catch (error) {
      console.log (error);
    }
  };

  const handleChange = e => {
    setNewReservation ({...newReservation, [e.target.id]: e.target.value});
  };

  const handleSubmit = e => {
    createReservation (newReservation);
    alert ('You just created a new reservation');

    // if(newReservation.time.includes( moment (newReservation.time).format ('MM/DD/YYYY, h:mm a'))){
    //   if(moment (newReservation.time).format ('h:mm a') === newReservation.time){
    //     alert ('Please pick a different time!');
    //     e.preventDefault()
    //   }else{
    //     createReservation (newReservation);
    //     alert ('You just created a new reservation');
    //   }
    //   createReservation (newReservation);
    //   alert ('You just created a new reservation');
    // }
  };

  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    time,
    numGuests,
  } = newReservation;

  return (
    <div className="heading">
      <div className="lists">
        <h1 className="name">
          {restaurant.name}
        </h1>
        <p className="description">

          {restaurant.description}
        </p>

        <p>
          Cuisine: {restaurant.cuisine}
        </p>
        <p>
          Location: {restaurant.location}
        </p>
        <p>
          Price: {restaurant.price}
        </p>

        <p>
          Open: {restaurant.openingTime} am
        </p>
        <p>
          Close: {restaurant.closingTime} pm
        </p>

        <p>
          Phone Number: {restaurant.phoneNumber}
        </p>
        <button
          onClick={() => {
            if (
              window.confirm (
                'Are you sure you wish to delete this restaurant?'
              )
            )
              handleDelete (id);
          }}
          type="cancel"
        >
          Delete
        </button>
        <button>
          <Link to="/">
            Back
          </Link>
        </button>
      </div>

      <div>
        <div className="book">

          Book New Reservation
        </div>
        <form onSubmit={handleSubmit} className="reservationForm">
          First name:
          {' '}
          <input
            value={firstName}
            placeholder="First Name"
            id="firstName"
            type="text"
            onChange={handleChange}
          />
          Last name:
          {' '}
          <input
            value={lastName}
            placeholder="Last Name"
            id="lastName"
            type="text"
            onChange={handleChange}
          />
          Phone Number:
          {' '}
          <input
            value={phoneNumber}
            placeholder="Phone Number"
            id="phoneNumber"
            type="text"
            onChange={handleChange}
          />
          Email:
          {' '}
          <input
            value={email}
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          />

          Guests:
          {' '}
          <input
            value={numGuests}
            type="number"
            id="numGuests"
            min="0"
            onChange={handleChange}
          />

          Time
          {' '}
          <input
            value={time}
            id="time"
            type="datetime-local"
            onChange={handleChange}
            min={time}
            placeholder="Time"
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
      <ul>
        {/* {restaurant.diningRestriction} */}

        <img src={randomImg} alt="pic" className="restaurantImage" />
        <h3>Reservation lists</h3>
        {!loading &&
          reservations.map (rsvp => {
            if (rsvp === null) {
              return (
                <div>
                  No reservations
                </div>
              );
            } else
              return (
                <li key={rsvp.id} className='reservationLists'>
                  <Link exact to={`/reservations/${rsvp.id}`}>
                    <p>
                      Time: {moment (rsvp.time).format ('MM/DD/YYYY, h:mm a')}
                    </p>
                  </Link>
                </li>
              );
          })}

      </ul>

    </div>
  );
}

export default RestaurantDetails;
