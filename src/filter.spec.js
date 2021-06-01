const filter = require('./filter');
// const isUpperCase = require('../../src/onElement/isUpperCase');

describe('Filter', () => {
  it('Filter of [] and true should be []', () => {
    expect(filter([], () => true)).toEqual([]);
  });

  it('Filter of [1, 2, 3] and true should be [1, 2, 3]', () => {
    expect(filter([1, 2, 3],  true)).toEqual([1, 2, 3]);
  });

  it('Filter of [1, 2, 3] and false should be []', () => {
    expect(filter([1, 2, 3], false)).toEqual([]);
  });

  it('Filter of [1, 2, 3] and x > 1 should be [2, 3]', () => {
    expect(filter([1, 2, 3], x => x > 1)).toEqual([2, 3]);
  });

  it('Filter of ["a","B","c","D"] and filterUpperCase should be [B, D]', () => {
    expect(filter(['a', 'B', 'c', 'D'], "isUpperCase")).toEqual(['B', 'D']);
  });
});