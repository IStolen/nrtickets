import React, { useEffect, useState, useContext } from 'react';
import TripList from '../components/TripList';
import withListLoading from '../components/loading';
import {nrContext} from '../state/nrstore'

export default function ChooseTrip() {
  const ListLoading = withListLoading(TripList);
  const context = useContext(nrContext) 
  const [appState, setListState] = useState({
    loading: false,
    trips: null,
  });

  useEffect(() => {      
    setListState({ loading: true });
    const apiUrl = `http://localhost:5000/trips?stationcodeFrom=${context.fromState}&stationcodeTo=TBG`;
    console.log(apiUrl)
    fetch(apiUrl)
      .then((res) => res.json())
      .then((trips) => {
        setListState({ loading: false, trips: trips });
      });
  }, [setListState]);
  
  return (
    <div>
        <ListLoading isLoading={appState.loading} trips={appState.trips} />
    </div>
  );
}
