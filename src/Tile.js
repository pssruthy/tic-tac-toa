import React from 'react';
import './game.css';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { symbol: '', available: true };
    this.symbols = { 1: 'X', 2: 'O' };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    if (!this.state.available) return;
    await this.setState(() => ({
      symbol: this.symbols[this.props.player],
      available: false,
    }));
    const { onClick, id, player } = this.props;
    onClick(id, player);
  }

  render() {
    return (
      <div
        className={`tile ${this.state.symbol === '' ? 'empty' : ''}`}
        id={this.props.id}
        onClick={this.handleClick}
      >
        {this.state.symbol}
      </div>
    );
  }
}

export default Tile;
