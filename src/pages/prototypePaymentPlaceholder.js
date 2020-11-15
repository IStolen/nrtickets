import React, { useEffect } from 'react';
import { navigate } from 'gatsby'
import vipps from '../gifs/vipps.gif'

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
      <img src={vipps} alt="spinner illustrating wait time" />
    </div>
  );
}
export default ({ element }) => <PretendPayment />