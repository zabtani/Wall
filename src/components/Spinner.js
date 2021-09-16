import Loader from 'react-loader-spinner';
import React from 'react';
const Spinner = () => {
  return (
    <Loader
      type="Oval"
      style={{ padding: '5%' }}
      color="#00BFFF"
      height={100}
      width={100}
    />
  );
};

export default Spinner;
