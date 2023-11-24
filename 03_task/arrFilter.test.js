const { checkArr } = require('./arrFilter')

describe('Function should return', () => {

    test('defined func', () => {
        expect(checkArr).toBeDefined()
    })

    test('even numbers', () => {
        const inputArray = [2, 4, 5, 1, 6, 7, 9]
        const result = checkArr(inputArray);

        expect(result).toEqual([2, 4, 6]);
    })

    test('empty array', () => {
        const result = checkArr([]);
        expect(result).toEqual([]);
    })

})

