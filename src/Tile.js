import React from 'react';
import './game.css';

const Tile = ({ id, symbol, onClick }) => {
  return (
    <div
      className={`tile tile_${id} ${symbol === '' ? 'empty' : ''}`}
      id={id}
      onClick={() => {
        if (symbol === '') onClick(id);
      }}
    >
      {symbol}
    </div>
  );
};

export default Tile;
