import React from 'react';
import './game.css';
import Tile from './Tile.js';

const Board = ({ onClick, tilesStatus }) => {
  const tiles = tilesStatus.map((_, index) => (
    <Tile
      id={index}
      key={index}
      onClick={onClick}
      symbol={tilesStatus[index]}
    />
  ));
  return <div className="board">{tiles}</div>;
};

export default Board;
