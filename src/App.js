import React, { Component } from 'react';
import logo from './logo.svg';
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
    let _translate = "translate(" + this.state.countX + " " + this.state.countY + ")"; 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="GameContainer">
          <svg className="hero" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <g>
              <text fill="white" transform={_translate}>@</text>
            </g>
          </svg>  
        </div>
      </div>
    );
  }
}

export default App;
