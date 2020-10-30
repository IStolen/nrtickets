import React from 'react';
import ChooseTrip from '../components/cookTripList'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function tripPicker() {

    return (
        <Layout>
            <Helmet title='NR tickets' />
            <ChooseTrip redirectTo='/editconfirmation' />
        </Layout>
    )
}