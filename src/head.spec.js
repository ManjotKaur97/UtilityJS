const head = require('./head');

describe('Head', () => {

    it('First element of [1,2,3] is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('First element of [] is null ', () => {
        expect(head([])).toEqual(undefined);
    });

})
