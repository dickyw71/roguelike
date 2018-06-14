import Cell from './cell.js';

export function generateEmpty(height, width) {

    let cellGrid = new Array(height || 5);
    for (let i = 0; i < (height || 5); i++) {
        cellGrid[i] = new Array(width || 5);
        for (let j = 0; j < (width || 5); j++) {
             cellGrid[i][j] = new Cell(j, i, false);
        }
     }
     return cellGrid;
 }