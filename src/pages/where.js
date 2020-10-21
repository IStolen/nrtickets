import React, {useContext} from 'react';
import WhereForm from "../components/StationSelector";
import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid';
import NrButton from '../components/nrbutton'
import Box from '@material-ui/core/Box'
import { Helmet } from "react-helmet"
import {nrContext} from '../state/nrstore'


const styles = {
    height: '60vh',
    textAlign: "center", 
  };
  const section = {
    backgroundColor: "#255839",
    paddingTop: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  export default function Where() {
  //  const [fromState, setFromState] = useState('')
  //  const [toState, setToState] = useState('')
    const context = useContext(nrContext)
    console.log(context)
    return (
      <Layout>
          <Helmet title='NR tickets'/>
      <button onClick={() => context.incrementCurrTicketSold()}>Hey sann {context.katt1} {context.currTicketSold} </button>
          <form>
            <div>
            From: {context.fromState} To: {context.toState}
              <Grid container style={styles} >
                <Grid item xs={12}>
                  <Box style={section}>
                    <p>Where are you going?</p>
                  </Box>
                </Grid>
                <Grid item xs={12} >
                <Box style={section} >
                    <WhereForm 
                    label="From" 
                    fieldValue={context.fromState}
                    setFieldValue={context.setFromState}
                    />
                </Box>
                </Grid>
                <Grid item xs={12} >
                  <Box style={section} >
                    <WhereForm 
                    label="To" 
                    fieldValue={context.toState}
                    setFieldValue={context.setToState}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} >
                <Box style={section} height='40vh'>
                    <NrButton label='next'>Submit</NrButton> 
                </Box>
                </Grid>
                </Grid>
            </div>
          </form>
        </Layout>
    )
  }