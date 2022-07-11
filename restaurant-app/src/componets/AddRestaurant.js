import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
// import moment from 'moment';
import '../styles/AddRestaurant.css';
import {randomImg} from '../helpers/randomImage';

function AddRestaurant () {
  // const minDate = new Date ().toLocaleDateString ();
  const restrictions = ['Takeout Only', 'Delivery Only'];

  const [newRestaurant, setNewRestaurant] = useState ({
    name: '',
    description: '',
    phoneNumber: '',
    openingTime: '',
    closingTime: '',
    price: '',
    cuisine: '',
    location: '',
    diningRestriction: '',
  });
  let history = useNavigate ();

  const createNewRestaurant = async newRes => {
    try {
      await axios.post (
        'https://jeffrey-takehome-api.herokuapp.com/api/restaurants',
        newRes
      );
      history ('/');
      alert ('You just created a New Restaurant available');
    } catch (error) {
      return error;
    }
  };

  const handleChange = e => {
    setNewRestaurant ({...newRestaurant, [e.target.id]: e.target.value});
  };

  console.log (newRestaurant);
  const handleSubmit = e => {
    e.preventDefault ();
    createNewRestaurant (newRestaurant);
  };

  return (
    <div className="side-by">
      <form onSubmit={handleSubmit} className="newForm">
        <label htmlFor="name">
          Name:
        </label>
        <input
          value={newRestaurant.name}
          type="text"
          id="name"
          onChange={handleChange}
          placeholder="Restaurant Name"
          required
        />

        <label htmlFor="description">
          Description
        </label>
        <textarea
          value={newRestaurant.description}
          id="description"
          onChange={handleChange}
          placeholder="Description"
          min="0"
          required
        />

        <label htmlFor="phoneNumber">
          Phone Number:
        </label>

        <input
          value={newRestaurant.phoneNumber}
          type="tel"
          id="phoneNumber"
          onChange={handleChange}
          placeholder="123-456-7890"
          required
        />

        <label htmlFor="openingTime">

          🕘 &nbsp; Opening:
        </label>
        <input
          value={newRestaurant.openingTime}
          type="text"
          id="openingTime"
          onChange={handleChange}
          placeholder="10:00:00"
          pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
        />

        <div>Format: 10:00:00</div><br />
        <label htmlFor="closingTime">
          🕘 &nbsp; Closing:
        </label>
        <input
          value={newRestaurant.closingTime}
          type="text"
          id="closingTime"
          onChange={handleChange}
          placeholder="10:00:00"
          pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
          required
        />
        <div>Format: 20:00:00</div><br />

        <label htmlFor="location">
          Location:
        </label>
        <input
          value={newRestaurant.location}
          type="text"
          id="location"
          onChange={handleChange}
          placeholder="Location"
          required
        />

        <label htmlFor="cuisine">
          Cuisine:
        </label>
        <input
          value={newRestaurant.cuisine}
          type="text"
          id="cuisine"
          onChange={handleChange}
          placeholder="Cuisine"
          required
        />

        <label htmlFor="price">
          Price:
        </label>
        <input
          value={newRestaurant.price}
          type="text"
          id="price"
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <label htmlFor="diningRestriction">

          Dining Restriction:
        </label>
        <select
          id="diningRestriction"
          onChange={handleChange}
          defaultValue="Select Dining Restriction"
        >
          <option disabled>Select Dining Restriction</option>
          {restrictions.map (restriction => {
            return (
              <option key={restriction} value={restriction || null}>
                {restriction}{' '}
              </option>
            );
          })}
        </select>

        <button className="submit-item-form" type="submit">
          Submit
        </button>
      </form>
      <img src={randomImg} alt="pic" className="art-side" />
    </div>
  );
}

export default AddRestaurant;
