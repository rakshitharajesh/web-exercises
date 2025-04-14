import React from 'react';
import PropTypes from 'prop-types';

const Child = ({ message }) => {
  const isValid = typeof message === 'string';

  return (
    <div>
      <h2>Message from Parent:</h2>
      <p style={{color: 'red'}}>{isValid ? message : "Missing message prop."}</p>
    </div>
  );
};

// PropTypes validation
Child.propTypes = {
  message: PropTypes.string.isRequired
};

export default Child;