import Gameboard from './Gameboard';

const gameBoard = new Gameboard();
const ship = {
  length: 5,
  sank: false,
  timesHit: 0,
  type: 'Carrier',
  value: 1,
};
describe('placeShip', () => {
  gameBoard.placeShipUpToDown(5, 9, 5);

  test('works correctly - left to right', () => {
    gameBoard.placeShipLeftToRight(0, 0, 5);

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
  test('Hit ship', () => {
    gameBoard.placeShipLeftToRight(0, 0, 5);
    gameBoard.receiveAttack(0, 0);
    expect(gameBoard.grid[0][0]).toEqual('hit');
  });

  test('Hit water', () => {
    gameBoard.receiveAttack(3, 3);
    expect(gameBoard.grid[3][3]).toBe('missed');
  });

  test('Stores coords in a set', () => {
    gameBoard.receiveAttack(2, 2);
    expect(gameBoard.set.has('2,2')).toBe(true);
    expect(gameBoard.set.has('1,2')).toBe(false);
  });

  test('Stores coords in missedShots', () => {
    gameBoard.receiveAttack(5, 3);
    expect(gameBoard.missedShots.has('5,3')).toBe(true);
    expect(gameBoard.missedShots.has('5,4')).toBe(false);
  });

  test('Stores coords in hitShots', () => {
    gameBoard.placeShipLeftToRight(3, 2, 1);
    gameBoard.receiveAttack(3, 2);
    expect(gameBoard.hitShots.has('3,2')).toBe(true);
  });
});
describe('checkGameover', () => {
  test('Returns true, if all ships are sunk', () => {
    expect(gameBoard.checkGameover()).toBe(false);
  });
});
