import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function CenteredGrid() {

  const styles = {
    height: '100vh',
    textAlign: "center", 
  };
  const section1 = {
    height: '25vh',
    backgroundColor: "#255839",
    paddingTop: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const section2 = {
    height: '25vh',
    backgroundColor: "#36714D",
    paddingTop: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const section3 = {
    height: '25vh',
    paddingTop: 5,
    backgroundColor: "#479666",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const section4 = {
    height: '25vh',
    paddingTop: 5,
    backgroundColor: "#61D08E",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={styles}>
      <Grid container >
        <Grid item xs={12} >
          <Paper style={section1}><p>Buy ticket</p></Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper style={section2} ><p>My tickets</p></Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper style={section3} ><p>News from NR </p></Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper style={section4} ><p>Holiday offers</p></Paper>
        </Grid> 
      </Grid>
    </div>
  );
}

