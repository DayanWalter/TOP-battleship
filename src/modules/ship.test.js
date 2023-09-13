import Ship from './Ship';

test('First character capitalized', () => {
  expect(Ship('cat')).toBe('Cat');
});
