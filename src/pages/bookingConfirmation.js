import React, { useContext, useEffect, useState } from 'react';
import { nrContext } from '../state/nrstore'
import { requestPost } from '../components/bookingRequest'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function RequestBooking() {
  const [result, setResult] = useState('')
  const context = useContext(nrContext)
  useEffect(() => {
    const apiUrl = `http://localhost:5000/bookingrequest?bookingID=${context.bookingIDState}&tripnr=${context.tripIDState}&date=${context.dateState}`;
    requestPost(apiUrl, setResult)
  }, [])
  return (
    <Layout>
      <Helmet title='NR tickets' />
      <div>
        <p>Order submitted, awaiting feedback from Payment provider</p>
        <p>{result}</p>
      </div>
    </Layout>
  );
}
