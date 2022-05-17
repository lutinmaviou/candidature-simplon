import React from 'react';
import './Card.css';

const Card = ({ name }) => {
  console.log(name);
  return <div className="card">{name}</div>;
};

export default Card;
