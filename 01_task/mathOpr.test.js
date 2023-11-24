const { sum, subtract, multiply, divide } = require('./mathOpr')

describe('Function should return', () => {

    test('Correct sum result', () => {
        expect(sum(3, 5)).toBe(8);
        expect(sum(5, 5)).toEqual(10);
        expect(sum(83, 923)).toEqual(1006);
    })

    test('Correct subtract result', () => {
        expect(subtract(10, 7)).toBe(3);
        expect(subtract(93, 46)).toBe(47);
        expect(subtract(953, 46)).toBeLessThan(950);
    })

    test('Correct multiply result', () => {
        expect(multiply(5, 3)).toBe(15);
        expect(multiply(16, 3)).toBe(48);
        expect(multiply(36, 9)).toBeLessThan(400);
    })

    test('Correct divide result', () => {
        expect(divide(9, 3)).toBe(3);
        expect(divide(90, 3)).toBeGreaterThanOrEqual(30);
    })
})




