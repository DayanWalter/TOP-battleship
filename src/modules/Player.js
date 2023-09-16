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
    this.opponent.gameboard.receiveAttack(x, y);
  }

  attackRandom() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const attack = this.opponent.gameboard.receiveAttack(x, y);
    console.log(x);
    return attack;
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
    const choices = ['x', 'y'];
    const orientation = choices[Math.floor(Math.random() * choices.length)];
    console.log(orientation);
    if (orientation === 'x') {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      this.gameboard.placeShipLeftToRight(x, y, length);
    }
    if (orientation === 'y') {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
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
