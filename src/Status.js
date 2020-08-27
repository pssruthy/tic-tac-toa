import React from 'react';

const Status = ({ player, winner, isDrawn }) => {
  let className = '';
  let message = `${player}'s turn`;
  if (isDrawn) {
    className = 'draw gameOver';
    message = 'Drawn';
  }
  if (winner !== null) {
    className = 'won gameOver';
    message = `${player} won the game`;
  }
  return <div className={`message ${className}`}>{message}</div>;
};

export default Status;
