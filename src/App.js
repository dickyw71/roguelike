import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countX: 90,
      countY: 55     
    }

    this._heroDirection = this._heroDirection.bind(this);
  }

  componentDidMount() { 
    window.addEventListener("keydown", this._heroDirection, false);
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
        <svg className="MessagesContainer" xmlns="http://www.w3.org/2000/svg" width="300" height="100" viewBox="0 0 300 100" role="presentation">
          <g>
            <text className="Messages" fill="black" transform={_translateMessages} fontSize="35">Messages will go here.</text>
          </g>
        </svg>
        <svg className="MapContainer" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300" role="presentation">
          <g>
            <text className="Hero" fill="white" transform={_translateHero}>@</text>
          </g>
        </svg>  
        <svg className="StatusContainer" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300" role="presentation">
          <g>
            <text className="Status" fill="white">XP Health</text>
          </g>
        </svg>  
      </div>
    );
  }
}

export default App;
