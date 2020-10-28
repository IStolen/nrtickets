import React, { useContext } from 'react';
import Layout from "../components/layout"
import NrTextInput from "../components/nrTextInput"
import { Helmet } from "react-helmet"
import { nrContext } from '../state/nrstore'
import NrButtonSmall from '../components/nrButtonSmall'

export default function About() {
  const context = useContext(nrContext)
  return (
    <Layout>
      <Helmet title='Alter ticket' />
      <h1>Change of plans? No problem. Enter your ticket number below:</h1>
      <p>
        make a change!
      </p>
      <NrTextInput
        label="ticketnumber"
        fieldValue={context.ticketNoState}
        setFieldValue={context.setTicketNoState}
      />
      <p>
        <NrButtonSmall label='make a change!' to='/when'></NrButtonSmall>
      </p>
    </Layout>
  )
}