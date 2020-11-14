import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Link } from 'gatsby'

const StyledLink = styled(Link)({
  background: '#61D08E',
  border: 0,
  borderRadius: 10,
  color: 'Black',
  padding: '15px 80px',
  margin: '30px',
  boxShadow: '3px 3px 3px #173623',
  textTransform: 'capitalize',
  transition: 'transform 150ms',
  '&:hover': {
    transform: 'translate3d(0, -2px, 0)'
  },
  '&:active': {
    transform: 'translate3d(0, 2px, 0)'
  }
});

export default function NrButton({ label, to }) {
  return <StyledLink textDecoration='none' box-shadow='none' to={to} >{label}</StyledLink>
}
