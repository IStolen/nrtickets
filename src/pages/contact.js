import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function Contact() {
  return (
    <Layout>
      <Helmet title='Contact NR' />
      <h1>We'd love to talk! Email us at the address below</h1>
      <p>
        <a href="mailto:nr@example.com">NR@example.com</a>
      </p>
    </Layout>
  )
}