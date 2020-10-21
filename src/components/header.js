import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'gatsby'

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div >
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start"  color="secondary" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to='/'>Home</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to='/about'>About nr</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to='/contact'>Contact us</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Typography variant="h6" >
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}