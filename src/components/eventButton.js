import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)({
    background: '#61D08E',
    border: 0,
    borderRadius: 10,
    color: 'Black',
    padding: '15px 30px',
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

export default function EventButton({ label }) {
    return <StyledButton textDecoration='none' box-shadow='none' >{label}</StyledButton>
}