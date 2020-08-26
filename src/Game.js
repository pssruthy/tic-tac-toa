import React from 'react';
import Board from './Board.js';
import Status from './Status.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameOver: false,
      player: 1,
      turns: 0,
      positions: { 1: [], 2: [] },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id, player) {
    this.setState((state) => {
      const playerPositions = state.positions[player].slice();
      playerPositions.push(id);
      const oppositePlayer = (player % 2) + 1;
      const positions = {
        [`${player}`]: playerPositions,
        [`${oppositePlayer}`]: state.positions[oppositePlayer].slice(),
      };
      return {
        player: (state.player % 2) + 1,
        turns: state.turns + 1,
        positions,
      };
    });
  }

  render() {
    return (
      <div>
        <Board player={this.state.player} onClick={this.handleClick}></Board>
        <Status
          gameOver={this.state.isGameOver}
          player={this.state.player}
        ></Status>
      </div>
    );
  }
}

export default Game;
