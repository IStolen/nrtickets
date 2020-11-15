import React, { useEffect, useState, useContext } from 'react'
import { nrContext } from '../state/nrstore'
import { requestPost } from '../components/bookingRequest'
import { navigate } from 'gatsby'
import EventSeatIcon from '@material-ui/icons/EventSeat';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import NrButton from './nrbutton';

const StyledButton = styled(Button)({
    background: '#61D08E',
    border: 2,
    borderRadius: 10,
    color: 'Black',
    padding: '15px 30px',
    margin: '30px',
    boxShadow: '3px 3px 3px #173623',
    textTransform: 'capitalize',
    transition: 'transform 150ms',
    '&:hover': {
        transform: 'translate3d(0, -2px, 0)'
    },
    '&:active': {
        transform: 'translate3d(0, 2px, 0)'
    }
});

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
                const seats = Object.keys(data.seats).map(seatKey => ({
                    id: seatKey,
                    reserved: data.seats[seatKey] === 1
                }))
                setSeats(seats)
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

        <Box display='flex' flexDirection='column' alignItems='center'>
            <h2>Choose a seat</h2>
            <Paper>
                <Box margin={2} display='grid' gridTemplateColumns='1fr 1fr 1fr 1fr' gridRowGap={8} gridColumnGap={16}>
                    {seats.map((seat, index) => {
                        return <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            marginRight={(index + 1) % 4 === 2 ? '2rem' : '0'}
                            marginLeft={(index + 1) % 4 === 3 ? '2rem' : '0'}>
                            <IconButton
                                name={seat.id}
                                key={seat.id}
                                style={{ color: '#000' }}
                                onClick={() => reserveSeat(seat)}
                                className={`${seat.reserved ? 'reserved' : ''} ${selectedSeat === seat.id ? 'selected' : ''} nrSeatButton`}
                            >
                                <EventSeatIcon fontSize='large' />
                            </IconButton>
                            {seat.id}
                        </Box>
                    })}
                </Box>
            </Paper>
            <StyledButton onClick={() => submitSeatBooking()} >Book this seat NOK 100,- additional charge</StyledButton>
            <NrButton label='continue without seat booking' to='/prototypePaymentPlaceholder' />
        </Box>

    )
}