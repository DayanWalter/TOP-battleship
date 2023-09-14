import Ship from './Ship';

class Gameboard {
  grid = Gameboard.createGrid();

  static createGrid() {
    const array = new Array(1);
    for (let i = 0; i < 5; i += 1) {
      array[i] = new Array(5);
    }
    return array;
  }

  placeShip(x, y, length) {
    const ship = new Ship(length);
    ship.shipType();

    // place ship horizontally from left to right
    for (let i = 0; i < length; i += 1) {
      this.grid[x][y + i] = ship;
    }
  }

  receiveAttack(x, y) {
    const target = this.grid[x][y];

    if (target === undefined) {
      console.log(`Hit water at x:${x}, y:${y}.`);
      this.grid[x][y] = 'x';
      return;
    }

    if (target.sank === true) {
      console.log(`Ship at x:${x}, y:${y} already sank.`);
      return;
    }

    if (target !== undefined) {
      console.log(`Hit ${target.type} at x:${x}, y:${y}!`);

      target.hit();
    }
  }
}

export default Gameboard;
