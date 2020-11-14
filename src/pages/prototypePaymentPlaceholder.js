import React, { useEffect } from 'react';
import { navigate } from 'gatsby'
import spinner from '../gifs/spinner.gif'

const PretendPayment = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('/bookingConfirmation')
    }, 3000);
    return () => clearTimeout();
  }, []);


  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <p>User is redirected to external payment system</p>
      <img src={spinner} alt="spinner illustrating wait time" />
    </div>
  );
}
export default ({ element }) => <PretendPayment />