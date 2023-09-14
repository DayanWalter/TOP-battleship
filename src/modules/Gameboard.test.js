import Gameboard from './Gameboard';

describe('Gameboard', () => {
  const gameBoard = new Gameboard();
  const ship = {
    length: 5,
    sank: false,
    timesHit: 1,
    type: 'Carrier',
  };
  // Place Ships
  gameBoard.placeShip(0, 0, 5);
  gameBoard.placeShip(1, 0, 4);
  gameBoard.placeShip(2, 0, 4);
  gameBoard.placeShip(3, 0, 3);
  gameBoard.placeShip(4, 0, 3);
  gameBoard.placeShip(5, 0, 3);
  gameBoard.placeShip(6, 0, 2);
  gameBoard.placeShip(7, 0, 2);
  gameBoard.placeShip(8, 0, 2);
  gameBoard.placeShip(9, 0, 1);
  gameBoard.placeShip(9, 1, 1);

  test('Test if placeShip places ship correctly', () => {
    expect(gameBoard.grid[0][0]).toEqual(ship);
    expect(gameBoard.grid[0][1]).toEqual(ship);
    expect(gameBoard.grid[0][2]).toHaveLength(5);
    expect(gameBoard.grid[0][3].type).toEqual('Carrier');
    expect(gameBoard.grid[0][5]).not.toEqual(ship);
  });
  // ATTACK
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(9, 0);
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

  test('receiveAttack destroyed a ship', () => {
    expect(gameBoard.grid[9][0].sank).toBe(true);
  });

  test('receiveAttack stores coords correctly in a set', () => {
    expect(gameBoard.set.has('9,0')).toBe(true);
    expect(gameBoard.set.has('1,2')).toBe(false);
  });

  test('receiveAttack stores coords in missedShots', () => {
    expect(gameBoard.missedShots.has('3,3')).toBe(true);
  });

  test('receiveAttack stores coords in hitShots', () => {
    expect(gameBoard.hitShots.has('0,0')).toBe(true);
  });

  test('checkGameover returns true, if all ships are sunk', () => {
    expect(gameBoard.checkGameover()).toBe(false);
  });
});
