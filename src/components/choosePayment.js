import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby'

export default function PaymentGrid({label1, label2, label3, label4, to1, to2, to3, to4}) {

  const styles = {
    height: '100vh',
    textAlign: "center", 
  };
  const section1 = {
    height: '10vh',
    backgroundColor: "#255839",
    paddingTop: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const section2 = {
    height: '25vh',
    backgroundColor: "#479666",
    paddingTop: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };


  return (
    <div style={styles}>
      <Grid container >
        <Grid item xs={12} >
          <Box style={section1} component={Link} to={to1}><p>{label1}</p></Box>
        </Grid>
        <Grid item xs={12}>
        <Box style={section2} component={Link} to={to2}><p>{label2}</p></Box>
        </Grid>
        <Grid item xs={12}>
        <Box style={section2} component={Link} to={to3}><p>{label3}</p></Box>
        </Grid>
        <Grid item xs={12}>
        <Box style={section2} component={Link} to={to4}><p>{label4}</p></Box>
        </Grid> 
      </Grid>
    </div>
  );
}

