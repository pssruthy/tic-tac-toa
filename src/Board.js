import React from 'react';
import './game.css';
import Tile from './Tile.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ids = Array.from(new Array(9), (_, index) => index + 1);
    const tiles = ids.map((id) => <Tile id={id} key={id}></Tile>);
    return <div className="board">{tiles}</div>;
  }
}

export default Board;
