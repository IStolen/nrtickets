import React, { useEffect } from 'react';
import { navigate } from 'gatsby'

const PretendPayment = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  useEffect(() => {
    setTimeout(() => {
        setIsVisible(true)
        setTimeout(() => {
            navigate('/bookingConfirmation')
        }, 3000)
    }, 3000);
    }, []);


  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
         {isVisible ? <p>Loading..</p> : <p>User is redirected to external payment system</p> }
    </div>
  );
};

export default PretendPayment;