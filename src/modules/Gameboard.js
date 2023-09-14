import Ship from './Ship';

class Gameboard {
  grid = Gameboard.createGrid();

  set = new Set();

  missedShots = new Set();

  hitShots = new Set();

  static createGrid() {
    const array = new Array(1);
    for (let i = 0; i < 10; i += 1) {
      array[i] = new Array(10);
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
    const coords = `${x},${y}`;

    // Field is already shot at
    if (this.set.has(coords)) {
      // console.log(`Coords at x:${x}, y:${y} are already shot at.`);

      // same player again
      return;
    }

    // Field is empty/water
    if (target === undefined) {
      this.set.add(coords);
      this.missedShots.add(coords);

      // console.log(`Hit water at x:${x}, y:${y}.`);

      this.grid[x][y] = 'x';

      // next player
      return;
    }

    // Field is a ship
    if (target !== undefined) {
      // console.log(`Hit ${target.type} at x:${x}, y:${y}!`);

      this.set.add(coords);
      this.hitShots.add(coords);

      target.hit();

      // same player again
    }

    // console.log(`OOPS SOMETHING ESCAPED - Coords at x:${x}, y:${y}`);
  }

  checkGameover() {
    // check every round?
    if (this.hitShots.size >= 30) {
      // the other player won
      return true;
    }
    return false;
  }
}

export default Gameboard;
