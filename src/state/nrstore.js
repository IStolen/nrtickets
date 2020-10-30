import React, { useState, createContext } from 'react'

export const nrContext = createContext()
const NrProvider = ({ children }) => {
    const [fromState, setFromState] = useState('TBG')
    const [toState, setToState] = useState('OSL')
    const [timeState, setTimeState] = useState('06:30')
    const [dateState, setDateState] = useState('2020-10-24')
    const [tripIDState, setTripIDState] = useState('nn')
    const [bookingIDState, setBookingIDState] = useState('')
    const [ticketNoState, setTicketNoState] = useState('5cd058a5-ba7c-42ee-a2c7-77666')


    const store = {
        fromState,
        setFromState,
        toState,
        setToState,
        timeState,
        setTimeState,
        dateState,
        setDateState,
        tripIDState,
        setTripIDState,
        bookingIDState,
        setBookingIDState,
        ticketNoState,
        setTicketNoState,
    }

    return (
        <nrContext.Provider value={store}>
            {children}
        </nrContext.Provider>
    )
}

export default ({ element }) => <NrProvider>{element}</NrProvider>