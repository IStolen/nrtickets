import React from 'react';
import SetSeatMap from '../components/seatmap'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function seatPicker() {

    return (
        <Layout>
            <Helmet title='NR tickets' />
            <SetSeatMap />
        </Layout>
    )
}