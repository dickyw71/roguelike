class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isAlive = false;
        this.isHero = false;
        this.isWall = false;
        this.isWeapon = false;
        this.isEnemy = false;
    }  
}

export default Cell;