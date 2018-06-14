import React, { Component } from 'react';

class DungeonGrid extends Component {


    render() {
        // generate board components
        let gridOfCells = this.props.board.map( (rowOfCells) => {
            return rowOfCells.map((cell) => {
                return <DungeonCell cell={cell} toggleCell={this.props.toggleCell}/>
            })
        })

        return (
            <div style={this.props.style}>
                {gridOfCells}   
            </div>
        )
    }
}

class DungeonCell extends Component {
    
    
    render() {
        <svg fill="black"></svg>
    }
}