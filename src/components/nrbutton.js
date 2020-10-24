import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby'

const MyButton = styled(Button)({
  background: '#61D08E',
  border: 0,
  borderRadius: 3,
  color: 'Black',
  height: 50,
  padding: '0 30px',
  width: 208,
});

export default function NrButton({label, to}) {
  return <MyButton><Link textDecoration='none' box-shadow='none' to={to} >{label}</Link></MyButton>;
}