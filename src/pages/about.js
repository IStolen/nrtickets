import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function About() {
  return (
    <Layout>
      <Helmet title='About NR' />
      <h1>About NR</h1>
      <p>
        NR is a train company that drives trains in Norway
      </p>
    </Layout>
  )
}