import Ship from './Ship';

class Gameboard {
  grid = Gameboard.createGrid();

  set = new Set();

  missedShots = new Set();

  hitShots = new Set();

  static createGrid() {
    const grid = [];
    for (let i = 0; i < 10; i += 1) {
      grid[i] = [];
      for (let j = 0; j < 10; j += 1) {
        grid[i][j] = [];
      }
    }
    // console.log(grid);
    return grid;

    // const array = new Array(1);
    // for (let i = 0; i < 10; i += 1) {
    //   array[i] = new Array(10);
    // }
    // console.log(array);
    // return array;
  }

  placeShipLeftToRight(x, y, length) {
    const ship = new Ship(length);

    // place ship horizontally from left to right
    for (let i = 0; i < length; i += 1) {
      this.grid[x][y + i] = ship;
    }
  }

  placeShipUpToDown(x, y, length) {
    const ship = new Ship(length);

    // place ship vertically from up to down
    for (let i = 0; i < length; i += 1) {
      this.grid[x + i][y] = ship;
    }
  }

  receiveAttack(x, y) {
    const target = this.grid[x][y];
    // console.log(
    //   typeof target === 'object' && !Array.isArray(target) && target !== null
    // );
    // console.log(target.length);
    const coords = `${x},${y}`;

    // Field is a ship
    if (
      typeof target === 'object' &&
      !Array.isArray(target) &&
      target !== null
    ) {
      this.set.add(coords);
      this.hitShots.add(coords);
      // console.log(target);
      target.hit();
      this.grid[x][y] = 'hit';
    }

    // Field is empty/water
    if (target.length === 0) {
      this.set.add(coords);
      this.missedShots.add(coords);

      this.grid[x][y] = 'missed';

      return;
    }

    if (target === 'missed' || target === 'hit') {
      console.log('ALREADY SHOT AT X!!!');
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
