import template from './template';

test('First character capitalized', () => {
  expect(template('cat')).toBe('Cat');
});

test('Character capitalized', () => {
  expect(template('dog')).toBe('Dog');
});
