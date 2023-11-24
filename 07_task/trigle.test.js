const { triangle } = require('./trigle')

describe('Function according to form Heron triangle', () => {

    test('check defined', () => {
        expect(triangle).toBeDefined()
    })

    test('correct rounded values ', () => {
        expect(triangle(5, 4, 5)).toEqual(3)
        expect(triangle(6, 5, 5)).toEqual(4)
        expect(triangle(46, 56, 32)).toEqual(89)
    })

    test('return Greater values', () => {
        expect(triangle(55, 66, 77)).toBeGreaterThan(50)
        expect(triangle(61, 53, 57)).toBeGreaterThan(40)
        expect(triangle(25, 36, 27)).toBeGreaterThan(20)
    })

    test('return Less values', () => {
        expect(triangle(34, 35, 36)).toBeLessThan(80)
        expect(triangle(44, 45, 46)).toBeLessThanOrEqual(106)
    })
})



