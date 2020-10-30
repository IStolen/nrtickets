import React, { useEffect, useState, useContext } from 'react';
import TripList from './TripList';
import withListLoading from './loading';
import { nrContext } from '../state/nrstore'
import uuid from 'uuid'

export default function ChooseTrip({ redirectTo }) {
    const TripListLoad = withListLoading(TripList);
    const context = useContext(nrContext)
    const [appState, setListState] = useState({
        loading: false,
        trips: null,
    });
    useEffect(() => {
        setListState({ loading: true });
        const apiUrl = `http://localhost:5000/trips?stationcodeFrom=${context.fromState}&stationcodeTo=${context.toState}&timefrom=${context.timeState}`;
        console.log(apiUrl)
        context.setBookingIDState(uuid.v4())
        fetch(apiUrl)
            .then((res) => res.json())
            .then((trips) => {
                setListState({ loading: false, trips: trips });
            });
    }, [setListState]);

    return (
        <div>
            <TripListLoad isLoading={appState.loading} trips={appState.trips} to={redirectTo} />
        </div>
    );
}