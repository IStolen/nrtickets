import React, {useState} from 'react';
import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid';
import NrButton from '../components/nrbutton'
import NrPicker from '../components/TimePicker'
import Box from '@material-ui/core/Box'
import { Helmet } from "react-helmet"
import NrButtonSmall from '../components/nrButtonSmall'

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

export default function When() {
    const [timeState, setTimeState] = useState('')
    const [dateState, setDateState] = useState('')
    return (
        <Layout>
          <Helmet title='NR tickets'/>
          <form>
            <div>
            From: {timeState} To: {dateState}
              <Grid container style={styles} >
                <Grid item xs={12}>
                  <Box style={section}>
                    <p>When do you want to travel?</p>
                  </Box>
                </Grid>
                <Grid item xs={6} >
                  <Box style={section} height='20vh'>
                    <NrButtonSmall label='depart'>Depart</NrButtonSmall> 
                  </Box>
                </Grid>
                <Grid item xs={6} >
                  <Box style={section} height='20vh'>
                    <NrButtonSmall label='arrive'>Arrive</NrButtonSmall>
                  </Box>
                </Grid>
                <Grid item xs={6} >
                  <Box style={section} height='20vh'>
                    <NrPicker 
                      label='time' 
                      type='time' 
                      fieldValue={timeState}
                      setFieldValue={setTimeState}
                      defaultValue='07:30'
                      >     
                    </NrPicker>  
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box style={section} height='20vh' >
                    <NrPicker 
                      label='date' 
                      type='date' 
                      fieldValue={dateState}
                      setFieldValue={setDateState}>                        
                    </NrPicker>  
                  </Box>
                </Grid>
                <Grid item xs={12} >
                  <Box style={section} height='20vh'>
                    <NrButton type="submit" label='next'>Submit</NrButton>  
                  </Box>
                </Grid>
              </Grid>
            </div>
          </form>
        </Layout>
    )
  }