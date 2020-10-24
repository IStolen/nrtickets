import React, { useContext } from 'react';
import { nrContext } from '../state/nrstore'
import Box from '@material-ui/core/Box';


export default function BookingCall(props) {  
  const { receipt } = props;
  const context = useContext(nrContext)
  
  if (!receipt || receipt.length === 0) return <p>Something went wrong, no ticket for you :(</p>;
  return ( 
    <div>
        <h2>Hurrah</h2>
        <Box style={{ margin: `3rem auto`, maxWidth: 650, padding: `2`, alignItems: newLocal, justifyContent: 'center'}}>
            <p>You have a Ticket!!</p>
            <p>{receipt}</p>
        </Box>
    </div>  
    );
   
};

