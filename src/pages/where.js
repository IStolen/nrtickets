import React, {useState} from 'react';
import WhereForm from "../components/StationSelector";
import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid';
import NrButton from '../components/nrbutton'
import Box from '@material-ui/core/Box'
import { Helmet } from "react-helmet"

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
    const [fromState, setFromState] = useState('')
    const [toState, setToState] = useState('')
    return (
        <Layout>
          <Helmet title='NR tickets'/>
          <form>
            <div>
            From: {fromState} To: {toState}
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
                    fieldValue={fromState}
                    setFieldValue={setFromState}
                    />
                </Box>
                </Grid>
                <Grid item xs={12} >
                  <Box style={section} >
                    <WhereForm 
                    label="To" 
                    fieldValue={toState}
                    setFieldValue={setToState}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} >
                <Box style={section} height='40vh'>
                    <NrButton type="submit" label='next'>Submit</NrButton>  
                </Box>
                </Grid>
                </Grid>
            </div>
          </form>
        </Layout>
    )
  }