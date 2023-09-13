import Ship from './Ship';

class Gameboard {
  constructor() {}

  grid = this.createGrid();

  createGrid() {
    const array = new Array(2);
    for (let i = 0; i < 2; i++) {
      array[i] = new Array(2);
    }
    return array;
  }

  placeShip(x, y, length) {
    // place something in x and y
    const ship = new Ship(length);
    for (let i = 0; i < length; i++) {
      this.grid[x][y + i] = ship;
    }
  }

  receiveAttack() {}
}

export default Gameboard;
