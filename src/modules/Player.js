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

  // HERE!
  attack(x, y) {
    console.log(`${this.name} attacks ${x}, ${y}`);
    // ...attack gameboard of computer
    this.opponent.gameboard.receiveAttack(x, y);

    // if attack was a hit...
    if (this.opponent.gameboard.hitShots.has(`${x},${y}`)) {
      console.log(`${this.name} hit at ${x},${y}`);
      // attack again
      return;
    }

    // if attack was a missedShot
    if (this.opponent.gameboard.missedShots.has(`${x},${y}`)) {
      console.log(`${this.name} missed at ${x},${y}`);
      // computer attacks
      this.opponent.attackRandom();
    }
  }

  attackRandom() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    if (!this.opponent.gameboard.set.has(`${x},${y}`)) {
      console.log(`Coords: ${x},${y} ARE NOT in Set`);
      // attack player
      this.opponent.gameboard.receiveAttack(x, y);
      // if hit, attack again
      if (this.opponent.gameboard.hitShots.has(`${x},${y}`)) {
        console.log(`${this.name} hit at ${x},${y}`);
        // attack again
        this.opponent.attackRandom();
      }

      // if attack was a missedShot
      if (this.opponent.gameboard.missedShots.has(`${x},${y}`)) {
        console.log(`${this.name} missed at ${x},${y}`);
        // players turn
        return;
      }
    }

    console.log(`Computer attacks randomly: ${x}, ${y}`);
    if (this.opponent.gameboard.set.has(`${x},${y}`)) {
      console.log(`Coords: ${x},${y} ARE in Set`);
      this.attackRandom();
    }

    // player1 attack
  }

  // if (this.opponent.gameboard.set.has(`${x},${y}`)) {
  //   const x = Math.floor(Math.random() * 10);
  //   const y = Math.floor(Math.random() * 10);
  //   this.opponent.gameboard.receiveAttack(x, y);
  //   // next player
  // }
  // attack again

  placeShip(x, y, length, orientation) {
    if (orientation === 'x') {
      this.gameboard.placeShipLeftToRight(x, y, length);
    }
    if (orientation === 'y') {
      this.gameboard.placeShipUpToDown(x, y, length);
    }
  }

  // LOOK INTO
  placeShipRandom(length) {
    const choices = ['x', 'y'];
    const random = Math.floor(Math.random());
    const orientation = choices[random * choices.length];
    console.log(orientation);
    if (orientation === 'x') {
      const x = random * 10;
      const y = random * 10;
      this.gameboard.placeShipLeftToRight(x, y, length);
    }
    if (orientation === 'y') {
      const x = random * 10;
      const y = random * 10;
      this.gameboard.placeShipUpToDown(x, y, length);
    }
  }

  // getComputerChoice(){
  //   const choice = ["Rock", "Paper", "Scissors"];
  //   const random = Math.floor(Math.random() * choice.length);

  //   return choice[random];
  // };
}

export default Player;
