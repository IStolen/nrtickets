import React from 'react';
import WhereForm from "../components/WhereForm";
import Layout from "../components/layout"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
    height: '100vh',
    textAlign: "center", 
  };
const section = {
    height: '25vh',
    backgroundColor: "#255839",
    paddingTop: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

export default function About() {
    return (
        <Layout>
          <form>
            <div>
              <Grid container style={styles} >
                <Grid item xs={12} >
                <Paper style={section} >
                    <WhereForm 
                    label="From" 
                    helperText="where are you travelling from?" >
                    </WhereForm>
                </Paper>
                </Grid>
                <Grid item xs={12} >
                <Paper style={section} >
                    <WhereForm 
                    label="To" 
                    helperText="where do you want to go?" >
                    </WhereForm>
                </Paper>
                </Grid>
            </Grid>
            <button type="submit">Submit</button>
            </div>
          </form>
        </Layout>
    )
  }