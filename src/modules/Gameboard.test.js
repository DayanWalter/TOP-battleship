import Gameboard from './Gameboard';

describe('Gameboard', () => {
  const gameBoard = new Gameboard();
  const ship = {
    length: 4,
    sank: false,
    timesHit: 1,
    type: 'Battleship',
  };

  gameBoard.placeShip(0, 0, 4);

  test('Test if placeShip places ship correctly', () => {
    expect(gameBoard.grid[0][0]).toEqual(ship);
    expect(gameBoard.grid[0][1]).toEqual(ship);
    expect(gameBoard.grid[0][2]).toHaveLength(4);
    expect(gameBoard.grid[0][3].type).toEqual('Battleship');
    expect(gameBoard.grid[0][4]).not.toEqual(ship);
  });

  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(3, 3);

  test('receiveAttack hit ship', () => {
    expect(gameBoard.grid[0][0]).toEqual(ship);
  });

  test('receiveAttack hit water', () => {
    expect(gameBoard.grid[3][3]).toBe('x');
  });

  gameBoard.placeShip(1, 1, 1);
  gameBoard.receiveAttack(1, 1);

  test('receiveAttack destroyed a ship', () => {
    expect(gameBoard.grid[1][1].sank).toBe(true);
  });
});
