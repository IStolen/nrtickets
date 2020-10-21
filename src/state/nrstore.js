import React, { useState, createContext } from 'react'


export const nrContext = createContext()
const NrProvider = ({children}) => {
    const [currTicketSold, setCurrTicketSold] = useState(0)
    const [fromState, setFromState] = useState('TBG')
    const [toState, setToState] = useState('')

    const store = {
        katt1: 'Gatsby', 
        kattone: 'Linux',
        currTicketSold,
        fromState,
        setFromState,
        toState,
        setToState,
        incrementCurrTicketSold: () => setCurrTicketSold(currTicketSold + 1)
    }
    
    return (
        <nrContext.Provider value={store}>
            {children}
        </nrContext.Provider>
    )
}

export default ({element}) => <NrProvider>{element}</NrProvider>