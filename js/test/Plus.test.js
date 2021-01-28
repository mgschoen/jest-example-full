import plus from '../modules/Plus';

describe('plus()', () => {
    test('adds two numbers correctly', () => {
        expect(plus(2,3)).toEqual(5);
    });
    
    test('accepts no less than two arguments', () => {
        expect.assertions(4);
        expect(plus()).toBeNull();
        expect(plus(1)).toBeNull();
        expect(plus(1,2)).toEqual(3);
        expect(plus(1,2,3)).toEqual(3);
    });
    
    test('accepts only numerical arguments', () => {
        expect.assertions(10);
        expect(plus(1, '2')).toBeNull();
        expect(plus(1, null)).toBeNull();
        expect(plus(1, true)).toBeNull();
        expect(plus(1, () => {})).toBeNull();
        expect(plus(1, {})).toBeNull();
        expect(plus('2', 2)).toBeNull();
        expect(plus(null, 2)).toBeNull();
        expect(plus(true, 2)).toBeNull();
        expect(plus(() => {}, 2)).toBeNull();
        expect(plus({}, 2)).toBeNull();
    });
});