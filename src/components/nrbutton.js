import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: '#61D08E',
  border: 0,
  borderRadius: 3,
  color: '#F3FAA0',
  height: 48,
  padding: '0 30px',
  width: 208,
});

export default function NrButton({label}) {
  return <MyButton>{label}</MyButton>;
}