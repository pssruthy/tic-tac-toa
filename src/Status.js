import React from 'react';

const Status = (props) => {
  let className = '';
  let status = `Player ${props.player} turn`;
  if (props.gameOver) {
    className = 'won gameOver';
    status = `Player ${props.player} won`;
  }
  if (props.turns === 9) {
    className = 'draw gameOver';
    status = 'Draw';
  }
  return <div className={`status ${className}`}>{status}</div>;
};

export default Status;
