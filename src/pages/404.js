import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function NotFound() {
  return (
    <Layout>
      <Helmet title='NR404' />
      <h1>OOps</h1>
      <p>
        Seems something got lost .. check your URL and try again
      </p>
    </Layout>
  )
}