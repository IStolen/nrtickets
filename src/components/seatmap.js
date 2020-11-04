import React, { useEffect, useState, useContext } from 'react'
import { nrContext } from '../state/nrstore'
import { requestPost } from '../components/bookingRequest'
import { navigate } from 'gatsby'

import Box from '@material-ui/core/Box';

export default function SetSeatMap() {
    const context = useContext(nrContext)
    const [result, setResult] = useState([])
    const [seats, setSeats] = useState([])
    const [selectedSeat, setSelectedSeat] = useState('')
    useEffect(() => {
        const apiUrl = `http://localhost:5000/getseatmap?tripnr=${context.tripIDState}&date=${context.dateState}`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setResult(data);
                setSeats(Object.keys(data.seats).map(seatKey => ({
                    id: seatKey,
                    reserved: data.seats[seatKey] === 1
                })))
            });
    }, []);

    const reserveSeat = (seat) => {
        setSelectedSeat(seat.id)
    }

    const submitSeatBooking = () => {
        console.log(context.ticketNoState)
        const apiUrl = `http://localhost:5000//seatbooking?bookingID=${context.ticketNoState}&tripnr=${context.tripIDState}&date=${context.dateState}&seat=${selectedSeat}`;
        requestPost(apiUrl, setResult)
        navigate('/prototypePaymentPlaceholder')
    }

    console.log(result)
    console.log(seats)

    return (
        <div>
            <Box margin={2} display='grid' gridTemplateColumns='1fr 1fr 1fr 1fr' gridRowGap={8} gridColumnGap={16}>
                {seats.map(seat =>
                    <button name={seat.id} key={seat.id} onClick={() => reserveSeat(seat)} className={`${seat.reserved ? 'reserved' : ''} ${selectedSeat === seat.id ? 'selected' : ''} nrSeatButton`}>
                        {seat.id}
                    </button>)}
            </Box>
            <button onClick={() => submitSeatBooking()}>RESERVE</button>
        </div>
    )
}