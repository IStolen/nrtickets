import React, { useContext, useState }from 'react';
import {nrContext} from '../state/nrstore'


export default function ChooseTrip() {
  const context = useContext(nrContext)
  const [responseState, setResponseState] = useState('')
  const apiUrl = `http://localhost:5000/bookingrequest?tripnr=${context.tripIDState}`;
  fetch(apiUrl, 
  {
    method: 'POST',
    headers: 
    {
      'Content-Type': 'text/html; charset=utf-8'
    },
  }).then((response) =>
  {
    return response.text()
  }).then((data) =>
  {
    console.log(data)
    setResponseState(data)
  })
  ; 
  
  return (
    <div>
      <p>post done</p>
      <p>{responseState}</p>
    </div>
  );
}
