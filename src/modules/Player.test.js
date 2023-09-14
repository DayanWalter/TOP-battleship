import Gameboard from './Gameboard';
import Player from './Player';

const player1 = new Player('Pete');
const player2 = new Player('Computer');

const ship = {
  length: 5,
  sank: false,
  timesHit: 0,
  type: 'Carrier',
};

player1.setEnemy(player2);
player2.setEnemy(player1);

player1.placeShip(0, 0, 5);

describe('Player', () => {
  test('player1 places ship', () => {
    expect(player1.gameboard.grid[0][0]).toEqual(ship);
  });

  player2.placeShip(0, 0, 5);

  test('player2 places ship', () => {
    expect(player2.gameboard.grid[0][0]).toEqual({
      length: 5,
      sank: false,
      timesHit: 1,
      type: 'Carrier',
    });
  });

  player1.attacks(0, 0);
  //   player1.attacks(0, 2);

  test('player1 attacks gameboard of player2', () => {
    expect(player1.enemy.gameboard.grid[0][0]).toEqual({
      length: 5,
      sank: false,
      timesHit: 1,
      type: 'Carrier',
    });
  });

  //   console.log(player1.enemy);

  //   console.log(player1.gameboard);
});
