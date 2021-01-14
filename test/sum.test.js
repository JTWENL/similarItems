const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});

test('add5 to 3 to equal 8', () => {
  expect(sum.add5(3)).toBe(8);
})



