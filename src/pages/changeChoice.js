import React, { useEffect, useState, useContext } from 'react';
import { nrContext } from '../state/nrstore'
import WhenForm from '../components/whenform'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"


export default function ChooseChange() {
  const context = useContext(nrContext)
  const [result, setResult] = useState([])

  useEffect(() => {
    const apiUrl = `http://localhost:5000//getbooking?bookingID=${context.ticketNoState}`;
    fetch(apiUrl)
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.pop());
      });
  }, []);

  context.setFromState(result.stationcodeFrom)
  context.setToState(result.stationcodeTo)


  return (
    <Layout>
      <Helmet title='NR tickets' />
      <p>{context.ticketNoState}</p>
      <div>
        <p>
          You have a ticket from {result.stationnameFrom} to {result.stationnameTo} at {result.timefrom} on {result.date}
        </p>
        <WhenForm to='/ticketedit' />
      </div>
    </Layout>
  );
}
