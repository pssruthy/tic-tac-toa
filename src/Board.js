import React from 'react';
import './game.css';
import Tile from './Tile.js';

const Board = (props) => {
  const tiles = props.positions.map((_, index) => (
    <Tile
      id={index}
      key={index}
      onClick={props.onClick}
      symbol={props.positions[index]}
    />
  ));
  return <div className="board">{tiles}</div>;
};

export default Board;
