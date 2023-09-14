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
  gameBoard.placeShip(1, 1, 1);

  test('Test if placeShip places ship correctly', () => {
    expect(gameBoard.grid[0][0]).toEqual(ship);
    expect(gameBoard.grid[0][1]).toEqual(ship);
    expect(gameBoard.grid[0][2]).toHaveLength(4);
    expect(gameBoard.grid[0][3].type).toEqual('Battleship');
    expect(gameBoard.grid[0][4]).not.toEqual(ship);
  });
  // ATTACK
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(1, 1);
  gameBoard.receiveAttack(2, 2);
  gameBoard.receiveAttack(2, 2);
  gameBoard.receiveAttack(3, 3);
  gameBoard.receiveAttack(4, 4);

  test('receiveAttack hit ship', () => {
    expect(gameBoard.grid[0][0]).toEqual(ship);
  });

  test('receiveAttack hit water', () => {
    expect(gameBoard.grid[3][3]).toBe('x');
  });

  test('receiveAttack hit water again', () => {
    expect(gameBoard.grid[4][4]).toBe('x');
  });

  test('receiveAttack destroyed a ship', () => {
    expect(gameBoard.grid[1][1].sank).toBe(true);
  });

  test('receiveAttack stores coords in a set', () => {
    expect(gameBoard.set.has('1,1')).toBe(true);
    expect(gameBoard.set.has('1,2')).toBe(false);
  });
});
