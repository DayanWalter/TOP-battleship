import Gameboard from './Gameboard';

describe('Gameboard', () => {
  const gameBoard = new Gameboard();

  test('Test if placeShip is a function', () => {
    expect(typeof gameBoard.placeShip).toBe('function');
  });

  test('Test if placeShip returns a log', () => {
    expect(gameBoard.placeShip(0, 0, 4)).toBe(console.log());
  });
});
