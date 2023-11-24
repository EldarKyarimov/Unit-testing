const calendarCalc = require('./calendar');

describe('Calendar fuction should', () => {

    test('return defined', () => {
        expect(calendarCalc).not.toBeUndefined()
    })

    test('Difference between two dates is calculated correctly', () => {
        expect(calendarCalc(new Date(2023, 8, 1), new Date(2023, 8, 10))).toEqual(9);
        expect(calendarCalc(new Date(1999, 6, 15), new Date(2022, 6, 16))).toBe(8402);
        expect(calendarCalc(new Date(2023, 3, 15), new Date(2023, 6, 20))).toBe(96);
    })

    test('Difference between two dates is Greater', () => {
        expect(calendarCalc(new Date(2023, 5, 13), new Date(2023, 7, 24))).toBeGreaterThan(50)
        expect(calendarCalc(new Date(2002, 3, 30), new Date(2022, 2, 22))).toBeGreaterThan(7222)
        expect(calendarCalc(new Date(2023, 8, 3), new Date(2023, 8, 23))).toBeGreaterThanOrEqual(20)
    })

})

