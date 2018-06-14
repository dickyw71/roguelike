import React, { Component } from 'react';

class DungeonGrid extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        // generate board components
        let gridOfCells = this.props.board.map( (rowOfCells) => {
            return rowOfCells.map((cell) => {
                return <DungeonCell cell={cell}  />
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
    }    
    
    render() {
        return (
            <rect 
                x={this.props.cell.x*10} 
                y={this.props.cell.y*10} 
                width={"10px"} 
                height={"10px"} 
                fill="black">
            </rect>
        )
    }
}

export default DungeonGrid;