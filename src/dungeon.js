import React, { Component } from 'react';
import './dungeon.js';

class DungeonGrid extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        // generate board components
        let gridOfCells = this.props.board.map( (rowOfCells) => {
            return rowOfCells.map((cell) => {
                if(cell.x === this.props.heroPosition.x && cell.y === this.props.heroPosition.y) { cell.isHero = true }
                return <DungeonCell 
                            key={cell.x.toString() + "," + cell.y.toString()} 
                            cell={cell} 
                            toggleCell={this.props.toggleCell}
                        />
            })
        })

        return (
            <svg style={this.props.style}>
                {gridOfCells}   
            </svg>
        )
    }
}

class DungeonCell extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isAlive: this.props.cell.isAlive, 
            fill: this.props.cell.isAlive ? "#f00" : "#000" };
        this.toggle = this.toggle.bind(this);
    }    

    componentWillReceiveProps(nextProps) {
        if(nextProps.cell.isAlive !== this.state.isAlive) {
            this.setState({   
                    isAlive: nextProps.cell.isAlive, 
                    fill: nextProps.cell.isAlive ? "#f00" : "#000" 
                });
        }
    }
    
    toggle() {
        // toggle cell state
       this.props.toggleCell(this.props.cell);
   }

    render() {
        return (
            <rect 
                className="cell" 
                x={this.props.cell.x*10} 
                y={this.props.cell.y*10} 
                width={"10px"} 
                height={"10px"} 
                fill={this.props.cell.isHero ? "#FFF" : this.state.fill}
                stroke={"gold"}
                strokeWidth={"1px"}
                onClick={this.toggle}
            ></rect>
        )
    }
}

export default DungeonGrid;