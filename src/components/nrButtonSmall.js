import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: '#61D08E',
  border: 0,
  borderRadius: 3,
  color: 'Black',
  padding: '0 30px',
  width: 123,
  height: 50,
});

export default function NrButtonSmall({label}) {
  return <MyButton>{label}</MyButton>;
}