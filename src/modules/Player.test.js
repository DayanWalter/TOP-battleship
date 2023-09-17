import Player from './Player';

const player1 = new Player('Player');
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
    expect(player1.opponent.gameboard.grid[1][1]).toEqual(hitShip);
  });

  test('player2 -> player1', () => {
    player1.placeShip(1, 1, 4, 'x');
    player2.attack(1, 1);
    player2.attack(1, 2);
    expect(player2.opponent.gameboard.grid[1][1]).toEqual(hitShip);
  });
});

// player1.attack(2, 5);
// player1.attack(0, 0);

// player1.attack(0, 1);
// player1.attack(0, 2);
// player1.attack(0, 3);
// player1.attack(0, 4);
// player1.attack(0, 5);
// player1.attack(0, 6);
// player1.attack(0, 7);
// player1.attack(0, 8);
// player1.attack(0, 9);

// player1.attack(1, 0);
// player1.attack(1, 1);
// player1.attack(1, 2);
// player1.attack(1, 3);
// player1.attack(1, 4);
// player1.attack(1, 5);
// player1.attack(1, 6);
// player1.attack(1, 7);
// player1.attack(1, 8);
// player1.attack(1, 9);

// player1.attack(2, 0);
// player1.attack(2, 1);
// player1.attack(2, 2);
// player1.attack(2, 3);
// player1.attack(2, 4);
// player1.attack(2, 5);
// player1.attack(2, 6);
// player1.attack(2, 7);
// player1.attack(2, 8);
// player1.attack(2, 9);

// player1.attack(3, 0);
// player1.attack(3, 1);
// player1.attack(3, 2);
// player1.attack(3, 3);
// player1.attack(3, 4);
// player1.attack(3, 5);
// player1.attack(3, 6);
// player1.attack(3, 7);
// player1.attack(3, 8);
// player1.attack(3, 9);

// player1.attack(4, 0);
// player1.attack(4, 1);
// player1.attack(4, 2);
// player1.attack(4, 3);
// player1.attack(4, 4);
// player1.attack(4, 5);
// player1.attack(4, 6);
// player1.attack(4, 7);
// player1.attack(4, 8);
// player1.attack(4, 9);

// player1.attack(5, 0);
// player1.attack(5, 1);
// player1.attack(5, 2);
// player1.attack(5, 3);
// player1.attack(5, 4);
// player1.attack(5, 5);
// player1.attack(5, 6);
// player1.attack(5, 7);
// player1.attack(5, 8);
// player1.attack(5, 9);

// player1.attack(6, 0);
// player1.attack(6, 1);
// player1.attack(6, 2);
// player1.attack(6, 3);
// player1.attack(6, 4);
// player1.attack(6, 5);
// player1.attack(6, 6);
// player1.attack(6, 7);
// player1.attack(6, 8);
// player1.attack(6, 9);

// player1.attack(7, 0);
// player1.attack(7, 1);
// player1.attack(7, 2);
// player1.attack(7, 3);
// player1.attack(7, 4);
// player1.attack(7, 5);
// player1.attack(7, 6);
// player1.attack(7, 7);
// player1.attack(7, 8);
// player1.attack(7, 9);

// player1.attack(8, 0);
// player1.attack(8, 1);
// player1.attack(8, 2);
// player1.attack(8, 3);
// player1.attack(8, 4);
// player1.attack(8, 5);
// player1.attack(8, 6);
// player1.attack(8, 7);
// player1.attack(8, 8);
// player1.attack(8, 9);

// player1.attack(9, 0);
// player1.attack(9, 1);
// player1.attack(9, 2);
// player1.attack(9, 3);
// player1.attack(9, 4);
// player1.attack(9, 5);
// player1.attack(9, 6);
// player1.attack(9, 7);
// player1.attack(9, 8);
// player1.attack(9, 9);
