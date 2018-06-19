import React, { Component } from 'react';
import './App.css';
import * as Board from './board.js'; 
import DungeonGrid from './dungeon.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.gridWidth = 40;
    this.gridHeight = 40;
    this.state = {
      countX: 90,
      countY: 55,
      board: Board.generateEmpty(this.gridWidth, this.gridHeight)     
    }

    this._heroDirection = this._heroDirection.bind(this);
    this.toggleCell = this.toggleCell.bind(this);
    this.logBoardState = this.logBoardState.bind(this);
  }

  componentDidMount() { 
    window.addEventListener("keydown", this._heroDirection, false);
  }

  toggleCell(cell) {
    // find cell in board and update
    let delta = this.state.board;
    delta[cell.y][cell.x].isAlive ? delta[cell.y][cell.x].isAlive = false : delta[cell.y][cell.x].isAlive = true;
    this.setState({ board: delta});
  }

  logBoardState() {
    console.log(this.state.board);
  }

  _heroDirection(e) {
    let currentCountX = this.state.countX, 
      currentCountY = this.state.countY,
      amt = 5;

    if(e.keyCode === 37) {   //  left arrow
      currentCountX -= amt;
    }
    if(e.keyCode === 39) {  //   right arrow
      currentCountX += amt; 
    }
    if(e.keyCode === 38) {  //   up arrow
      currentCountY -= amt;
    }
    if(e.keyCode === 40) {   //  down arrow
      currentCountY += amt;
    }

    this.setState({
      countX: currentCountX,
      countY: currentCountY
    })
  }

  render() {
    let _translateMessages = "translate(" + 0 + " " + 40 + ")";
    let _translateHero = "translate(" + this.state.countX + " " + this.state.countY + ")"; 
    return (
      <div className="GameContainer">
        <button onClick={this.logBoardState}>Capture board</button>
        {/* <svg className="MessagesContainer" xmlns="http://www.w3.org/2000/svg" role="presentation">
          <g>
            <text className="Messages" fill="black" transform={_translateMessages}>Messages will go here.</text>
          </g>
        </svg> */}
        <svg className="MapContainer" xmlns="http://www.w3.org/2000/svg" role="presentation">
          <g>
            <text className="Hero" fill="pink" transform={_translateHero}>@</text>
            <DungeonGrid board={this.state.board} toggleCell={this.toggleCell} />
          </g>
        </svg>  
        <svg className="StatusContainer" xmlns="http://www.w3.org/2000/svg" role="presentation">
          <g>
            <text className="Status" fill="white">XP Health</text>
          </g>
        </svg>  
      </div>
    );
  }
}

export default App;
