import React from 'react';
import './game.css';
import Tile from './Tile.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ids = Array.from(new Array(9), (_, index) => index + 1);
    const tiles = ids.map((id) => (
      <Tile
        id={id}
        key={id}
        player={this.props.player}
        onClick={this.props.onClick}
      />
    ));
    return <div className="board">{tiles}</div>;
  }
}

export default Board;
