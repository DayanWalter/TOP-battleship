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

  attacks(x, y) {
    this.opponent.gameboard.receiveAttack(x, y);
  }

  randomAttack() {
    // generate random x
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const attack = this.opponent.gameboard.receiveAttack(x, y);
    console.log(x);
    return attack;
  }

  placeShip(x, y, length, orientiation) {
    if (orientiation === 'x') {
      this.gameboard.placeShipLeftToRight(x, y, length);
    }
    if (orientiation === 'y') {
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
