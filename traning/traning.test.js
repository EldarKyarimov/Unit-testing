const { sum, nativeNull } = require('./traning')

describe('Sum function', () => {
    test('should return sum of the two values', () => {
        expect(sum(1, 4)).toBe(5)
        expect(sum(0.4, 0.7)).toBeCloseTo(1.1)
    })

    test('should return value correctly comparing other', () => {
        expect(sum(4, 9)).toBeGreaterThan(10)
        expect(sum(3, 6)).toBeLessThan(10)
        expect(sum(5, 5)).toBeLessThanOrEqual(10)
        expect(sum(5, 7)).not.toBe(10)
    })
})


describe('NativeNull function', () => {
    test(' should return null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).not.toBe(true)
        expect(nativeNull()).toBeFalsy();
        expect(nativeNull()).not.toBeTruthy();
        expect(nativeNull()).toBeNull();
        expect(nativeNull()).toBeDefined();
    })
})

