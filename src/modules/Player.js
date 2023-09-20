import Gameboard from './Gameboard';

class Player {
  constructor(name) {
    this.name = name;
  }

  opponent = null;

  gameboard = new Gameboard();

  setOpponent(opponent) {
    this.opponent = opponent;
  }

  attack(x, y) {
    console.log(`${this.name} attacks ${x}, ${y}`);
    // Attack gameboard of computer
    this.opponent.gameboard.receiveAttack(x, y);

    // if attack was a hit...
    if (this.opponent.gameboard.hitShots.has(`${x},${y}`)) {
      console.log(`${this.name} hit at ${x},${y}`);
      // ...attack again
      console.log(this.opponent.gameboard.hitShots);
      return;
    }

    // if attack was a missedShot...
    if (this.opponent.gameboard.missedShots.has(`${x},${y}`)) {
      console.log(`${this.name} missed at ${x},${y}`);
      // ...computer attacks
      this.opponent.attackRandom();
    }
  }

  attackRandom() {
    // Generate random x and y
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    // if coords not in set...
    if (!this.opponent.gameboard.set.has(`${x},${y}`)) {
      // ...attack player
      console.log(`${this.name} attacks ${x}, ${y}`);
      this.opponent.gameboard.receiveAttack(x, y);
      // if hit...
      if (this.opponent.gameboard.hitShots.has(`${x},${y}`)) {
        console.log(`${this.name} hit at ${x},${y}`);

        // ...attack again

        this.attackRandom();
      }

      // if missed...
      if (this.opponent.gameboard.missedShots.has(`${x},${y}`)) {
        console.log(`${this.name} missed at ${x},${y}`);

        // ...players turn
        return;
      }
    }

    // if coords ARE in set
    if (this.opponent.gameboard.set.has(`${x},${y}`)) {
      // call attack recursivly and start over
      this.attackRandom();
    }
  }

  placeShip(x, y, length, orientation) {
    if (orientation === 'x') {
      this.gameboard.placeShipLeftToRight(x, y, length);
    }
    if (orientation === 'y') {
      this.gameboard.placeShipUpToDown(x, y, length);
    }
  }

  placeShipRandom(length) {
    const random = Math.floor(Math.random() * 2);

    if (random === 1) {
      const o = 'x';
      let x = 0;
      let y = 0;
      const { placedShips } = this.gameboard;
      while (true) {
        const temp = new Set();
        let nothingFound;
        let oneInSet;

        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * (10 - length));

        for (let i = 0; i < length; i += 1) {
          temp.add(`${x},${y + i}`);
        }

        for (const coords of temp) {
          if (placedShips.has(coords)) {
            nothingFound = false;
            oneInSet = true;
            temp.clear();
          } else {
            nothingFound = true;
          }
        }
        if (nothingFound && !oneInSet) {
          this.placeShip(x, y, length, o);
          temp.clear();
          break;
        }
      }
    } else if (random === 0) {
      const o = 'y';
      let x = 0;
      let y = 0;
      const { placedShips } = this.gameboard;
      while (true) {
        const temp = new Set();
        let nothingFound;
        let oneInSet;

        x = Math.floor(Math.random() * (10 - length));
        y = Math.floor(Math.random() * 10);

        for (let i = 0; i < length; i += 1) {
          temp.add(`${x + i},${y}`);
        }

        for (const coords of temp) {
          if (placedShips.has(coords)) {
            nothingFound = false;
            oneInSet = true;
            temp.clear();
          } else {
            nothingFound = true;
          }
        }
        if (nothingFound && !oneInSet) {
          this.placeShip(x, y, length, o);
          temp.clear();
          break;
        }
      }
    }
  }
}

export default Player;
