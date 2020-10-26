import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby'

const StyledLink = styled(Link)({
  background: '#61D08E',
  border: 0,
  borderRadius: 3,
  color: 'Black',
  padding: '15px 80px',
  textTransform: 'uppercase'
});

export default function NrButton({ label, to }) {
  return <StyledLink textDecoration='none' box-shadow='none' to={to} >{label}</StyledLink>
}