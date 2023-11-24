const { convertor } = require('./convert')

describe('Convertor function should', () => {

    test('check defined', () => {
        expect(convertor).toBeDefined()
    })

    test('return correct convert currency', () => {
        expect(convertor(100, 'dollar')).toBe(58)
        expect(convertor(50, 'rub')).toBe(2631)
        expect(convertor(75, 'euro')).toBe(41)
    })

    test('return approximate results', () => {
        expect(convertor(30, 'dollar')).toBeGreaterThan(15)
        expect(convertor(20, 'euro')).toBeGreaterThan(10)
        expect(convertor(10, 'rub')).toBeGreaterThan(500)
        expect(convertor(20, 'euro')).toBeLessThan(15)
        expect(convertor(100, 'dollar')).toBeLessThan(70)
        expect(convertor(736, 'rub')).toBeLessThan(150000)
    })
})


