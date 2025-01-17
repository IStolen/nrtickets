import React, { useContext, useEffect, useState } from 'react';
import { nrContext } from '../state/nrstore'
import { requestPost } from '../components/bookingRequest'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import spinner from '../gifs/spinner.gif'

export default function RequestBooking() {
  const [result, setResult] = useState(false)
  const context = useContext(nrContext)
  useEffect(() => {
    const apiUrl = `http://localhost:5000/bookingrequest?bookingID=${context.bookingIDState}&tripnr=${context.tripIDState}&date=${context.dateState}`;
    requestPost(apiUrl, setResult)
  }, [])
  return (
    <Layout>
      <Helmet title='NR tickets' />
      <div>
        {!result && <p>Order submitted, awaiting feedback from Payment provider</p>}
        {!result && <img src={spinner} alt="spinner illustrating wait time" />}
        <p>{result}</p>
        {result && <p>Your ticket number is: </p>}
        {result && <p>{context.bookingIDState}</p>}
        {result && <p>Keep this number, you will need it if you want to change your ticket. </p>}
      </div>
    </Layout>
  );
}
