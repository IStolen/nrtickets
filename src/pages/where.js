import React, {useState} from 'react';
import WhereForm from "../components/WhereForm";
import Layout from "../components/layout"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NrButton from '../components/nrbutton'

const styles = {
    height: '60vh',
    textAlign: "center", 
  };
const section = {
    height: '20vh',
    backgroundColor: "#255839",
    paddingTop: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

export default function About() {
    const [fromState, setFromState] = useState('')
    const [toState, setToState] = useState('')
    return (
        <Layout>
            From: {fromState} To: {toState}
          <form>
            <div>
              <Grid container style={styles} >
                <Grid item xs={12} >
                <Paper style={section} >
                    <WhereForm 
                    label="From" 
                    helperText="where are you travelling from?" 
                    fieldValue={fromState}
                    setFieldValue={setFromState}/>
                </Paper>
                </Grid>
                <Grid item xs={12} >
                <Paper style={section} >
                    <WhereForm 
                    label="To" 
                    helperText="where do you want to go?"
                    fieldValue={toState}
                    setFieldValue={setToState}
                    />
                </Paper>
                </Grid>
                <Grid item xs={12} >
                <Paper style={section} >
                    < NrButton type="submit" label='next'>Submit</NrButton>  
                </Paper>
                </Grid>
                </Grid>
            </div>
          </form>
        </Layout>
    )
  }