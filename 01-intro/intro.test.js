const { sum, subtract, multiply, divide, nativeNull } = require('./intro')

test('Sum should return value correctly comparing to other', () => {
    expect(sum(3, 3)).toBeGreaterThan(5);
    expect(sum(3, 3)).toBeGreaterThanOrEqual(6);
    expect(sum(7, 3)).toBeLessThan(15);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
})

test('Sum should sum 2 float values correctly', () => {
    expect(sum(0.1, 0.3)).toEqual(0.4);
    expect(sum(0.5, 0.5)).toBeCloseTo(1);
})

describe('Function should return', () => {
    test('Correct sum result', () => {
        expect(sum(3, 5)).toBe(8);
        expect(sum(5, 5)).toEqual(10);
    })

    test('Correct subtract result', () => {
        expect(subtract(10, 7)).toBe(3);
    })

    test('Correct multiply result', () => {
        expect(multiply(5, 3)).toBe(15);
    })

    test('Correct divide result', () => {
        expect(divide(9, 3)).toBe(3);
    })
})


describe('Native null function', () => {
    test('should return false null', () => {
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeFalsy();
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeTruthy();
        expect(nativeNull()).not.toBeUndefined();
    })
})




