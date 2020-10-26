import React, { useContext }from 'react';
import {nrContext} from '../state/nrstore'
import RequestPost from '../components/bookingRequest'

export default function RequestBooking() {
  
  const context = useContext(nrContext)
  const apiUrl = `http://localhost:5000/bookingrequest?bookingID=${context.bookingIDState}&tripnr=${context.tripIDState}&date=${context.dateState}`;
  const Jan = RequestPost(apiUrl)

  return (
    <div>
      <p>post done</p>
      <p>{Jan}</p>
    </div>
  );
}
