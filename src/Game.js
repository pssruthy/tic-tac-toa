import React from 'react';
import Board from './Board.js';
import Status from './Status.js';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinningCondition = (positions, symbol) => {
  return winningCombinations.some((condition) =>
    condition.every((position) => positions[position] === symbol)
  );
};

const getGameStatus = (positions, symbol, turns) => {
  if (checkWinningCondition(positions, symbol)) return 'won';
  if (turns === 9) return 'draw';
  return 'playing';
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'playing',
      player: 1,
      turns: 0,
      positions: Array.from(new Array(9), () => ''),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = e.target.id;
    const symbols = { 1: 'X', 2: 'O' };
    const playerSymbol = symbols[this.state.player];
    const oppositePlayer = (this.state.player % 2) + 1;

    const positions = this.state.positions.slice();
    positions[id] = symbols[this.state.player];

    const turns = this.state.turns + 1;
    const status = getGameStatus(positions, playerSymbol, turns);
    const player = status !== 'playing' ? this.state.player : oppositePlayer;

    return this.setState({ status, player, turns, positions });
  }

  render() {
    if (this.state.status === 'playing')
      return (
        <div>
          <Status
            status={this.state.status}
            player={this.state.player}
            turns={this.state.turns}
          ></Status>
          <Board
            onClick={this.handleClick}
            positions={this.state.positions}
          ></Board>
        </div>
      );
    return (
      <div className="game">
        <Status status={this.state.status} player={this.state.player}></Status>
      </div>
    );
  }
}

export default Game;
