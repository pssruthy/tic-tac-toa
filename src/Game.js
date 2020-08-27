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

const isWon = (positions, symbol) => {
  return winningCombinations.some((condition) =>
    condition.every((position) => positions[position] === symbol)
  );
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: { name: 'Sruthy', symbol: 'X' },
      nextPlayer: { name: 'Ridhu', symbol: 'O' },
      tilesStatus: Array.from(new Array(9), () => ''),
      isDrawn: false,
      winner: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    return this.setState((state) => {
      const { currentPlayer, nextPlayer, tilesStatus } = state;
      const newTilesStatus = tilesStatus.slice();

      newTilesStatus[id] = currentPlayer.symbol;
      const isPlayerWon = isWon(newTilesStatus, currentPlayer.symbol);
      const winner = isPlayerWon ? currentPlayer.name : null;
      const isDrawn = !newTilesStatus.includes('');
      return {
        currentPlayer: nextPlayer,
        nextPlayer: currentPlayer,
        tilesStatus: newTilesStatus,
        isDrawn,
        winner,
      };
    });
  }

  render() {
    if (!this.state.winner && !this.state.isDrawn)
      return (
        <div>
          <Status
            player={this.state.currentPlayer.name}
            winner={this.state.winner}
            isDrawn={this.state.isDrawn}
          ></Status>
          <Board
            onClick={this.handleClick}
            tilesStatus={this.state.tilesStatus}
          ></Board>
        </div>
      );
    return (
      <div className="game">
        <Status
          player={this.state.currentPlayer.name}
          winner={this.state.winner}
          isDrawn={this.state.isDrawn}
        />
      </div>
    );
  }
}

export default Game;
