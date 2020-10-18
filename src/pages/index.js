import React from "react"
import Layout from "../components/layout"
import CenteredGrid from "../components/grid"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <Layout>
      <Helmet title='Norwegian Rails' />
      <CenteredGrid></CenteredGrid>
    </Layout>
  );
}