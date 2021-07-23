import React from 'react';
import '../style.css';

const Card = props => {
  return (
    <div className="card">
      <img src={props.src} alt="alt img" />
      <p>Test Test title</p>
    </div>
  );
};

export default Card;
