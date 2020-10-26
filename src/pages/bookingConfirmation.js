import React, { useContext, useEffect, useState } from 'react';
import { nrContext } from '../state/nrstore'
import { requestPost } from '../components/bookingRequest'

export default function RequestBooking() {
  const [result, setResult] = useState('')
  const context = useContext(nrContext)
  useEffect(() => {
    const apiUrl = `http://localhost:5000/bookingrequest?bookingID=${context.bookingIDState}&tripnr=${context.tripIDState}&date=${context.dateState}`;
    requestPost(apiUrl, setResult)
  }, [])
  return (
    <div>
      <p>Ticket ordered successfully</p>
      <p>{result}</p>
    </div>
  );
}
