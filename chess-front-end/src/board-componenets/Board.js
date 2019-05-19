import React from 'react';
import ReactDOM from 'react-dom';
import {Tile} from './tile.js';
import '../index.css';

import King from '../pieces/king';
import Queen from '../pieces/queen';
import Rook from '../pieces/rook';
import Bishop from '../pieces/bishop';
import Knight from '../pieces/knight';
import Pawn from '../pieces/pawn';

export class Board extends React.Component {
    renderTile(){
        return(<Tile /> );
    }

    render(){
        return (
            <div>
              <div className="board-row">
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
              </div>
              <div className="board-row">
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
              </div>
              <div className="board-row">
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
              </div>
              <div className="board-row">
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
              </div>
              <div className="board-row">
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
              </div>
              <div className="board-row">
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
              </div>
              <div className="board-row">
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
                {this.renderTile()}
              </div>
            </div>
          );
    }
}

function initializeBoard() {
  const rows = Array(8).fill(null);
  for(let i = 0; i < 8; i++) {
    rows[i] = Array(8).fill(null);
  }

  for(let i = 0; i < 8; i++){
    rows[1][i] = new Pawn(1);
    rows[6][i] = new Pawn(2);
  }

  rows[0][0] = new Rook(1);
  rows[0][7] = new Rook(1);
  rows[7][0] = new Rook(2);
  rows[7][7] = new Rook(2);

  rows[0][1] = new Knight(1);
  rows[0][6] = new Knight(1);
  rows[7][1] = new Knight(2);
  rows[7][6] = new Knight(2);

  rows[0][2] = new Bishop(1);
  rows[0][5] = new Bishop(1);
  rows[7][2] = new Bishop(2);
  rows[7][5] = new Bishop(2);

  rows[0][3] = new Queen(1);
  rows[7][3] = new Queen(2);

  rows[0][4] = new King(1);
  rows[7][4] = new King(2);

  return rows;
}

