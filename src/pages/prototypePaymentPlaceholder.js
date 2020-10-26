import React, { useEffect } from 'react';
import { navigate } from 'gatsby'

const PretendPayment = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  useEffect(() => {
    setTimeout(() => {
        setIsVisible(true)
        navigate('/bookingConfirmation')
      }, 3000);
      return () => clearTimeout();
    }, []);


  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
         {isVisible && <p>User is redirected to external payment system</p> }
    </div>
  );
}
export default ({element}) => <PretendPayment />