import Player from './Player';

const player1 = new Player('Player');
const player2 = new Player('Computer');

const ship = {
  length: 5,
  sank: false,
  timesHit: 0,
  type: 'Carrier',
  value: 1,
};
const hitShip = {
  length: 4,
  sank: false,
  timesHit: 2,
  type: 'Battleship',
};

player1.setOpponent(player2);
player2.setOpponent(player1);

describe('Player places ships', () => {
  beforeAll(() => {
    player1.placeShip(0, 0, 5, 'x');
    player2.placeShip(0, 0, 5, 'x');
  });

  test('player1', () => {
    expect(player1.gameboard.grid[0][0]).toEqual(ship);
  });

  test('player2', () => {
    expect(player2.gameboard.grid[0][0]).toEqual(ship);
  });
});

describe('Player attack', () => {
  beforeAll(() => {});

  test('player1 -> player2', () => {
    player2.placeShip(1, 1, 4, 'x');
    player1.attack(1, 1);
    player1.attack(1, 2);
    expect(player1.opponent.gameboard.grid[1][1]).toEqual('hit');
  });

  test('player2 -> player1', () => {
    player1.placeShip(1, 1, 4, 'x');
    player2.attack(1, 1);
    player2.attack(1, 2);
    expect(player2.opponent.gameboard.grid[1][1]).toEqual('hit');
  });
});
