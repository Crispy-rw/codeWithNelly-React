import React from 'react';
import '../style.css';

const Card = props => {
  return (
    <div className="card">
      <img src={props.thumbnailUrl} alt="alt img" />
      <p>{props.title}</p>
    </div>
  );
};

export default Card;
