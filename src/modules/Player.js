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
    // // const random = Math.floor(Math.random() * 2);
    const random = 1;
    if (random === 1) {
      // do{
      let x = 0;
      let y = 0;
      const first = new Set();
      const second = new Set();
      // second.add(`${x},${y}`);
      second.add(`0,5`);
      second.add(`0,6`);
      second.add(`0,7`);
      second.add(`0,8`);
      second.add(`0,9`);

      console.log(
        '🚀 ~ file: Player.js:93 ~ Player ~ placeShipRandom ~ second:',
        second
      );
      // const start = Date.now();
      do {
        x = Math.floor(Math.random() * 10);
        console.log(
          '🚀 ~ file: Player.js:107 ~ Player ~ placeShipRandom ~ x:',
          x
        );
        y = Math.floor(Math.random() * (10 - length));
        console.log(
          '🚀 ~ file: Player.js:110 ~ Player ~ placeShipRandom ~ y:',
          y
        );
        if (!second.has(`${x},${y}`)) {
          first.add(`${x},${y}`);
        }
        console.log(
          '🚀 ~ file: Player.js:92 ~ Player ~ placeShipRandom ~ first:',
          first
        );
      } while (first.size !== length);
      // const end = Date.now();
      // const result = end - start;
      // console.log(
      //   '🚀 ~ file: Player.js:123 ~ Player ~ placeShipRandom ~ result:',
      //   result
      // );

      // ![...first].every((value) => second.has(value)
      // generate x and y
      // }while(
      // check if x and y + length !== in placeShip, )
      // if they are NOT: placeShip
      // ELSE
      // generate new x and y + length and check again...
      // generate and check as long as the result is NOT in placeship
      // const o = 'x';
      // const x = Math.floor(Math.random() * 10);
      // const x = 6;
      // const y = Math.floor(Math.random() * (10 - length));
      // const y = 0;
      // if x and y + length !== in placeShip, placeShip
      // for (let i = 0; i < length; i += 1) {
      //   this.gameboard.placedShips.add(`${x},${y + i}`);
      //   console.log(this.gameboard.placedShips);
      // if ()) {
      // }
      // }
      // this.placeShip(x, y, length, o);
      // } else if (random === 0) {
      //   const o = 'y';
      //   const x = Math.floor(Math.random() * (10 - length));
      //   const y = Math.floor(Math.random() * 10);
      //   this.placeShip(x, y, length, o);
    }
  }

  placeStatic() {
    // this.placeShip(0, 0, 5, 'x');
    this.placeShip(1, 0, 4, 'x');
    // this.placeShip(2, 0, 4, 'x');
    // this.placeShip(3, 0, 3, 'x');
    // this.placeShip(4, 0, 3, 'x');
    // this.placeShip(5, 0, 3, 'x');
    // this.placeShip(6, 0, 2, 'x');
    // this.placeShip(7, 0, 2, 'x');
    // this.placeShip(8, 0, 2, 'x');
    // this.placeShip(9, 0, 1, 'x');
    // this.placeShip(9, 2, 1, 'x');
  }

  placeStaticRandom() {
    this.placeShip(0, 5, 5, 'x');
    // this.placeShip(1, 5, 4, 'x');
    // this.placeShip(2, 5, 4, 'x');
    // this.placeShip(3, 5, 3, 'x');
    // this.placeShip(4, 5, 3, 'x');
    // this.placeShip(5, 5, 3, 'x');
    // this.placeShip(6, 5, 2, 'x');
    // this.placeShip(7, 5, 2, 'x');
    // this.placeShip(8, 5, 2, 'x');
    // this.placeShip(9, 5, 1, 'x');
    // this.placeShip(9, 7, 1, 'x');
  }
}

export default Player;
