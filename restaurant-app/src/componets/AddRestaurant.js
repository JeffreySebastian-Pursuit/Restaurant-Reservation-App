import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';
import '../styles/AddRestaurant.css';
import {randomImg} from '../helpers/randomImage';

function AddRestaurant () {
  const minDate = new Date ().toLocaleDateString ();
  const [newRestaurant, setNewRestaurant] = useState ({
    name: '',
    description: '',
    phoneNumber: '',
    openingTime:"",
    closingTime: '',
    price: '',
    cuisine: '',
    location: '',
    diningRestriction: '',
  });
  let history = useNavigate ();

  const createNewRestaurant = async (newRes) => {
    try {
      await axios.post ('https://jeffrey-takehome-api.herokuapp.com/api/restaurants', newRes);
      history('/');
      alert ('You just created a New Restaurant available');
    } catch (error) {
      return error;
    }
  };


  const handleChange = e => {
    setNewRestaurant ({...newRestaurant, [e.target.id]: e.target.value});
  };

  console.log(newRestaurant)
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
          type="text"
          id="phoneNumber"
          onChange={handleChange}
          placeholder="Phone Number"
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
          placeholder="hh:mm:ss"
          required
        />
        <label htmlFor="closingTime">
          🕘 &nbsp; Closing:
        </label>
        <input
          value={newRestaurant.closingTime}
          type="text"
          id="closingTime"
          onChange={handleChange}
          placeholder="hh:mm:ss"
          required
        />

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

        <input
          value={newRestaurant.diningRestriction}
          type="text"
          id="diningRestriction"
          onChange={handleChange}
          placeholder="Dining Restriction"
          required
        />

        <button className="submit-item-form" type="submit">
          Submit
        </button>
      </form>
      <img src={randomImg} alt="pic" className="art-side" />
    </div>
  );
}

export default AddRestaurant;
