import Player from './Player';

const player1 = new Player('Pete');
const player2 = new Player('Computer');
const ship = {
  length: 5,
  sank: false,
  timesHit: 0,
  type: 'Carrier',
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
    player1.placeShip(0, 0, 5);
    player2.placeShip(0, 0, 5);
  });

  test('player1', () => {
    expect(player1.gameboard.grid[0][0]).toEqual(ship);
  });

  test('player2', () => {
    expect(player2.gameboard.grid[0][0]).toEqual(ship);
  });
});

describe('Player attacks', () => {
  beforeAll(() => {
    player2.placeShip(1, 1, 4);
    player1.attacks(1, 1);
    player1.attacks(1, 2);
    player1.placeShip(1, 1, 4);
    player2.attacks(1, 1);
    player2.attacks(1, 2);
  });

  test('player1 -> player2', () => {
    expect(player1.opponent.gameboard.grid[1][1]).toEqual(hitShip);
  });

  test('player2 -> player1', () => {
    expect(player2.opponent.gameboard.grid[1][1]).toEqual(hitShip);
  });
});
