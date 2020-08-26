import React from 'react';
import './game.css';

const Tile = (props) => {
  return (
    <div
      className={`tile tile_${props.id} ${props.symbol === '' ? 'empty' : ''}`}
      id={props.id}
      onClick={props.onClick}
    >
      {props.symbol}
    </div>
  );
};

export default Tile;
