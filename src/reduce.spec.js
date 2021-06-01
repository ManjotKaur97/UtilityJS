const reduce = require('./reduce');
const add= require('./add');

describe('Filter', () => {
  it('reduce([],(x,y)=>x+y) should be undefined', () => {
    expect(reduce([], add)).toEqual(undefined);
  });

  it('reduce([],v(x,y)=>x+y,10) should be 10', () => {
    expect(reduce([], add, 10)).toEqual(10);
  });

  it("reduce(['a','b','c'],(x,y)=>x+y) should be abc", () => {
    expect(reduce(["a","b","c"], add)).toEqual("abc");
  });

  it("reduce(['a','b','c'],(x,y)=>x+y,’z’), should be zabc", () => {
    expect(reduce(["a","b","c"], add,"z")).toEqual("zabc");
  });
});