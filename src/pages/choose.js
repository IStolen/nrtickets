import React, { useEffect, useState } from 'react';
import TripList from '../components/TripList';
import withListLoading from '../components/loading';

export default function ChooseTrip() {
  const ListLoading = withListLoading(TripList);
  const [appState, setAppState] = useState({
    loading: false,
    trips: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:5000/trips?stationcodeFrom=TRD&stationcodeTo=BRG`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((trips) => {
        setAppState({ loading: false, trips: trips });
      });
  }, [setAppState]);
  
  return (
    <div>
        <ListLoading isLoading={appState.loading} trips={appState.trips} />
    </div>
  );
}
