import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate, Link} from 'react-router-dom';
import moment from 'moment';
import '../styles/ReservationDetails.css'

function ReservationDetails () {
  const [reservation, setReservation] = useState ({});
  const [lunchOrDinner, setLunchOrDinner] = useState('')
  const {id} = useParams ();
  let navigate = useNavigate ();

  const determineLunchOrDinnerTime = (time) => {
    let t = time.split(' ');
    let removeColon = t[1].replace(':', '');
    let amOrPm = t[2];
    let hour = Number(removeColon )
    if(amOrPm === 'pm'){
      hour += 1200;
    }
    if(hour >=1100 && hour <= 1500){
      console.log('Lunch Time')
      return 'Lunch Time'
    }else if(hour >= 1700 && hour <= 2200){
      console.log('Dinner Time')
      return 'Dinner Time'
    }else{
      return 'N/A'
    }
  }

  useEffect (() => {
    const getReservationDetails = async () => {
      let res = await axios.get (
        `https://jeffrey-takehome-api.herokuapp.com/api/reservations/${id}`
      );
      let dateTime = moment(res?.data?.time).format('MM/DD/YYYY, h:mm a');
      const mealTime = determineLunchOrDinnerTime(dateTime)
      setLunchOrDinner(mealTime);
      setReservation(res.data);
    };
    getReservationDetails ();
  }, []);


  const deleteReservation = async () => {
    let res = await axios.delete (
      `https://jeffrey-takehome-api.herokuapp.com/api/reservations/${id}`
    );
    console.log(reservation)
    setReservation(res.data);
  };


  const handleDelete = async () => {
    try {
      await deleteReservation (id);
      navigate (`/restaurants/${reservation.restaurantId}`);
    } catch (error) {
      console.log (error);
    }
  };

  return <div className='reservationCotainer'>
      <p>
          Name: {reservation.firstName} {reservation.lastName}

      </p>
      <p>
          Phone Number:  {reservation.phoneNumber}
      </p>
      <p>
          Email: {reservation?.email || 'Null'}  
      </p>
      <p>
          Time: {moment (reservation.time).format('MM/DD/YYYY, h:mm a')}
      </p>
      <p>
        Number of guests: : {reservation.numGuests}
      </p>
      <p>
        Dinner or Lunch :  {lunchOrDinner}
      </p>

      <button
          onClick={() => {
            if (
              window.confirm (
                'Are you sure you wish to cancel your reservation?'
              )
            )
              handleDelete (id);
          }}
          type="cancel"
        >
          Delete
        </button>

      <button>
          <Link exact to={`/restaurants/${reservation.restaurantId}`}>
          Back
          </Link>
      </button>


  </div>;
}

export default ReservationDetails;
