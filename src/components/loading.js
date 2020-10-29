import React from 'react';

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hang on, we are just getting things ready for you 🐱‍🏍
      </p>
    );
  };
}
export default WithListLoading;