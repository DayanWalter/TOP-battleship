import Ship from './ship';

test('First character capitalized', () => {
  expect(Ship('cat')).toBe('Cat');
});
