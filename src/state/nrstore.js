import React, { useState, createContext } from 'react'

export const nrContext = createContext()
const NrProvider = ({ children }) => {
    const [currTicketSold, setCurrTicketSold] = useState(0)
    const [fromState, setFromState] = useState('TBG')
    const [toState, setToState] = useState('OSL')
    const [timeState, setTimeState] = useState('06:30')
    const [dateState, setDateState] = useState('2020-10-24')
    const [tripIDState, setTripIDState] = useState('nn')
    const [bookingIDState, setBookingIDState] = useState('')
    const [ticketNoState, setTicketNoState] = useState('')


    const store = {
        katt1: 'Gatsby',
        kattone: 'Linux',
        currTicketSold,
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
        incrementCurrTicketSold: () => setCurrTicketSold(currTicketSold + 1)
    }

    return (
        <nrContext.Provider value={store}>
            {children}
        </nrContext.Provider>
    )
}

export default ({ element }) => <NrProvider>{element}</NrProvider>