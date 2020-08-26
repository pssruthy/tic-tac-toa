import React from 'react';
import Board from './Board.js';
import Status from './Status.js';

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const checkWinningCondition = (positions) => {
  return winningCombinations.some((condition) =>
    condition.every((position) => positions.includes(position))
  );
};
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
      const isGameOver = checkWinningCondition(playerPositions);
      const nextPlayer = isGameOver ? player : oppositePlayer;
      return {
        player: nextPlayer,
        turns: state.turns + 1,
        positions,
        isGameOver,
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
          turns={this.state.turns}
        ></Status>
      </div>
    );
  }
}

export default Game;
