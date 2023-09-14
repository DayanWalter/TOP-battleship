import Gameboard from './Gameboard';

class Player {
  constructor(name) {
    this.name = name;
  }

  enemy = null;

  gameboard = new Gameboard();

  setEnemy(enemy) {
    this.enemy = enemy;
  }

  attacks(x, y) {
    this.enemy.gameboard.receiveAttack(x, y);
  }

  placeShip(x, y, length) {
    this.gameboard.placeShip(x, y, length);
  }
}

export default Player;
