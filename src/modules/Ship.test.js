import Ship from './Ship';

const ship = new Ship(1);

describe('Ship methods', () => {
  ship.hit();
  test('Ship records hits', () => {
    expect(ship.timesHit).toBe(1);
  });
  test('Ship is able to sink', () => {
    expect(ship.sank).toBe(true);
  });
  test('Ship is the correct type', () => {
    expect(ship.type).toBe('Patrol Boat');
  });
});
