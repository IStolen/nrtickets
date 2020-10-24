import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby'

const NrButton = styled(Button)({
  background: '#61D08E',
  border: 0,
  borderRadius: 3,
  color: 'Black',
  padding: '0 30px',
  width: 123,
  height: 50,
});

export default function NrButtonSmall({label, to}) {
  return <NrButton><Link textDecoration='none' box-shadow='none' to={to} >{label}</Link></NrButton>;
}