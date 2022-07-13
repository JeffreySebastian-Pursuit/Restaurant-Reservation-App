import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Restaurants from './componets/Restaurants';
import RestaurantDetails from './componets/RestaurantDetails';
import NavBar from './navbar/NavBar';
import Index from './pages/Index';
import ReservationDetails from './componets/ReservationDetails';
import NewForm from './pages/NewForm';
function App() {
  return (
    <div className="App">
 <Router>
   <NavBar />
        <main className='pageContainer'>
          <Routes>
            <Route exact path="/" element={<Index />} />
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
