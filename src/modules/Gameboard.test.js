import Gameboard from './Gameboard';

const gameBoard = new Gameboard();
const ship = {
  length: 5,
  sank: false,
  timesHit: 1,
  type: 'Carrier',
};
describe('placeShip', () => {
  gameBoard.placeShipLeftToRight(0, 0, 5);
  gameBoard.placeShipLeftToRight(1, 0, 4);
  gameBoard.placeShipLeftToRight(2, 0, 4);
  gameBoard.placeShipLeftToRight(3, 0, 3);
  gameBoard.placeShipLeftToRight(4, 0, 3);
  gameBoard.placeShipLeftToRight(5, 0, 3);
  gameBoard.placeShipLeftToRight(6, 0, 2);
  gameBoard.placeShipLeftToRight(7, 0, 2);
  gameBoard.placeShipLeftToRight(8, 0, 2);
  gameBoard.placeShipLeftToRight(9, 0, 1);
  gameBoard.placeShipLeftToRight(9, 1, 1);

  gameBoard.placeShipUpToDown(5, 9, 5);

  test('works correctly - left to right', () => {
    expect(gameBoard.grid[0][0]).toEqual(ship);
    expect(gameBoard.grid[0][1]).toEqual(ship);
    expect(gameBoard.grid[0][2]).toHaveLength(5);
    expect(gameBoard.grid[0][3].type).toEqual('Carrier');
    expect(gameBoard.grid[0][5]).not.toEqual(ship);
  });

  test('Up to down', () => {
    expect(gameBoard.grid[5][9]).toEqual(ship);
  });
});
describe('receiveAttack', () => {
  gameBoard.receiveAttack(0, 0);
  gameBoard.receiveAttack(9, 0);
  gameBoard.receiveAttack(2, 2);
  gameBoard.receiveAttack(2, 2);
  gameBoard.receiveAttack(3, 3);
  gameBoard.receiveAttack(5, 9);

  test('Hit ship', () => {
    expect(gameBoard.grid[0][0]).toEqual(ship);
  });

  test('Hit water', () => {
    expect(gameBoard.grid[3][3]).toBe('x');
  });

  test('Destroyed a ship', () => {
    expect(gameBoard.grid[9][0].sank).toBe(true);
  });

  test('Stores coords in a set', () => {
    expect(gameBoard.set.has('9,0')).toBe(true);
    expect(gameBoard.set.has('1,2')).toBe(false);
  });

  test('Stores coords in missedShots', () => {
    expect(gameBoard.missedShots.has('3,3')).toBe(true);
  });

  test('Stores coords in hitShots', () => {
    expect(gameBoard.hitShots.has('0,0')).toBe(true);
  });
});
describe('checkGameover', () => {
  test('Returns true, if all ships are sunk', () => {
    expect(gameBoard.checkGameover()).toBe(false);
  });
});
