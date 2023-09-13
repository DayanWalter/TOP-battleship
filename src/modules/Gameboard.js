import Ship from './Ship';

class Gameboard {
  grid = Gameboard.createGrid();

  static createGrid() {
    const array = new Array(1);
    for (let i = 0; i < 5; i++) {
      array[i] = new Array(5);
    }
    return array;
  }

  placeShip(x, y, length) {
    const ship = new Ship(length);
    ship.shipType();

    for (let i = 0; i < length; i++) {
      this.grid[x][y + i] = ship;
    }
  }

  receiveAttack(x, y) {
    let target = this.grid[x][y];
    if (target === undefined) {
      console.log(`Hit water at x:${x}, y:${y}.`);
      target = 'x';
      return;
    }

    if (target.sank === true) {
      console.log(`Ship at x:${x}, y:${y} already sank.`);
      return;
    }

    if (target !== undefined) {
      target.hit();
      console.log(`Hit ${target.type} at x:${x}, y:${y}!`);
    }
  }
}

export default Gameboard;
