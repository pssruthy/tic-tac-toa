import React from 'react';

const Status = (props) => {
  let className = '';
  let status = `Player ${props.player} turn`;
  if (props.status === 'draw') {
    className = 'draw gameOver';
    status = 'Draw';
  }
  if (props.status === 'won') {
    className = 'won gameOver';
    status = `Player ${props.player} won`;
  }
  return <div className={`status ${className}`}>{status}</div>;
};

export default Status;
