import React from 'react';
import ReactDOM from 'react-dom';
import {Tile} from './Tile.js';
import '../CSS/Board.css';

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

