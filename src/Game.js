import React from 'react';
import Board from './Board.js';
import Status from './Status.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Board></Board>
        <Status></Status>
      </div>
    );
  }
}

export default Game;
