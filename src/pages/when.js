import React from 'react';
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import WhenForm from '../components/whenform'


export default function When() {
  return (
    <Layout>
      <Helmet title='NR tickets' />
      <WhenForm to='/choose' />
    </Layout>
  )
}