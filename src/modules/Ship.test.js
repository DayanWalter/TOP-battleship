import Ship from './Ship';

let ship;

describe('Ship methods', () => {
  beforeEach(() => {
    ship = new Ship(1);
  });

  test('Ship records hits', () => {
    ship.hit();
    expect(ship.timesHit).toBe(1);
  });

  test('Ship is able to sink', () => {
    ship.hit();
    expect(ship.sank).toBe(true);
  });

  test('Ship is the correct type', () => {
    expect(ship.type).toBe('Patrol Boat');
  });
});
