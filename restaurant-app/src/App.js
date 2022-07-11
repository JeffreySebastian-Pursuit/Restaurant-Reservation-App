import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Restaurants from './componets/Restaurants';
import RestaurantDetails from './componets/RestaurantDetails';
import NavBar from './navbar/NavBar';
import Index from './pages/Index';
import ReservationDetails from './componets/ReservationDetails';
import NewForm from './pages/NewForm';
import TopRestaurants from './componets/TopRestaurants';

function App() {
  const [restaurants, setRestaurants] = useState ([]);
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

  return (
    <div className="App">
 <Router>
   <NavBar />
        <main className='pageContainer'>
          <Routes>
            <Route exact path="/" element={<Index  restaurants={restaurants} loading={loading}/>} />
            <Route exact path="/toprestaurants" element={<TopRestaurants restaurants={restaurants} />} />
            <Route exact path="/restaurants/new" element={<NewForm/>} />
            <Route exact path="/reservations/:id" element={<ReservationDetails/>} />
            <Route exact path="/restaurants/:id" element={<RestaurantDetails/>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
