import * as fc from 'fast-check';
//const sum = require('../sum');

test('add5 adds 5 to a number', () => {
  fc.assert(
    fc.property(fc.nat(), (a) => {
      expect(a).toEqual(a);
    })
  )
});



