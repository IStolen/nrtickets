import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function ButtonAppBar() {

  return (
    <div >
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start"  color="secondary" aria-label="menu" >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}