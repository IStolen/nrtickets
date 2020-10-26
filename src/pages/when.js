import React, { useContext } from 'react';
import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid';
import NrButton from '../components/nrbutton'
import NrPicker from '../components/TimePicker'
import Box from '@material-ui/core/Box'
import { Helmet } from "react-helmet"
import NrButtonSmall from '../components/nrButtonSmall'
import { nrContext } from '../state/nrstore'

const styles = {
  height: '60vh',
  textAlign: "cetner",
};
const section = {
  backgroundColor: "#255839",
  paddingTop: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function When() {
  const context = useContext(nrContext)
  return (
    <Layout>
      <Helmet title='NR tickets' />
      <button onClick={() => context.incrementCurrTicketSold()}>Hey sann {context.kattone} {context.currTicketSold} </button>

      <form>
        <div>
          From: {context.timeState} To: {context.dateState}
          <Grid container style={styles} >
            <Grid item xs={12}>
              <Box style={section}>
                <p>When do you want to travel?</p>
              </Box>
            </Grid>
            <Grid item xs={6} >
              <Box style={section} height='20vh'>
                <NrButtonSmall label='depart' to=''>Depart</NrButtonSmall>
              </Box>
            </Grid>
            <Grid item xs={6} >
              <Box style={section} height='20vh'>
                <NrButtonSmall label='arrive' to=''>Arrive</NrButtonSmall>
              </Box>
            </Grid>
            <Grid item xs={6} >
              <Box style={section} height='20vh'>
                <NrPicker
                  label='time'
                  type='time'
                  fieldValue={context.timeState}
                  setFieldValue={context.setTimeState}
                >
                </NrPicker>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box style={section} height='20vh' >
                <NrPicker
                  label='date'
                  type='date'
                  fieldValue={context.dateState}
                  setFieldValue={context.setDateState}>
                </NrPicker>
              </Box>
            </Grid>
            <Grid item xs={12} >
              <Box style={section} height='20vh'>
                <NrButton to='/choose' label='next'>Submit</NrButton>
              </Box>
            </Grid>
          </Grid>
        </div>
      </form>
    </Layout>
  )
}