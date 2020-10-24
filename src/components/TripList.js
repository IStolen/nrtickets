import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { navigate } from 'gatsby'
import { nrContext } from '../state/nrstore'
import Box from '@material-ui/core/Box';



export default function TripList(props) {  
  const { trips: trip } = props;
  const context = useContext(nrContext)
  
  const buttonStyles = {
    background: '#61D08E',
    border: 0,
    borderRadius: 3,
    color: 'Black',
    padding: '0 30px',
    width: 123,
    height: 40,
  };

  function PassBooking(trip) {
    context.setTripIDState(trip)
    console.log(trip)
    navigate('/prototypePaymentPlaceholder')
  }

  if (!trip || trip.length === 0) return <p>Sorry, we have no available journeys at your chosen time and date</p>;
  return (
    <ul style={{ textAlign: "center", listStyle: 'none' }}>
      <h2 className='list-head'>Choose a trip</h2>
      {trip.map((trip) => {
        return (
          <Box style={{ margin: `3rem auto`, maxWidth: 650, padding: `2`, alignItems: 'center', justifyContent: 'center'}}>
          <li key={trip.tripID} className='list'>
            <span className='station-from'>{trip.stationnameFrom} - </span>
            <span className='station-to'>{trip.stationnameTo} - </span>
            <span className='time-from'>{trip.timefrom} - </span>
            <span className='time-to'>{trip.timeto} - </span>
            <span className='price'>{trip.price} NOK  </span>
            <Button onClick={() => PassBooking(trip.tripID)} style={buttonStyles} label='book' to='/pay'>Book</Button>
          </li>
          </Box>
        );
      })}
    </ul>
  );
};

