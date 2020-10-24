import React from "react"
import Layout from "../components/layout"
import CenteredGrid from "../components/grid"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <Layout>
      <Helmet title='Norwegian Rails' />
      <CenteredGrid
        to1='/where'
        to2=''
        to3=''
        to4=''
        label1='Buy Ticket'
        label2='My tickets'
        label3='holiday offers'
        label4='news from NR'
      />
    </Layout>
  );
}