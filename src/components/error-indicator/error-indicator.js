import React from 'react';
import './error-imdicator.css';
import icon from './176-3.jpg';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">Что то поломалось, но мы уже чиним!</span>
      <img src={icon} alt="error-icon" />
    </div>
  );
};

export default ErrorIndicator;
