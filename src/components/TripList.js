import React from 'react';

const TripList = (props) => {
  const { trips: trip } = props;
  if (!trip || trip.length === 0) return <p>Sorry, we have no available journeys at your chosen time and date</p>;
  return (
    <ul>
      <h2 className='list-head'>Choose a trip</h2>
      {trip.map((trip) => {
        return (
          <li key={trip.tripID} className='list'>
            <span className='station-from'>{trip.stationnameFrom} - </span>
            <span className='station-to'>{trip.stationnameTo} - </span>
            <span className='time-from'>{trip.timefrom} - </span>
            <span className='time-to'>{trip.timeto} - </span>
            <span className='price'>{trip.price} NOK</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TripList;
